const express = require("express");
const adminController = require("../controller/adminController");

const adminRouter = express.Router();

adminRouter.post("/category", async (req, res) => {
	return adminController.addCategory(req, res);
});

module.exports = adminRouter;
