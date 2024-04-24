// requires modules
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// import Local Modules
const ErrorHandler = require('./Controllers/ErrorHandler');
const DBConnection = require('./database/Connection');


const app = express();
require('dotenv').config();



// Running Mongodb Connection
DBConnection();

// uses middlewares
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    // origin: ['http://localhost:3000'],       // deployment   
    // methods: ['POST', 'DELETE'...etc]
    credentials: true
}));
app.use(helmet());




// Routes
const UserRouter = require('./Routes/UsersRoute');

app.use("/api", UserRouter);


// Error handler Middleware
app.use(ErrorHandler);

const PORT = process.env.PORT || 3321;

app.listen(PORT, () => console.log(`running in http://localhost:${PORT}`));