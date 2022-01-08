// Import
const path = require("path");
// ExpressJS
const express = require("express");
const bodyParser = require("body-parser");
// Router
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Tạo web server ở port 3000
app.listen(3000);

// Router
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Error page
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});
