export async function load() {
	let url = new URL('http://localhost:8000/pokemones/');
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}

	let pokemones = await response.json();

	return {
		pokemones: pokemones
	};
}
/*
export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		let url = new URL('http://localhost:8000/alumnos/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				nombre: data.get('nombre'),
				apellido: data.get('apellido'),
				edad: data.get('edad')
			})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
	}
};
*/
