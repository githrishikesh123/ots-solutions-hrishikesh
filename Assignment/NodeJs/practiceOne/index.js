import express from "express";
impo

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello,  default page");
});

app.get("/about", (req,res)=>{
    res.send("This is about page")
})

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
