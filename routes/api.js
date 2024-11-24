const express = require("express");

const authRouter = require("../routes/auth");
const usersRouter = require("../routes/users");
const adminRouter = require("../routes/admin");
const blogsRouter = require("../routes/blogs");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/user", usersRouter);
apiRouter.use("/blogs", blogsRouter);
apiRouter.use("/admin", adminRouter);

module.exports = apiRouter;
