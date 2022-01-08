// ExpressJS
const express = require("express");

const app = express();

// Tạo middleware
app.use("/", (req, res, next) => {
	console.log("This always runs");
	next();
});

app.use("/add-product", (req, res, next) => {
	res.send("<h1>The Add product page</h1>");
});

app.use("/", (req, res, next) => {
	console.log("Hello from second middleware");
	res.send("<h1>Hello fromm Express!</h1>"); // Mặc định res.setHeader của express là 'text/html'
});

app.listen(3000); // Tạo web server ở port 3000
