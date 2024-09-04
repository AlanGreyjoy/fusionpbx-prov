const router = require("express").Router({ mergeParams: true });

const routes = [
  { path: "/domains", router: require("./domain.routes") },
  { path: "/devices", router: require("./device.routes") },
];

for (let route of routes) {
  router.use(route.path, route.router);
}

module.exports = router;
