const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes");
const apiRouter = require("./routes/api");
const config = require("./config");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./Bloggify-swagger.json");

const app = express();

const PORT = config.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Swagger UI API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// to allow cross origin requests
app.use(cors());

// connection to databse
mongoose
	.connect(config.mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("CONNECTED TO %s", config.mongoUrl);
	})
	.catch((error) => {
		console.log("DATABASE CONNECTION ERROR: ", error.message);
		process.exit(1);
	});

// router for the api
app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, (req, res) => {
	console.log(`Server up and running on ${PORT}`);
});

// * TODOS
/**
 *
 * * Notification with Twillio/Firebase - [optional]
 * * Setup README with Routes for backend operations
 *
 */
