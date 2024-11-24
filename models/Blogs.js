const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const BlogsModel = new Schema(
	{
		category_id: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "blog_categories",
		},
		image: {
			type: String,
			required: true,
		},
		image_alt: {
			type: String,
			required: false,
		},
		title: {
			type: String,
			required: true,
		},
		author_id: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "users",
		},
		content: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			// enum: [ "Published", "InActive" ]
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
		collection: "blogs",
	},
);

module.exports = new mongoose.model("Blogs", BlogsModel);
