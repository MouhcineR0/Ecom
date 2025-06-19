// requires modules
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');

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

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log(file);
		cb(null, "uploads/");
	}, filename: (req, file, cb) => {
		cb(null, "rachidfile" + path.extname(file.originalname));
	}
})

const upload = multer({ storage });

app.post('/', upload.single('file'), (req, res) => {
	console.log(req.file);
	res.send("uploadded");

})

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