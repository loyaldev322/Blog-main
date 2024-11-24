const express = require("express");
const blogsController = require("../controller/blogsController");

const blogsRouter = express.Router();

blogsRouter.get("/", blogsController.getAllBlogs);

module.exports = blogsRouter;
