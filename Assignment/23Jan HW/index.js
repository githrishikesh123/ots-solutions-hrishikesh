import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
import bookRouter from "./router/bookRouter.js";

const app = express();
const PORT = 8000;
app.use(bodyParser.json());


app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("On default Page");
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

console.log("UniID", uuid());
