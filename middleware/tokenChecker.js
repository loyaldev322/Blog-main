const jwt = require("jsonwebtoken");
const config = require("../config");
const Service = require("../service");

class TokenChecker {
	async checkToken(req, res, next) {
		// return next();
		try {
			const token = req.headers.authorization?.split(" ")[1];

			if (!token || typeof token === "undefined") {
				return res
					.status(400)
					.json(Service.response(0, "Please Provide Token.", null));
			}
			jwt.verify(token, config.jwtSecret, (error, user) => {
				if (error)
					return res
						.status(401)
						.json(
							Service.response(
								0,
								"Please Provide Valid token!",
								null,
							),
						);

				req.user = user;
				next();
			});
			// next();
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json(Service.response(0, "Internal Server Error.", error));
		}
	}
}

module.exports = new TokenChecker();
