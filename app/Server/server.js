
import OpenAi from "openai";
import dotenv from "dotenv";
import GenerateLetter from "./OpenAiApi/GenerateLetter.js";
import express from 'express';
import letterRouter from './routes/letter.js';
import http from 'http'
import cors from 'cors'

const port = 5757
const app = express();
const server = http.createServer(app);

dotenv.config()
export const client = new OpenAi({apiKey: process.env.OpenAiKey})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use("/api/letter", letterRouter);

server.listen(port, () => {
    console.log("server is running...")
})
