import React from "react";
import ListItem from "./ListItem";
import '../../App.css'

const List = ({ pokemons }) => {
{pokemons.map((pokemon,index)=>{
  console.log(pokemon.url)
})}
  return (
    <>
      <div className="list-main">
        <div className="list-main-prim">
          {pokemons && pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <ListItem key={index} index={index} pokemon={pokemon} />
            ))
          ) : (
            <div>No data Found!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
