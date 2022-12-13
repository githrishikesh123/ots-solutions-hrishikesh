import React, { useRef, useState } from "react";
import { Button } from "semantic-ui-react";
import "../App.css";

const FormComponent = ({ addRecipe, deleteRecipe, updateRecipe }) => {
  const [details, setDetails] = useState({
    recipe: "",
    chef: "",
    instruction: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    console.log(details);
    const { recipe, chef, instruction } = details;
    if (recipe && chef && instruction) {
      addRecipe({ recipe, chef, instruction });
      setDetails({});
    }
  };
  console.log(details);
  const handleDelete = () => {
    deleteRecipe();
  };
  return (
    <div className="form-main">
      <h2>Recipe List App </h2>
      <input
        className="input-field"
        id="inputField"
        name="recipe"
        type="text"
        value={details.recipe}
        placeholder="Enter Recipe name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        className="input-field"
        id="inputField"
        type="text"
        name="chef"
        value={details.chef}
        placeholder="Enter Chef name"
        onChange={handleChange}
      ></input>
      <br />
      <textarea
        className="input-field"
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        onChange={handleChange}
        cols="35"
        rows="5"
      ></textarea>
      {/* <input
      className="input-field"
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        onChange={handleChange}
      ></input> */}
      <br />
      <Button
        className="btnOne"
        onClick={handleSubmit}
        content="Add Recipe"
        primary
      />
      <Button onClick={handleDelete} content="Delete" secondary />
    </div>
  );
};

export default FormComponent;
