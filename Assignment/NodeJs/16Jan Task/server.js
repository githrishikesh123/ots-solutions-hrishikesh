import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import projectRoute from "./Routes/projectRoute.js";

dotenv.config();

const PORT = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/projects", projectRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}`, "./templates/home.html"));
  res.status(200);
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}`, "./templates/about.html"));
});
app.get("/contact", (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}`, "./templates/contact.html"));
});
// app.get("/projects", (req, res) => {
//   res.status(200).sendFile(path.join(`${__dirname}`, "./templates/projects.html"));
// });



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
