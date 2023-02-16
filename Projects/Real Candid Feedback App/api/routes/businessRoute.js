import express from "express";
import businessSchema from '../model/business.js'

const businessRoute = express.Router();

// businessRoute.get("/", (req, res) => {
//   res.send("Default Business Route");
// });

businessRoute.get("/", async (req, res) => {
    const businessList = await businessSchema.find();
    res.send(businessList);
  });
  businessRoute.post("/add" , async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    let result = await customerSchema(req.body);
    result.save();
    console.log("Added One Customer", result);
    res.send(result);
  })

export default businessRoute;
