import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let teamUrl = new URL(`http://localhost:8000/teams/${params.id}`);
	const teamResp = await fetch(teamUrl);
	if (!teamResp.ok) {
		error(teamResp.status);
	}

	let team = await teamResp.json();

	console.log(team)

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

	return {
		team: team,
		pokemones: pokemones,
		movimientos: movimientos
	};
}

// export async function load({ params }) {
// 	let teamUrl = new URL(`http://localhost:8000/teams/${params.team_id}/${params.integrante_id}`);
// 	const teamResp = await fetch(teamUrl);
// 	if (!teamResp.ok) {
// 		error(teamResp.status);
// 	}

// 	let team = await teamResp.json();

// 	console.log(team)

// 	return {
// 		team: team
// 	};
// }

export const actions = {
	update: async ({request}) => {
		const data = await request.formData();

		//const integrantes = JSON.parse(data.get("integrantes") || "{}");

		const {team_id, integrante_id, integrante} = data

		const payload = {integrante}

		let url = new URL(`http://localhost:8000/teams/${team_id}/${integrante_id}`);
		const response = await fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error(`Error al editar integrantes. Status: ${response.status}`);
		}
	
		return {
			success: true,
			message: 'Integrante editado exitosamente'
		};
	}
}
