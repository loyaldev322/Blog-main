const Service = require("../service");
const BlogsCategories = require("../models/BlogCategories");

module.exports = {
	addCategory: async (req, res) => {
		try {
			let { category_name, category_description } = req.body;

			if (!category_description || !category_name)
				return res
					.status(400)
					.json(
						Service.response(0, "All Fields Are Required.", null),
					);

			let category = new BlogsCategories({
				category_name,
				category_description,
			});

			let newCategory = await category.save();

			if (!newCategory || newCategory.length === 0)
				return res
					.status(400)
					.json(
						Service.response(
							0,
							"Something Went Wrong While Proccessing Your Request.",
							null,
						),
					);

			return res
				.status(200)
				.json(
					Service.response(
						1,
						"Category Added Successfully.",
						newCategory,
					),
				);
		} catch (error) {
			return res
				.status(500)
				.json(Service.response(0, "Internal Server Error.", error));
		}
	},
};
