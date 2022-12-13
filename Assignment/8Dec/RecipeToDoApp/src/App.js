import "./App.css";
import React, { useState } from "react";
import FormComponent from './component/FormComponent'
import List from './component/MenuHome'
import ReceipeDetails from './component/ReceipeDetails'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [details, setDetails] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = () => {
    setRecipes((recipes) =>
      recipes.filter((val, index) => index != selectIndex)
    );
    setSelectIndex(null);
    setDetails({}); 
    
  };

  const selectRecipe = (index) => {
    setDetails(recipes[index]);
    setSelectIndex(index);
  };

  const editRecipe = () => {
    console.log("jj",selectIndex)
    console.log(setRecipes)
    
  };

  return (
    <div className="App">
      <div className="container-prim">
        <FormComponent
          addRecipe={addRecipe}
          deleteRecipe={deleteRecipe}
        />
        <List recipes={recipes} selectRecipe={selectRecipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe}/>
      </div>
      <div className="container-sec">
        <ReceipeDetails details={details}  />
      </div>
    </div>
  );
}

export default App;
