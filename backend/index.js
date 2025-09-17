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


// tankml hadchi mb be3d
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, "uploads/");
    }, filename: (req, file, cb) => {
        cb(null, "rachidfile" + path.extname(file.originalname));
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedTypes.includes(file.mimetype))
            cb(null, true);
        else {
            req.errmsg = "file uppload err";
            cb(new Error(), false);
        }
    },
    limits: {
        fileSize: 12 * 1024 * 1024
    }
});

// GPT API

const OpenAI = require("openai");

const token = process.env.GITHUB_GPT;
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o";

const Authenticated = require('./Middlewares/isAuth');

app.post("/api/gpt", Authenticated, async (req, res) => {
    const { message } = req.body;
    const { role } = req;
    if (role != 'admin' && role != 'client')
        return res.status(401).json({ QueryDone: false });
    if (!message?.length)
        return res.json({ QueryDone: false });
    try {
        const client = new OpenAI({ baseURL: endpoint, apiKey: token });
        const Products = await ProductSchema.find();
        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: `You are an AI assistant for an e-commerce store. Only answer about available products, else say something like 'i only give infos about products, try again !!', and you can also say hi if the user said it, and if he asks you about your self just say im PrimeShop AI assistant, do not montion products image url , and this is products that we have ${Products}` },
                { role: "user", content: message }
            ],
            temperature: 1.0,
            top_p: 1.0,
            max_tokens: 1000,
            model: modelName
        });
        return res.json({ data: (response.choices[0].message.content) });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ QueryDone: false });
    }
})





// Routes
const UserRouter = require('./Routes/UsersRoute');
const ProductRoute = require('./Routes/ProductRoute');
const RatingRoute = require('./Routes/RatingRoute');
const OrderRoute = require('./Routes/OrderRoute');
const CategoryRoute = require('./Routes/CategoryRoute');
const CardRoute = require('./Routes/CardRoute');
const AuthRoute = require('./Routes/isAuth');
const ProductSchema = require('./database/Schemas/ProductSchema');

app.use("/api/user", UserRouter);
app.use("/api", ProductRoute);
app.use("/api", RatingRoute);
app.use("/api", OrderRoute);
app.use("/api", CategoryRoute);
app.use("/api", CardRoute);
app.use("/api", AuthRoute);



// Error handler Middleware
// app.use(ErrorHandler);

const PORT = process.env.PORT || 3321;

app.listen(PORT, () => console.log(`running in http://localhost:${PORT}`));