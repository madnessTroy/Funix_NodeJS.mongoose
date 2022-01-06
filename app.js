// Core module
const http = require("http");

// custom module
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000); // Tạo web server ở port 3000
