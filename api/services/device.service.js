const sequelize = require("../db/sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

models.VDevices.hasMany(models.VDeviceLines, {
  foreignKey: "device_uuid",
  sourceKey: "device_uuid",
  as: "device_lines",
});

module.exports.getVendors = async () => {
  const vendors = await models.VDeviceVendors.findAll();

  return vendors;
};

module.exports.getAvailableTemplates = async () => {
  const blacklist = ["zoiper"];

  const templates = fs.readdirSync(
    path.join(__dirname, "../../resources/templates/provision")
  );

  const templateList = [];

  for (const template of templates) {
    if (blacklist.includes(template)) {
      continue;
    }

    if (!templateList.includes(template)) {
      templateList.push({
        name: template,
        models: [],
      });
    }

    const models = fs.readdirSync(
      path.join(__dirname, `../../resources/templates/provision/${template}`)
    );

    for (const model of models) {
      if (
        !templateList.find((t) => t.name === template).models.includes(model)
      ) {
        templateList
          .find((t) => t.name === template)
          .models.push({
            name: model,
          });
      }
    }
  }

  return templateList;
};

module.exports.addDevice = async (device) => {
  console.log("Adding device...");
  console.log(device);

  await models.VDevices.create({
    device_uuid: uuidv4(),
    domain_uuid: device.domainUuid,
    device_address: device.macAddress,
    device_description: device.description,
    device_location: device.location,
    device_room: device.room,
    device_vendor: device.model.brand,
    device_model: device.model.name,
    device_template: `${device.model.brand}/${device.model.name}`,
    insert_date: new Date(),
  });
};

module.exports.getDevices = async (domainUuid) => {
  const devices = await models.VDevices.findAll(
    {
      where: { domain_uuid: domainUuid },
    },
    {
      includes: [
        {
          model: models.VDeviceLines,
          as: "device_lines",
          required: true,
        },
      ],
    }
  );

  return devices;
};

module.exports.getDevice = async (deviceUuid) => {
  const device = await models.VDevices.findOne({
    where: { device_uuid: deviceUuid },
  });

  return device;
};

module.exports.updateDevice = async (deviceUuid, device) => {
  await models.VDevices.update(device, {
    where: { device_uuid: deviceUuid },
  });
};

module.exports.deleteDevice = async (deviceUuid) => {
  await models.VDevices.destroy({
    where: { device_uuid: deviceUuid },
  });
};

module.exports.assignDeviceToUser = async (device) => {
  console.log("Assigning device to user...");
  console.log(device);

  await models.VDeviceLines.create({
    domain_uuid: device.domain_uuid,
    device_line_uuid: uuidv4(),
    device_uuid: device.device_uuid,
    line_number: "1",
    server_address: process.env.PROVISION_SERVER_ADDRESS,
    label:
      `${device.userOptions.user.firstname} ${device.userOptions.user.lastname}` ||
      "",
    display_name:
      `${device.userOptions.user.firstname} ${device.userOptions.user.lastname}` ||
      "",
    user_id: device.userOptions.sipUser,
    auth_id: device.userOptions.sipUser,
    password: device.userOptions.sipPassword,
    sip_port: "5060",
    sip_transport: "udp",
    register_expires: "120",
    enabled: "true",
    insert_date: new Date(),
  });
};
