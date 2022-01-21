// const Sequelize = require("sequelize");
// const pkg = require("../../package.json");

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

// const config = {
//   logging: false,
// };

// if (process.env.LOGGING === "true") {
//   delete config.logging;
// }

// if (process.env.DATABASE_URL) {
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   };
// }

// const db = new Sequelize(
//   process.env.DATABASE_URL || "postgress://localhost:5432/wwcellulars",
//   config
// );

// module.exports = db;
