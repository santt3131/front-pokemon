import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({pokemon})=>{ //se realiza un destructuración
    //En caso fuera con props seria: (pros) , props.pokemon.poke.name
    return (
        <Link to={`detail/${pokemon.number + 1}`} className="card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number +1}.png`}></img>
            <h3> {pokemon.poke.name}</h3>
        </Link>
        )
}

export default CardPokemon;

