import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import https from "https";
import { engine } from "express-handlebars";
import dotenv from "dotenv";

dotenv.config()
const API_KEY = process.env.API_KEY;
console.log(API_KEY)
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/weather", async (req, res) => {
  const {city} = req.query;
  const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
  "&appid=c85056b722519d68c492b405acae7281"

  axios.get(WEATHER_API)
  .then(response => {
  // console.log(response);
  const data = response.data;
  console.log(data)

    res.render("home" ,{
      name:data.name,
      temp:(data.main.temp - 273.15).toFixed(2) ,
      description:data.weather[0].description
    })
    
  


  // if(data.cod == 404){
  //   res.send("no")
  // }
  })
  .catch((error)=>{
    res.send("Enter Valid City Name!")
  })



  console.log(city);
});

app.listen(8000, () => {
  console.log("listening on PORT 8000");
});





  // res.send(city)
  // https.get(WEATHER_API , (responce)=>{
  //   responce.on("data" , (data)=>{
  //     const weatherData = JSON.parse(data) 
  //       const temp = weatherData.main.temp;
  //       console.log(weatherData)
      
  //   })
  // })