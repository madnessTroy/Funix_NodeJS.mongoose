const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "node-complete",
	password: "Binh3o123.",
});

module.exports = pool.promise();
