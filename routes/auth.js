const express = require("express");
const TokenChecker = require("../middleware/tokenChecker");
const authController = require("../controller/authController");

// https://www.vgetfresh.com/blog/

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
	return authController.signup(req, res);
});

authRouter.post("/login", async (req, res) => {
	return authController.login(req, res);
});

module.exports = authRouter;
