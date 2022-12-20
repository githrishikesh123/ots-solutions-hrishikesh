import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

const ListItem = ({ pokemon, index, item }) => {
  const [details, setDetails] = useState(null);
  const getPokemonDetail = async () => {
    try {
      const { data } = await axios.get(pokemon.url);
      const { weight, height, sprites } = data;
      setDetails({ weight, height, sprites });
    } catch (error) {
      console.log(error);
    }
  };
//   --------------------
  useEffect(() => {
    getPokemonDetail();
  }, [pokemon]);

  return (
    <>
      <div className="listItem-main">
        <img src={details?.sprites.other.home.front_default} alt="" />
        <h3>Name: {pokemon.name}</h3>
        <p>Weight: {details?.weight}</p>
        <p>Height: {details?.height}</p>
      </div>
    </>
  );
};

export default ListItem;
