const Blogs = require("../models/Blogs");
const Service = require("../service");

module.exports = {
	getAllBlogs: async (req, res) => {
		try {
			let cat = req.query.cat;
			let params = {};
			if (cat) {
				params = {
					category_id: cat,
				};
			}
			params.status = "published";
			let blogs = await Blogs.find(params);

			if (!blogs || blogs.length === 0) {
				return res
					.status(201)
					.json(Service.response(1, "No Blogs Found.", []));
			}

			return res
				.status(200)
				.json(Service.response(1, "Blogs Found Success.", blogs));
		} catch (error) {
			return res
				.status(500)
				.json(Service.response(0, "Internal Server Error.", error));
		}
	},
};
