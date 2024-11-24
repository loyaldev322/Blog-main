const config = require("../config");
const jwt = require("jsonwebtoken");
module.exports = {
	response: (status, message, data) => {
		return {
			status,
			message,
			data,
		};
	},
	generateAccessToken: (user) => {
		return jwt.sign(user, config.jwtSecret, {
			expiresIn: config.jwtExpireTime,
		});
	},
};
