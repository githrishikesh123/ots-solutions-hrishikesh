import axios from "axios";
import React, { useEffect, useState }  from "react";
import '../../App.css'

const ListItem=({pokemon,index})=>{
    const [details,setDetails] = useState(null)
    const [img,setImg]=useState(null)
    console.log(pokemon.url)
    const getPokemonDetail = async()=>{
        try {
            const {data} = await axios.get(pokemon.url);
            const {weight,height,sprites}=data;
            // setImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`)
            // const imageUrl = `http://pokeapi.co/media/sprites/pokemon/${index}.png`

            setDetails({weight,height,sprites})
        } catch(error){
            console.log(error)
        }
    }
    console.log(img)
    useEffect(()=>{
        getPokemonDetail();
    },[pokemon])
    return(
        <>
        <div className="listItem-main">
            <h4>Name: {pokemon.name}</h4>
            <h4>Weight: {details?.weight}</h4>
            <h4>Height: {details?.height}</h4>
            <img src={details?.sprites.other.home.front_default} alt="" />
        </div>
        </>
    )
}

export default ListItem