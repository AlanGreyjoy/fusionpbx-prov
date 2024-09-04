const deviceService = require("../services/device.service");

module.exports.getVendors = async (req, res) => {
  const vendors = await deviceService.getVendors();

  return res.status(200).send(vendors);
};

module.exports.getAvailableTemplates = async (req, res) => {
  const vendorUuid = req.params.vendorUuid;

  const templates = await deviceService.getAvailableTemplates(vendorUuid);

  return res.status(200).send(templates);
};

module.exports.addDevice = async (req, res) => {
  const device = req.body;

  await deviceService.addDevice(device);

  return res.status(201).send({ message: "Device added" });
};

module.exports.getDevice = async (req, res) => {
  const deviceUuid = req.params.deviceUuid;

  const device = await deviceService.getDevice(deviceUuid);

  if (!device) {
    return res
      .status(404)
      .send({ message: "Device not found in fusionpbx-autop" });
  }

  return res.status(200).send(device);
};

module.exports.getDevices = async (req, res) => {
  const { domainUuid } = req.params;

  const devices = await deviceService.getDevices(domainUuid);

  return res.status(200).send(devices);
};

module.exports.updateDevice = async (req, res) => {
  const deviceUuid = req.params.deviceUuid;
  const device = req.body;

  await deviceService.updateDevice(deviceUuid, device);

  return res.status(200).send({ message: "Device updated" });
};

module.exports.deleteDevice = async (req, res) => {
  const deviceUuid = req.params.deviceUuid;

  await deviceService.deleteDevice(deviceUuid);

  return res.status(200).send({ message: "Device deleted" });
};
