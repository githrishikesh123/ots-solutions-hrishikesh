import "./App.css";
import React, { useState } from "react";
import FormComponent from './component/FormComponent'
import MenuHome from './component/MenuHome'
import ReceipeDetails from "./component/ReceipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const [updateIndex, setUpdateIndex] = useState();

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = () => {
    setRecipes((recipes) =>
      recipes.filter((val, index) => index != selectIndex)
    );
    setSelectIndex(null);
  };

  const selectRecipe = (index) => {
    setSelectIndex(index);
  };

  const editRecipe = (index) => {
    setUpdateIndex(index);
  };

  const updateRecipe = (index,modifiedRecipe) => {
    recipes.splice(index,1,modifiedRecipe)
    setRecipes([...recipes])
    console.log("updating......", recipes)


  };

  return (
    <div className="App">
      <div className="container-prim">
        <FormComponent
          addRecipe={addRecipe}
          deleteRecipe={deleteRecipe}
          updateRecipe={updateRecipe}
          updateDetails={recipes[updateIndex]}
        />
        <MenuHome
          recipes={recipes}
          selectRecipe={selectRecipe}
          deleteRecipe={deleteRecipe}
          editRecipe={editRecipe}
        />
      </div>
      <div className="container-sec">
        <ReceipeDetails details={recipes[selectIndex]} />
      </div>
    </div>
  );
}

export default App;
