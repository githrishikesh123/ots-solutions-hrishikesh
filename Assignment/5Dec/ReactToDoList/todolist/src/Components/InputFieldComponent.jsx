import React from "react";
import { useState } from "react";
import "../../src/App.css";
import ListData from "./ListData";

const InputFieldComponent = () => {
  const [data, setData]=useState('DDD')
  let inputStore = [];
  console.log(inputStore)
  function Addme() {
    var inputValue = document.getElementById("myInput").value;
    console.log(inputValue)
    inputStore.push(inputValue)
    console.log(inputStore)
    setData(inputStore)

  }
  return (
    <>
      <div className="btnOne">
        <div className="inputfield-main">
          <div className="inputfield-main-sub">
            <input className="inputField" id="myInput" placeholder="enter data" type={"text"}
              autoComplete="off"
            ></input>
          </div>
          <button onClick={() => Addme()}>Submit</button>
        </div>
      </div>
      <div>
        <ListData props={data}/>
      </div>
    </>
  );
};
export default InputFieldComponent;
