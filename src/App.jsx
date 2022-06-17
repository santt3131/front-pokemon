import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPokemon from "./../components/CardPokemon";

export default function App() {
	const [dataState, setData] = useState({ results: [] });
	useEffect(() => {
		const obtenerPokemons = async () => {
			const result = await axios("https://pokeapi.co/api/v2/pokemon/");
			setData(result.data);
		};
		obtenerPokemons();
	}, []);

	return (
		<div>
			<h1>Pokemon cards</h1>
			<div className="container">
				{dataState.results.map((item, index) => (
					<CardPokemon
						key={index}
						pokemon={{ number: index, poke: item }}
					></CardPokemon>
				))}
			</div>
		</div>
	);
}
