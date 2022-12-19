import "./App.css";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List/List";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [paginatedPokemons, setPaginatedPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // -------------------------------------------------------------
  const filterPokemon = (searchValue) => {
    const newPokemons = paginatedPokemons.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLowerCase())
    );
    setFilteredPokemons(newPokemons);
  };
  // ---------------------------------------------------------------------
  //calling api
  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(({ data: { results } }) => {
        setPokemons(results);
        setPaginatedPokemons(results.slice(0, 5));
        setFilteredPokemons(results.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // --------------------------------------------------------- useEffect ----------------
  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (currentPage == 1) {
      setPaginatedPokemons(pokemons.slice(0, 5));
      setFilteredPokemons(pokemons.slice(0, 5));
    } else if (currentPage == 2) {
      setPaginatedPokemons(pokemons.slice(5, 10));
      setFilteredPokemons(pokemons.slice(5, 10));
    } else if (currentPage == 3) {
      setPaginatedPokemons(pokemons.slice(10, 15));
      setFilteredPokemons(pokemons.slice(10, 15));
    } else if (currentPage == 4) {
      setPaginatedPokemons(pokemons.slice(15, 20));
      setFilteredPokemons(pokemons.slice(15, 20));
    }
  }, [currentPage]);
  console.log(currentPage);
  return (
    <div className="main-container" style={{ marginLeft: "20px" }}>
      <div>
        <SearchForm filterPokemon={filterPokemon} />
        <div>
          <List pokemons={filteredPokemons} />
        </div>
        <br />
        <button onClick={() => setCurrentPage(1)}>1</button>
        <button onClick={() => setCurrentPage(2)}>2</button>
        <button onClick={() => setCurrentPage(3)}>3</button>
        <button onClick={() => setCurrentPage(4)}>4</button>
      </div>
    </div>
  );
}

export default App;
