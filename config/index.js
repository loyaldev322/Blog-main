const dotenv = require("dotenv");
dotenv.config();

const config = function () {
	this.PORT = process.env.PORT || 3000;
	this.jwtSecret = process.env.JWT_SECRET || "secret";
	this.NODE_ENV = process.env.NODE_ENV || "development";
	this.mongoUrl =
		process.env.MONGO_URL || "mongodb://localhost:27017/blogify";
	this.jwtExpireTime = process.env.JWT_EXPIRE_TIME || "24h";
	this.awsId = process.env.AWS_ID;
	this.awsSecretId = process.env.AWS_SECRET_KEY;
	this.awsBucketName = process.env.AWS_BUCKET_NAME;
};

module.exports = new config();
