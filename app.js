// Import
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
app.use(adminRoutes);
app.use(shopRoutes);
