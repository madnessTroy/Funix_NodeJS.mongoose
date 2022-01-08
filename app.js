// Core module
const http = require("http");

// ExpressJS
const express = require("express");

const app = express();

// Tạo middleware
app.use((req, res, next) => {
	console.log("Hello from first middleware");
	next();
});

app.use((req, res, next) => {
	console.log("Hello from second middleware");
});
// app sẽ nắm giữ các logic cho server (req,res) được tạo bởi express
const server = http.createServer(app);

server.listen(3000); // Tạo web server ở port 3000
