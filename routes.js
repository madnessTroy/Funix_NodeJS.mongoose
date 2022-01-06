const fs = require("fs"); // file system

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	// Path "/"
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

	// Path "/message"
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split("=")[1];
			fs.writeFile("message.txt", message, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/"); // relocate về path "/"
				return res.end();
			});
		});
	}

	// Tạo res cho phía client
	res.setHeader("Content-Type", "text/html"); // Đặt header cho res (HTML)
	res.write("<html>");
	res.write("<head><title>My first NodeJS page</title></head>");
	res.write("<h1>Hello from my Node.js server!</h1>");
	res.write("</html>");
	res.end(); // lưu ý phải có dòng này, sau dòng này thì sẽ không có res nào được gửi đi
};

module.exports = {
	handler: requestHandler,
	someText: "Hello",
};
