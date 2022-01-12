const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Binh3o123.", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
