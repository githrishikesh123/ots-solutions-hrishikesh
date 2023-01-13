const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  console.log("Default GET responce");
  res.send("GET request running ");
});

userRouter.post("/profile", (req, res) => {
  const id = req.params.id;
  console.log("Create User POST responce");
  res.send(`POST request for ID...${id} `);
});

userRouter.put("/update", (req, res) => {
  console.log("Update User PUT Responce");
  res.send("PUT request running ");
});

userRouter.delete("/delete", (req, res) => {
  console.log("Delete User DELETE responce");
  res.send("DELETE request running ");
});
userRouter.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;
  console.log("Default delete responce");
  res.send(`DELETE request running for user =>  ${userId}`);
});

module.exports = userRouter;
