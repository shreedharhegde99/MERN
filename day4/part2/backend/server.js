const express = require("express");
const students = require("./students.json");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/students", (req, res) => {
	res.json(students);
});

app.listen(5000, () => {
	console.log("server is up and running at PORT 5000");
});
