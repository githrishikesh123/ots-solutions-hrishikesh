import React from "react";
import '../App.css'

const ReceipeDetails = ({ details }) => {
  console.log(details);

  return (
    <>
      <div className="detail-main">
      <p><h3>Recipe instructions for</h3> <b>{details.recipe}</b> : <br />{details.instruction}</p>
      </div>
    </>
  );
};
export default ReceipeDetails;
