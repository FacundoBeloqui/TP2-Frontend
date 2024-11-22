export async function load() {
	let url = new URL('http://localhost:8000/teams/');
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}

	let equipos = await response.json();

	return {
		equipos: equipos
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

