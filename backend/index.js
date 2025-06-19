// requires modules
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require("nodemailer");

// import Local Modules
const ErrorHandler = require('./Controllers/ErrorHandler');
const DBConnection = require('./database/Connection');


const app = express();
require('dotenv').config();



// Running Mongodb Connection
DBConnection();

// uses middlewares
app.use(cors({
	origin: '*',
	// deployment
	// origin: 'http://localhost:5173/',
	// credentials: true
}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(helmet());

// account
app.get("/", async () => {
	try {
		const send = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "5491c4a5cf6759",
				pass: "38dc3f1e5c5491"
			}
		});
		await send.sendMail({
			from: "testing@test.test",
			to: 'rachidmouhcine00@gmail.com',
			subject: "confirmation mail",
			text: "code howa hadak"
		})
	}
	catch (err) {
		console.log(err);
	}
});


// Routes
const UserRouter = require('./Routes/UsersRoute');
const ProductRoute = require('./Routes/ProductRoute');
const RatingRoute = require('./Routes/RatingRoute');
const OrderRoute = require('./Routes/OrderRoute');
const CategoryRoute = require('./Routes/CategoryRoute');
const AuthRoute = require('./Routes/isAuth');

app.use("/api/user", UserRouter);
app.use("/api", ProductRoute);
app.use("/api", RatingRoute);
app.use("/api", OrderRoute);
app.use("/api", CategoryRoute);
app.use("/api", AuthRoute);



// Error handler Middleware
app.use(ErrorHandler);

const PORT = process.env.PORT || 3321;

app.listen(PORT, () => console.log(`running in http://localhost:${PORT}`));