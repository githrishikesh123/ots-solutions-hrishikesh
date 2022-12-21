import "./App.css";
import SearchForm from "./components/SearchForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List/List";
export const HeightContext = createContext();

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [paginatedPokemons, setPaginatedPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [height, setHeight] = useState("max");
  // const [heightType,setHeightType]=useState('')
  // const [allHeight,setAllHeight]=useState([])
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
  console.log(filteredPokemons);
  // ----------------------------------------------
  // useEffect(()=>{
  //   if(height==='min'){
  //     console.log('min.....')
  //   }
  //   else if(height==='max'){
  //     console.log('max.......')
  //   }
  // },[height])
  // ----------------------------------------------------------------
  // useEffect(()=>{
  //   if(heightType==='min'){
  //     console.log('minheight')
  //   }
  //   else if(heightType==='medium'){
  //     console.log('medium')
  //   }
  //   else if(heightType==='max'){
  //     console.log('max')
  //   }
  // },[heightType])
  // const getHeight=(height)=>{
  //   if(height.length!==0){
  //     setAllHeight((pre)=>[...pre,height])
  //   }
  // }

  function heightFunc(value) {
    console.log(value);
  }

  return (
    <div className="main-container" style={{ marginLeft: "20px" }}>
      <div>
        <SearchForm filterPokemon={filterPokemon} />
        {/* <button onClick={()=>{setHeight('min')}}>heighttttt</button> */}
        {/* ---------------------------------------------------------------- SortByHeight ------- */}
        <select
          defaultValue="Select"
          // value={value}
          onChange={(value) => {
            heightFunc(value);
          }}
        >
          {/* <option value="Select" disabled>
            Sort By Height
          </option> */}
          <option value="min">Small</option>
          <option value="medium">Medium</option>
          <option value="max">Large</option>
        </select>
        <div>
          {/* <HeightContext.Provider value={heightType}>
          <List pokemons={filteredPokemons} />
          </HeightContext.Provider> */}
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
