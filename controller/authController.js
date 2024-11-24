const md5 = require("md5");
const Users = require("../models/Users");
const { generateAccessToken } = require("../service");
const Service = require("../service");
const _ = require("lodash");

module.exports = {
	signup: async (req, res) => {
		try {
			// get all required fields
			let { username, full_name, email, password } = _.pick(
				req.body,
				"username",
				"full_name",
				"email",
				"password",
			);

			// if required details are not sent
			if (!username || !full_name || !email || !password) {
				return res
					.status(400)
					.json(
						Service.response(0, "All Fields Are Mendatory.", null),
					);
			}

			// check if user found in db.
			let user = await Users.find({ email });
			console.log({ user });
			if (!user || user.length !== 0)
				return res
					.status(403)
					.json(
						Service.response(
							0,
							"User Already Exists With email.",
							null,
						),
					);

			user = new Users({
				full_name,
				email,
				password: md5(password),
				username,
			});

			let newUser = await user.save();

			if (!newUser || newUser.length === 0)
				return res
					.status(400)
					.json(
						Service.response(
							0,
							"Something Went Wrong While Proccessing Your Request.",
							null,
						),
					);

			newUser["accessToken"] = generateAccessToken({ username, email });

			return res
				.status(200)
				.json(Service.response(1, "Registration Success.", newUser));
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json(Service.response(0, "Internal Server Error.", error));
		}
	},
	login: async (req, res) => {
		try {
			let { email, password } = _.pick(req.body, "email", "password");

			await Users.find({ email }).then(async (user) => {
				console.log({ user });
				if (!user || user.length === 0)
					return res
						.status(201)
						.json(
							Service.response(
								0,
								"User Not Found with email.",
								null,
							),
						);

				if (user[0].password != md5(password)) {
					return res
						.status(201)
						.json(Service.response(0, "Incorrect Password.", null));
				}
				user = user[0];
				let userData = {
					username: user.username,
					email: user.email,
					full_name: user.full_name,
				};
				userData.token = Service.generateAccessToken({
					username: user.username,
					email: user.email,
					user_id: user._id,
				});

				return res
					.status(200)
					.json(Service.response(1, "Login Success.", userData));
			});
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json(Service.response(0, "Internal Server Error.", error));
		}
		// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmlrYW5hbmkiLCJlbWFpbCI6ImhrYW5hbmkxOTFAZ21haWwuY29tIiwiaWF0IjoxNjM3MzE5NDk2LCJleHAiOjE2Mzc0MDU4OTZ9.h1gmtH_PZnJtZ6d3VS78PtOhQJT9UzQ6WRpafrtHRM8
	},
	// generateTokenUsingRefreshToken: (refreshToken) => {
	// 	if(token === null) return res.sendStatus(403);
	// 	jwt.verify(refreshToken, config.refreshTokenSecret, (err, user) => {
	// 		if(err) return res.sendStatus(403);

	// 		const accessToken = jwt.sign(user, config.jwtSecret)
	// 	})
	// }
};
