import express from "express";
import dotenv from "dotenv";
import feedbackRoute from './routes/feedbackRoutes.js'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000;

app.use("/" , feedbackRoute)

app.listen(PORT , ()=>{
    console.log(`listening on PORT ${PORT}`)
})