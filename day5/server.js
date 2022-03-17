const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/student");

dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect(
	process.env.ATLAS_URI,

	(err) => {
		if (err) {
			console.log("connection to database failed");
		} else console.log("connection to database is successful");
	}
);

app.get("/api/student", (req, res) => {
	Student.find()
		.then((students) => res.json(students))
		.catch((err) => res.status(400).json(err));
});

app.post("/api/student", (req, res) => {
	const { id, first_name, last_name } = req.body;
	const newStudent = Student({ id, first_name, last_name });
	newStudent
		.save()
		.then(() => res.json("student added successfully"))
		.catch((err) => res.status(400).json("Error" + err));
});

app.delete("/api/student/:id", (req, res) => {
	Student.findByIdAndDelete(req.params.id)
		.then(() => res.json("student deleted successfully"))
		.catch((err) => res.status(400).json(err));
});

app.post("/api/student/update/:id", (req, res) => {
	Student.findById(req.params.id)
		.then((student) => {
			student.id = req.body.id;
			student.first_name = req.body.first_name;
			student.last_name = req.body.last_name;
			student
				.save()
				.then(() => res.json("student updated successfully"))
				.catch((err) => res.status(400).json(err));
		})
		.catch((err) => res.status(400).json(err));
});
app.listen(5000, () => {
	console.log("server is up and running");
});
