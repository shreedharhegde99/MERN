const express = require("express");
const { m1, m2 } = require("./middleware");

const app = express();
app.use(m1);
app.use(m2);

app.get("/", (req, res) => {
	console.log("hello world");
});

app.listen(5000, () => {
	console.log("server is up and running at port 5000");
});
