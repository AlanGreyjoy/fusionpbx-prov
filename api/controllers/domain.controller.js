const domainService = require("../services/domain.service");

module.exports.getDomains = async (req, res) => {
  const domains = await domainService.getDomains();

  return res.status(200).send(domains);
};

module.exports.getDomain = async (req, res) => {
  const domainUuid = req.params.domainUuid;

  const domain = await domainService.getDomain(domainUuid);

  if (!domain) {
    return res
      .status(404)
      .send({ message: "Domain not found in fusionpbx-autop" });
  }

  return res.status(200).send(domain);
};

module.exports.getDomainAutoProvisionEnabled = async (req, res) => {
  const domainUuid = req.params.domainUuid;

  const autoProvisionEnabled = await domainService.autoProvisionEnabled(
    domainUuid
  );

  return res.status(200).send({ autoProvisionEnabled });
};

module.exports.createDomain = async (req, res) => {
  const domain = req.body;

  const newDomain = await domainService.createDomain(domain);

  return res.status(201).send(newDomain);
};

module.exports.enableAutoProvision = async (req, res) => {
  const domainUuid = req.params.domainUuid;

  const creds = await domainService.enableAutoProvision(domainUuid);

  return res.status(200).send({ message: "Auto-provisioning enabled", creds });
};

module.exports.disableAutoProvision = async (req, res) => {
  const domainUuid = req.params.domainUuid;

  await domainService.disableAutoProvision(domainUuid);

  return res.status(200).send({ message: "Auto-provisioning disabled" });
};
