import React from "react";

export default function CardPokemon(props) {
    return (
    <div className="card">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.number +1}.png`}></img>
        <h3> {props.pokemon.poke.name}</h3>
    </div>
    )
}

