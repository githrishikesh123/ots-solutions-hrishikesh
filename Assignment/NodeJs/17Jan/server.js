import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
import usersData from "./Data/usersData.js";
import userRouter from "./Routes/userRouter.js";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("On default Page");
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

console.log("UniID", uuid());
