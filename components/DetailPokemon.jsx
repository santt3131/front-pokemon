import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailPokemon = ({ pokemon }) => {
	//se realiza un destructuración. En caso fuera con props seria: (pros) , props.pokemon.poke.name
	const { idpokemon } = useParams();
	const [pokemonState, setPokemonData] = useState(null);

	useEffect(() => {
		const obtenerPokemon = async () => {
			const result = await axios(
				`https://pokeapi.co/api/v2/pokemon/${idpokemon}`
			);
			setPokemonData(result.data);
		};
		obtenerPokemon();
	}, [idpokemon]);

	return (
		<>
			<h1>Welcome details about the pokemon {pokemonState?.name}</h1>
			<img
				className="center"
				src={`${pokemonState?.sprites?.other?.dream_world?.front_default}`}
			></img>
			<h2 className="centerText">Weight {pokemonState?.weight}</h2>
			<div className="container">
				<div className="cardDetail">
					<h2>Abilities</h2>
					<ul>
						{pokemonState?.abilities.map((item) => (
							<li key={item.ability.name}>{item.ability.name}</li>
						))}
					</ul>
				</div>

				<div className="cardDetail">
					<h2>Stats</h2>
					<ul>
						{pokemonState?.stats.map((item) => (
							<li key={item.base_stat + item.stat.name}>
								{item.base_stat} {item.stat.name}
							</li>
						))}
					</ul>
				</div>

				<div className="cardDetail">
					<h2>Types</h2>
					<ul>
						{pokemonState?.types.map((item) => (
							<li key={item.type.name}>{item.type.name}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default DetailPokemon;
