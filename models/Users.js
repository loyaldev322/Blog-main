const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const UsersModel = new Schema(
	{
		full_name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
		collection: "users",
	},
);

module.exports = new mongoose.model("Users", UsersModel);
