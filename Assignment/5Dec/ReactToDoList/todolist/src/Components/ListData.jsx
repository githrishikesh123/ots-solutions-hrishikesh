import React from "react";

const ListData=({props})=>{
    console.log({props})
    return(
        <>
        <div className="App">
            <p>Results here</p>
            <p>{props}</p>
        </div>
        </>
    )
}

export default ListData;