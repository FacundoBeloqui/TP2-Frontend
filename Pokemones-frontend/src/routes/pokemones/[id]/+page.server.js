import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let pokemonUrl = new URL(`http://localhost:8000/pokemones/${params.id}`);
	const pokemonResp = await fetch(pokemonUrl);
	if (!pokemonResp.ok) {
		error(pokemonResp.status);
	}

	let pokemon = await pokemonResp.json();

	return {
		pokemon
	};
}
