import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import { connectDb } from './config/Database.js';
import auth from "./routers/AuthRouter.js";


dotenv.config({path: "./config/config.env"});
const app = express();

connectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(morgan("dev"));

app.use("api/v1", auth);


const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, (req, res)=> {
    console.log(`App is Listining on http://localhost:${port}`);
})