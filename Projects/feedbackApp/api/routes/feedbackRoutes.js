import express from "express";

const feedbackRoute = express.Router()

feedbackRoute.get('/' , (req,res)=>{
    res.send("Default Route")
})
feedbackRoute.get('/customers' , (req,res)=>{
    res.send("customers Route")
})
export default feedbackRoute;