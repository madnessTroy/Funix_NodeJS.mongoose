// Import
const path = require("path");
// ExpressJS
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
// Router
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Setting views engine
app.engine(
	"hbs",
	expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layouts", extname: "hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

// Tạo web server ở port 3000
app.listen(3000);

// Router
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// Error page
app.use((req, res, next) => {
	res.status(404).render("404", { pageTitle: "Page not found" });
});
