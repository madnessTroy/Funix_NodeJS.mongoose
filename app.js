const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req);
	// process.exit() -- kết thúc vòng đời của node nếu không có res nào trả đi từ server
	const url = req.url;
	if (url === "/") {
		res.write("<html>");
		res.write(`
            <head>
                <title>Enter message</title>
            </head>
        `);
		res.write(`
		    <body>
		        <form method="POST" action="/message">
		            <input type="text" name="message">
		            <button type="submit">Send</button>
		        </form>
		    </body>
		`);
		res.write("</html>");
		return res.end();
	}

	// Tạo res cho phía client
	res.setHeader("Content-Type", "text/html"); // Đặt header cho res (HTML)
	res.write("<html>");
	res.write("<head><title>My first NodeJS page</title></head>");
	res.write("<h1>Hello from my Node.js server!</h1>");
	res.write("</html>");
	res.end(); // lưu ý phải có dòng này, sau dòng này thì sẽ không có res nào được gửi đi
});

server.listen(3000); // Tạo web server ở port 3000
