import "./MenuHome.css";
import React, { useState } from "react";
import { Button } from 'semantic-ui-react'

const MenuHome = ({ recipes, selectRecipe, deleteRecipe, editRecipe }) => {
  console.log(recipes);

  const handleDeleteList = () => {
    deleteRecipe();
  };

  // const handleEditList = (index) => {
  //   editRecipe(index);

  // };
  return (
    <>
      <div>
        <ul className="list">
          <h3>Recipe's List</h3>
          {recipes.map((item, index) => (
            <li key={index} onClick={() => selectRecipe(index)}>
              <h3> 
                <span>
                  <p>Recipe: </p>
                </span>
                {item.recipe}
                <span>
                  <Button basic color='red'  onClick={handleDeleteList}>Delete</Button >
                  <Button basic color='green' onClick={()=>{editRecipe(index)}}>Edit</Button>
                </span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuHome;
