import React, { useState } from "react";
import './style.css'

const SearchForm = ({ filterPokemon }) => {
    const [disable,setDisable]=useState(false)
    const [searchStore,setSearchStore]=useState(null)
    // ---------------------------------------------------------- store value from searchBox -------
  const search = (e) => {
    const val = e.target.value;
    console.log(val);
    setSearchStore(val)
    // filterPokemon(val);
  };
//   ------------------------------------------- search on button------------
  function btnSearch(){
    setDisable(true)
    filterPokemon(searchStore);
  }
  return (
    <>
      <div className="form-main">
        <form>
          <input type="text" name="pokemon" id="" onChange={search} />
          <button disabled={disable} onClick={()=>{btnSearch()}}>Search</button>
          <button   onClick={()=>{setDisable(false)}}>Reset</button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
