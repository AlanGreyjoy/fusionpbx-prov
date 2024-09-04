const Sequelize = require("sequelize");
const SequelizeAuto = require("sequelize-auto");

const postgresPass = process.env.POSTGRES_PASS;

const sequelize = new Sequelize(
  `postgres://fusionpbx:${postgresPass}@localhost:5432/fusionpbx`
);

const options = {
  host: "localhost",
  dialect: "postgres",
  directory: "./models",
  port: "5432",
  caseModel: "p",
  caseFile: "c",
};

const auto = new SequelizeAuto(sequelize, null, null, options);

module.exports.syncDb = () => {
  console.log("Syncing database...");

  auto.run();
};

module.exports = sequelize;
