const express = require("express");
const firstMiddleware = require("./Middleware/firstMiddleware");
const secondMiddleware = require("./Middleware/secondMiddleware");
const userRouter = require("./Routes/userRouter");
const registerRouter = require("./Routes/registerRouter");
const app = express();

// use express.json() middleware to parse request body
// app.use(express.json())

app.use("/users", firstMiddleware, userRouter);
app.use("/register", registerRouter);

app.listen(5000, () => {
  console.log("Express server running");
});
