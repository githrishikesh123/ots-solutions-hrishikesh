import express from "express";
import customerSchema from "../model/customer.js";

const customerRoute = express.Router();

// customerRoute.get("/", (req, res) => {
//   res.send("Default Route");
// });
// --------------------------------------------------------------------- Get All Customers 
customerRoute.get("/", async (req, res) => {
  const customerList = await customerSchema.find();
  res.send(customerList);
});
// --------------------------------------------------------------------- Find By Id 
customerRoute.get("/:id" , async(req,res)=>{
  const {id} = req.params;
  const findCustomer = await customerSchema.findById(id);
  console.log("customer" , findCustomer)
  res.send(findCustomer)
})
// --------------------------------------------------------------------- Add New Customer
customerRoute.post("/add", async (req, res) => {
  
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  let result = await customerSchema(req.body);
  result.save();
  console.log("Added One Customer", result);
  res.send(result);
});
// ------------------------------------------------------------------------- Edit Customer 
customerRoute.patch('/settings/edit/:id' , async (req,res)=>{
  const {id} = req.params;
  const result = await customerSchema.findById(id)
  result.firstName = req.body.firstName,
  result.lastName = req.body.lastName,
  result.email = req.body.email,
  result.phoneNumber = req.body.phoneNumber
  
  await result.save()
  console.log(`Edited Customer of Id ${id}`)
  res.send(result)
})

// ---------------------------------------------------------------------------- Delete Customer 
customerRoute.delete('/delete/:id' , async(req,res)=>{
  const {id} = req.params;
  const result = await customerSchema.deleteOne({_id:id})
  console.log(`Deleted Customer of Id ${id}`)
  res.send(result)
})

export default customerRoute;