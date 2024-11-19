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
/*
export const actions = {
	desinscribir: async ({ request }) => {
		const data = await request.formData();

		let url = new URL(`http://localhost:8000/pokemons/${data.get('id')}/desinscribir_alumno/`);
		let params = { padron: data.get('padron') };
		url.search = new URLSearchParams(params).toString();

		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!response.ok) {
			error(response.status, 'Algo falló');
		}
	},
	inscribir: async ({ request }) => {
		const data = await request.formData();

		let url = new URL(`http://localhost:8000/pokemons/${data.get('id')}/inscribir_alumno/`);
		let params = { padron: data.get('padron') };
		url.search = new URLSearchParams(params).toString();

		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!response.ok) {
			error(response.status, 'Algo falló');
		}
	}
};*/
