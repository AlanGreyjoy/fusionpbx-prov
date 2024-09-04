const express = require("express");
require("express-async-errors");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const server = http.createServer(app);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

app.use("/autop/rest", routes);

app.use((req, res, next) => {
  console.log(`Route not found: ${req.originalUrl}`);

  return res
    .status(404)
    .send({ message: "Route not found!", requestedRoute: req.originalUrl });
});

module.exports = server;
