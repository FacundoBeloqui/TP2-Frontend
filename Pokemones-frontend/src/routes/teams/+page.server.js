export async function load() {
	let urlTeams = new URL('http://localhost:8000/teams/');
	const responseTeams = await fetch(urlTeams);
	if (!responseTeams.ok) {
		throw new Error(`Response status: ${responseTeams.status}`);
	}

	let equipos = await responseTeams.json();

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
		equipos: equipos,
		pokemones: pokemones,
		movimientos: movimientos,
		naturalezas: naturalezas
	};
}


export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const nombre = data.get('nombre');
		const generacion = parseInt(data.get('generacion'));
		const integrantes = JSON.parse(data.get("integrantes") || "[]");

		const payload = { nombre, generacion, integrantes };

		console.log(payload)

		let url = new URL('http://localhost:8000/teams/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error(`Error al crear el equipo. Status: ${response.status}`);
		}

		return {
			success: true,
			message: 'Equipo creado exitosamente'
		};
	},

	// delete: async ({request}) => {
	// 	const data = await request.formData();

	// 	let url = new URL(`http://localhost:8000/teams/${team_id}`)
	// 	let params = {id = data.get("id")}
	// 	url.search = new URLSearchParams(params).toString()

	// 	const response = await fetch(url, {
	// 		method: 'DELETE',
	// 		headers: { 'Content-Type': 'application/json' },
	// 	})

	// 	if (!response.ok) {
	// 		throw new Error(`Error al eliminar integrante. Status: ${response.status}`);
	// 	}
	
	// 	return {
	// 		success: true,
	// 		message: 'Integrante eliminado exitosamente'
	// 	};

	// }
};