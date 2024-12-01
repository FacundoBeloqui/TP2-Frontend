import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let teamUrl = new URL(`http://localhost:8000/teams/${params.id}`);
	const teamResp = await fetch(teamUrl);
	if (!teamResp.ok) {
		error(teamResp.status);
	}

	let team = await teamResp.json();

	let urlPokemones = new URL('http://localhost:8000/pokemones/');
	const responsePokemones = await fetch(urlPokemones);
	if (!responsePokemones.ok) {
		throw new Error(`Response status: ${responsePokemones.status}`);
	}

	let pokemones = await responsePokemones.json();

	let urlMovimientos = new URL('http://localhost:8000/movimientos/');
	const responseMovimientos = await fetch(urlMovimientos);
	if (!responseMovimientos.ok) {
		throw new Error(`Response status: ${responseMovimientos.status}`);
	}

	let movimientos = await responseMovimientos.json();

	let urlNaturalezas = new URL('http://localhost:8000/teams/nature/');
	const responseNaturalezas = await fetch(urlNaturalezas);
	if (!responseNaturalezas.ok) {
		throw new Error(`Response status: ${responseNaturalezas.status}`);
	}

	let naturalezas = await responseNaturalezas.json();

	return {
		team: team,
		pokemones: pokemones,
		movimientos: movimientos,
		naturalezas: naturalezas
	};
}
