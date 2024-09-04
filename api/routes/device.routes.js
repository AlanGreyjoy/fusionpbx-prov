const router = require("express").Router({ mergeParams: true });
const auth = require("../middlewares/auth");
const deviceController = require("../controllers/device.controller");

router.get("/vendors", auth, deviceController.getVendors);
router.get("/vendor-templates", auth, deviceController.getAvailableTemplates);
router.post("/", auth, deviceController.addDevice);
router.post("/:device_address/assign", auth, deviceController.assignDevice);
router.get("/domains/:domainUuid", auth, deviceController.getDevices);
router.get("/:deviceUuid", auth, deviceController.getDevice);
router.put("/:deviceUuid", auth, deviceController.updateDevice);
router.delete("/:deviceUuid", auth, deviceController.deleteDevice);

module.exports = router;
