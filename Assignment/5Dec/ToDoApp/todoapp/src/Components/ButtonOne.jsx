import React from "react";
import InputFieldComponent from "./InputFieldComponent";
import "../../src/App.css"

const ButtonOne = () => {
  const inputStore = [];
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
       <InputFieldComponent/>
        <button onClick={() => Addme()}>Submit</button>
      </div>
      </div>
    </>
  );
};
export default ButtonOne;
