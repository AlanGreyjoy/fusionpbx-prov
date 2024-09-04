const sequelize = require("../db/sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);

module.exports.getDomainSetting = async (domainUuid, setting) => {
  return await models.VDomainSettings.findOne({
    where: { domain_uuid: domainUuid, domain_setting_subcategory: setting },
  });
};

module.exports.updateDomainSetting = async (domainUuid, setting) => {};

module.exports.deleteDomainSetting = async (domainUuid, setting) => {
  return await models.VDomainSettings.destroy({
    where: { domain_uuid: domainUuid, domain_setting_subcategory: setting },
  });
};
