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

	let urlNaturalezas = new URL('http://localhost:8000/naturalezas/');
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
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		let url = new URL('http://localhost:8000/teams/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
                id: data.get('id'),
				nombre: data.get('nombre'),
				generacion: parseInt(data.get('generacion')),
				integrantes: parseInt(data.get('integrantes')),
			})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
	}
};
