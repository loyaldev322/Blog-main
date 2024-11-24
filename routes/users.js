const express = require("express");
const upload = require("../middleware/upload");

const TokenChecker = require("../middleware/tokenChecker");
const usersController = require("../controller/usersController");

const usersRouter = express.Router();

usersRouter.get("/find-user", async (req, res) => {
	return usersController.searchUser(req, res);
});

usersRouter.get("/my-blogs", TokenChecker.checkToken, async (req, res) => {
	return usersController.getAllByBlogs(req, res);
});

usersRouter.post(
	"/new-blog",
	TokenChecker.checkToken,
	upload,
	async (req, res) => {
		return usersController.addNewBlog(req, res);
	},
);

usersRouter.put(
	"/update-blog",
	TokenChecker.checkToken,
	upload,
	async (req, res) => {
		return usersController.updateBlog(req, res);
	},
);

usersRouter.delete(
	"/delete-blog",
	TokenChecker.checkToken,
	async (req, res) => {
		return usersController.deleteBlog(req, res);
	},
);

module.exports = usersRouter;
