require("dotenv").config();
const server = require("./app");
const sequelize = require("./db/sequelize");

const syncDb = false;

init();

async function init() {
  startServer();
}

async function startServer() {
  console.log("Starting server...");

  server.listen(6066, async () => {
    console.log(`Server environment: ${process.env.NODE_ENV}`);
    console.log(`Server is running on port 6066`);
  });
}
