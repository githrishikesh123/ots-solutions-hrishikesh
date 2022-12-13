import React from "react";
import { useState } from "react";
import "../../src/App.css";
import ListData from "./ListData";

const InputFieldComponent = () => {
  // const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);

  function Addme() {
    console.log(recipe)
    var inputValue = recipe

   
  //  recipe.push(inputValue)
    
    setRecipe([...recipe]);
    console.log(recipe);
  }

  
  return (
    <>
      <div className="btnOne">
        <div className="inputfield-main">
          <div className="inputfield-main-sub">
            <input className="inputField" id="myInput"  onChange={(e)=>setRecipe(e.target.value)} placeholder="enter data" type={"text"}  autoComplete="off"
            ></input>
          </div>
          <button onClick={() => Addme()}>Submit</button>
        </div>
      </div>
      <div>
        {/* <ListData props={data} /> */}
      </div>
    </>
  );
};
export default InputFieldComponent;
