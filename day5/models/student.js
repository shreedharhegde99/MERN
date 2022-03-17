const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
		},
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model("Student", studentSchema);
