const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  console.log("Default get responce");
  res.send("express server GET request running so far...");
});

userRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  console.log("Default post responce");
  res.send(`express server post request for ID...${id} `);
});

userRouter.put("/", (req, res) => {
  console.log("Default put responce");
  res.send("express server PUT request running so far...");
});

userRouter.delete("/", (req, res) => {
  console.log("Default delete responce");
  res.send("express server DELETE request running so far...");
});

module.exports = userRouter;
