import React from "react";

const ListData = ({ props }) => {
  return (
    <>
      <div className="App">
        {/* {props} */}
        <ul>
          {props.map((i) => {
            return <div>{i}</div>;
          })}
        </ul>
      </div>
     
    </>
  );
};

export default ListData;
