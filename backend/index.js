import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import imageRouter from "./router/imageRouter.js";
import braceletRouter from "./router/braceletRouter.js"
dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());

app.use("/image", imageRouter)
app.use("/bracelet",braceletRouter)

app.listen(8080, () => {
    console.log('Server is running!');
});





