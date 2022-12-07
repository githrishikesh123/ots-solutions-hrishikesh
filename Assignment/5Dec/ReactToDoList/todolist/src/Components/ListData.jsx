import React from "react";

const ListData = ({ props }) => {
    console.log(props)
  return (
    <>
      <div className="App">
        <p>Results from ListDataComponent</p>
        <ul>
        {props}

        </ul>
      </div>
      {/* {props.map((stu,i)=><li key={stu}></li>)} */}
    </>
  );
};

export default ListData;
