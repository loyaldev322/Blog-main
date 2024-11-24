const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const BlogCategoriesModel = new Schema(
	{
		category_name: {
			type: String,
			required: true,
		},
		category_description: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
		collection: "blog_categories",
	},
);

module.exports = new mongoose.model("BlogsCategories", BlogCategoriesModel);
