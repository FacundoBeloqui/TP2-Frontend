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


// export const actions = {
// 	update: async ({ request, params }) => {
// 		const data = await request.formData();

// 		const idIntegrante = parseInt(data.get('id_integrante')); // Asegúrate de que el id_integrante se esté pasando correctamente
// 		const nombre = data.get('nombre');
// 		const idPokemon = parseInt(data.get('id_pokemon'));
// 		const idNaturaleza = parseInt(data.get('id_naturaleza'));
// 		const movimientos = data.get("movimientos") || "[]"; // Asegúrate de que los movimientos se estén pasando correctamente

// 		// Crea el payload según la estructura esperada
// 		const payload = {
// 			id_integrante: idIntegrante,
// 			nombre: nombre,
// 			id_pokemon: idPokemon,
// 			id_naturaleza: idNaturaleza,
// 			movimientos: movimientos
// 		};

// 		console.log(payload);

// 		const teamId = params.id; // Asegúrate de que el team_id esté disponible en los parámetros
// 		let url = new URL(`http://localhost:8000/teams/${teamId}`); // Cambia la URL para incluir el team_id

// 		const response = await fetch(url, {
// 			method: 'POST', // O 'PATCH', según lo que necesites
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(payload)
// 		});

// 		if (!response.ok) {
// 			throw new Error(`Error al actualizar el integrante. Status: ${response.status}`);
// 		}

// 		return {
// 			success: true,
// 			message: 'Integrante actualizado exitosamente'
// 		};
// 	}
// };