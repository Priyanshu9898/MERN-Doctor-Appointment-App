import express from 'express';
import dotenv from "dotenv";
const app = express();

dotenv.config({path: "./config/config.env"});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, (req, res)=> {
    console.log(`App is Listining on http://localhost:${port}`);
})