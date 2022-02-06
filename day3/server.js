const express = require("express");
const students = require("./mockData.json");
const { v4: uuid } = require("uuid");

const app = express();

// MIDDLEWARE
app.use(express.json());

// GET METHOD
app.get("/api/students", (req, res) => {
	res.status(200).json(students);
});

// POST METHOD

app.post("/api/students", (req, res) => {
	// const { first_name, last_name, email } = req.body;
	if (!req.body.first_name || !req.body.last_name || !req.body.email) {
		return res.status(400).json({ message: "Please provide  all the values" });
	}
	const id = uuid();
	const fname = req.body.first_name;
	const lname = req.body.last_name;
	const mail = req.body.email;
	const student = { id, fname, lname, mail };
	students.push(student);
	res.status(200).json({
		message: {
			student,
		},
	});
});

// PUT METHOD

app.post("/api/students/:id", (req, res) => {
	const id = req.params.id;
	const index = students.findIndex((student) => student.id === id);
	if (index >= 0) {
		const updatedStudent = students[index];
		updatedStudent.fname = req.body.first_name;
		updatedStudent.lname = req.body.last_name;
		updatedStudent.mail = req.body.email;
		res.status(200).json({ updatedStudent });
	} else {
		res.status(404).json({ error: "student record not found" });
	}
});

// DELETE METHOD

app.delete("/api/students/:id", (req, res) => {
	const id = req.params.id;
	const index = students.findIndex((student) => student.id === id);
	if (index >= 0) {
		const studentToRemove = students[index];
		students.splice(index, 1);
		res.status(200).json(studentToRemove);
	} else {
		res.status(404).json({ error: "student record not found" });
	}
});

app.listen(5000, () => {
	console.log("server is runnng at PORT 5000");
});
