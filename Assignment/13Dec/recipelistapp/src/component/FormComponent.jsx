import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Button } from "semantic-ui-react";
import "../App.css";

const FormComponent = ({
  addRecipe,
  deleteRecipe,
  updateRecipe,
  updateDetails,
}) => {
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
      setDetails({ recipe: "", chef: "", instruction: "" });
    }
  };
  const handleUpdate=(index)=>{
    const {recipe,chef,instruction}=details;
    updateRecipe(index,{recipe,chef,instruction} )
  }
  useEffect(() => {
    if (updateDetails) {
      setDetails({
        recipe: updateDetails.recipe,
        chef: updateDetails.chef,
        instruction: updateDetails.instruction,
      });
    }
  }, [updateDetails]);
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
      <br />
      {updateDetails ? (
        <Button onClick={handleUpdate} content="Update" primary />
      ) : (
        <Button
          className="btnOne"
          onClick={handleSubmit}
          content="Add Recipe"
          color="green"
        />
      )}
    </div>
  );
};

export default FormComponent;
