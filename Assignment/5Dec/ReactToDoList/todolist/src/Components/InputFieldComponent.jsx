import React from "react";
import "../../src/App.css";
import ListData from "./ListData";

const InputFieldComponent = () => {
  const inputStore = [];
  console.log(inputStore,"intial one")
  function Addme() {
    var inputValue = document.getElementById("myInput").value;
    console.log(inputValue);
    inputStore.push(inputValue);
    console.log(inputStore);
  }
  return (
    <>
      <div className="btnOne">
        <div className="inputfield-main">
          <div className="inputfield-main">
            <input className="inputField" id="myInput" placeholder="enter data" type={"text"} autoComplete="off"
            ></input>
          </div>
          <button onClick={() => Addme()}>Submit</button>
        </div>
      </div>
      <div>
        {/* <ListData props={inputStore}/> */}
      </div>
    </>
  );
};
export default InputFieldComponent;

// You need to create a list in react and try to make separate component for each units
// like list as a single unit.
// and input + button as one unit.