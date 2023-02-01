import express from "express";
import router from "./Routes/routes.js"
import dotenv from "dotenv";

const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();
app.get("/" , (req,res)=>{
  res.send("server running ...")
})
app.use('/api' , router)

// ------------------------------------------------------------------- mongoose connection end

// --------------------------------------------

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
