import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from './components/TraineesComponent'
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/services" element={<div><h3>Services</h3></div>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
      
    </div>
  );
}

export default App;
