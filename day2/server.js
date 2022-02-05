const http = require("http");

// const server = http.createServer((req, res) => {
// 	if (req.url == "/") {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write("Welcome To HomePage");
// 		res.end();
// 	} else if (req.url == "/profile") {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write("<h1>Welcome to Profile Page</h1>");
// 		res.end();
// 	} else {
// 		res.writeHead(404, { "Content-Type": "application/json" });
// 		const data = {
// 			id: "error",
// 			content: "not found",
// 			error_id: "9865efuhnvb86iyvcsgxwrh",
// 		};
// 		res.write(JSON.stringify(data));
// 		res.end();
// 	}

// 	// res.end();
// });

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write("<h1>Welcome to DashBoard</h1>");
			res.end();
			break;
		case "/profile":
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write("<div>Welcome to Profile Page</div>");
			res.end();
			break;

		// default:
		// 	res.writeHead(404, { "Content-Type": "application/json" });
		// 	res.write({
		// 		id: "not found",
		// 		page: "missing",
		// 		error_id: "tyer67tyiuhjwseyudf5rt65rt",
		// 	});
		// 	res.end();
		// 	break;
	}
});

server.listen(5000, () => {
	console.log("server is running at PORT 5000");
});
