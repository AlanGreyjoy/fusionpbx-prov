const sequelize = require("../db/sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const { v4: uuidv4 } = require("uuid");

const domainSettingService = require("./domainSetting.service");

module.exports.getDomain = async (domainUuid) => {
  return await models.VDomains.findOne({
    where: { domain_uuid: domainUuid },
  });
};

module.exports.getDomains = async () => {
  return await models.VDomains.findAll();
};

module.exports.autoProvisionEnabled = async (domainUuid) => {
  const setting = await domainSettingService.getDomainSetting(
    domainUuid,
    "auto_provision_enabled"
  );

  if (!setting) {
    return false;
  }

  const username = await models.VDomainSettings.findOne({
    where: {
      domain_uuid: domainUuid,
      domain_setting_subcategory: "http_auth_username",
    },
  });

  const password = await models.VDomainSettings.findOne({
    where: {
      domain_uuid: domainUuid,
      domain_setting_subcategory: "http_auth_password",
    },
  });

  return {
    enabled: setting.domain_setting_value === "true",
    username: username ? username.domain_setting_value : null,
    password: password ? password.domain_setting_value : null,
  };
};

module.exports.createDomain = async (domain) => {
  return await models.VDomains.create(domain);
};

module.exports.enableAutoProvision = async (domainUuid) => {
  await models.VDomainSettings.create({
    domain_uuid: domainUuid,
    domain_setting_uuid: uuidv4(),
    domain_setting_category: "provision",
    domain_setting_subcategory: "auto_provision_enabled",
    domain_setting_name: "text",
    domain_setting_value: "true",
    domain_setting_enabled: true,
  });

  // ## Generate random 6 alphanumeric characters
  const username = Math.random().toString(36).slice(-6);
  const password = Math.random().toString(36).slice(-6);

  await models.VDomainSettings.create({
    domain_uuid: domainUuid,
    domain_setting_uuid: uuidv4(),
    domain_setting_category: "provision",
    domain_setting_subcategory: "http_auth_password",
    domain_setting_name: "text",
    domain_setting_value: password,
    domain_setting_enabled: true,
  });

  await models.VDomainSettings.create({
    domain_uuid: domainUuid,
    domain_setting_uuid: uuidv4(),
    domain_setting_category: "provision",
    domain_setting_subcategory: "http_auth_username",
    domain_setting_name: "text",
    domain_setting_value: username,
    domain_setting_enabled: true,
  });

  return { username, password };
};

module.exports.disableAutoProvision = async (domainUuid) => {
  await domainSettingService.deleteDomainSetting(
    domainUuid,
    "auto_provision_enabled"
  );
  await domainSettingService.deleteDomainSetting(
    domainUuid,
    "http_auth_password"
  );
  await domainSettingService.deleteDomainSetting(
    domainUuid,
    "http_auth_username"
  );
};

module.exports.getAutoProvisioningUsername = async (domainUuid) => {
  const setting = await domainSettingService.getDomainSetting(
    domainUuid,
    "http_auth_username"
  );

  return setting ? setting.domain_setting_value : null;
};

module.exports.getAutoProvisioningPassword = async (domainUuid) => {
  const setting = await domainSettingService.getDomainSetting(
    domainUuid,
    "http_auth_password"
  );

  return setting ? setting.domain_setting_value : null;
};
