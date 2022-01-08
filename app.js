// ExpressJS
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Tạo middleware
app.use("/add-product", (req, res, next) => {
	res.send(`
        <form method="POST" action="/product">
            <input type="text" name="title" />
            <button type="submit">Add product</button>
        </form>
    `);
});

app.use("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

app.use("/", (req, res, next) => {
	res.send("<h1>Hello fromm Express!</h1>"); // Mặc định res.setHeader của express là 'text/html'
});

app.listen(3000); // Tạo web server ở port 3000
