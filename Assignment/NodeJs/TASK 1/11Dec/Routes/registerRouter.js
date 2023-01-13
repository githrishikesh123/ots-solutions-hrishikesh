const express = require("express");
const bodyParser = require("body-parser");

const registerRouter = express.Router();
registerRouter.use(bodyParser.json());

registerRouter.get("/", (req, res) => {
  console.log("Default get responce");
  res.send("express server GET request running ");
});

registerRouter.post("/details", (req, res) => {
  const id = req.params.id;
  console.log("Default post responce");
  res.send(`express server post request for ID...${id} `);
});

registerRouter.put("/biodata", (req, res) => {
  console.log("Default put responce");
  res.send("express server PUT request running ");
});

registerRouter.delete("/delete", (req, res) => {
  console.log("Default delete responce");
  res.send("express server DELETE request running ");
});

module.exports = registerRouter;
