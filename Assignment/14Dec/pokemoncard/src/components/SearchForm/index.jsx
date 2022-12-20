import React, { useState } from "react";
import "./style.css";
import { Button, Dropdown } from "semantic-ui-react";

const SearchForm = ({ filterPokemon }) => {
  const [disable, setDisable] = useState(false);
  const [searchStore, setSearchStore] = useState(null);
  // ---------------------------------------------------------- store value from searchBox -------
  const search = (e) => {
    const val = e.target.value;
    console.log(val);
    setSearchStore(val);
    // filterPokemon(val);
  };
  //   ------------------------------------------- search on button------------
  function btnSearch() {
    setDisable(true);
    filterPokemon(searchStore);
  }
  return (
    <>
      <div className="form-main">
        <form>
          <input type="text" name="pokemon" id="" onChange={search} />
          <button
            disabled={disable}
            onClick={() => {
              btnSearch();
            }}
          >
            Search
          </button>
          <button
          // onClick={() => {
          //   setDisable(false);
          // }}
          >
            Reset
          </button>
          <select defaultValue="Select">
            <option color="teal" value="Select" disabled>
              Sort By Height
            </option>
            <option value="min">Small</option>
            <option value="medium">Medium</option>
            <option value="max">Large</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
