const router = require("express").Router({ mergeParams: true });
const auth = require("../middlewares/auth");
const domainController = require("../controllers/domain.controller");

router.get("/", auth, domainController.getDomains);
router.get("/:domainUuid", auth, domainController.getDomain);

router.get(
  "/:domainUuid/auto-provision-enabled",
  auth,
  domainController.getDomainAutoProvisionEnabled
);

router.post("/", auth, domainController.createDomain);
router.put(
  "/:domainUuid/enable-auto-provision",
  auth,
  domainController.enableAutoProvision
);
router.put(
  "/:domainUuid/disable-auto-provision",
  auth,
  domainController.disableAutoProvision
);

module.exports = router;
