import express from 'express'
import mongoose from 'mongoose'
import booksRoute from "./routes/bookRoute.js"
import { PORT, mongoDBURL } from "./config.js"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET',"POST","PUT","DELETE"],
//     allowedHeaders:["Content-Type"]
// }))

app.get("/", (req, res) => {
    res.status(200).send("Hello world!")
})



app.use('/books', booksRoute);


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("mongodb is connected!")
        app.listen(PORT, (req, res) => {
            console.log(`server is running at http://localhost:${PORT}`);
        })
    })
    .catch((err) => {
        console.log("mongodb connect error:", err);
    })