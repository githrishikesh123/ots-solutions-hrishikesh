import "./MenuHome.css";
import React, { useState } from "react";

const List = ({ recipes, selectRecipe, deleteRecipe, editRecipe }) => {
  console.log(recipes);

  const handleDeleteList = () => {
    deleteRecipe();
  };

  const handleEditList = () => {
    editRecipe();
  };
  return (
    <>
      <div>
        <ul className="list">
          <h3>Recipe's List</h3>
          {recipes.map((item, index) => (
            <li key={index} onClick={() => selectRecipe(index)}>
              <p>
                <span>
                  <b>Recipe: </b>
                </span>
                {item.recipe}
                <span>
                  <button onClick={handleDeleteList}>Delete</button>
                  <button key={index} onClick={handleEditList(index)}>Edit</button>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
