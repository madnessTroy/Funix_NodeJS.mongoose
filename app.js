// Import
const path = require("path");
// ExpressJS
const express = require("express");
const bodyParser = require("body-parser");
// Router
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//
const errorController = require("./controller/404");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Setting views engine
app.set("view engine", "ejs");
app.set("views", "views");

// Tạo web server ở port 3000
app.listen(3000);

// Router
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Error page
app.use(errorController.get404Page);
