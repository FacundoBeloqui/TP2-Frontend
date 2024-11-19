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

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		let url = new URL('http://localhost:8000/pokemones/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				identificador: data.get('identificador'),
				altura: data.get('altura'),
				peso: data.get('peso')
				/*experiencia_base: data.get('experiencia_base'),
				imagen: data.get('imagen'),
				grupo_de_huevo: data.get('grupo_de_huevo'),
				generacion: data.get('generacion'),
				habilidades: data.get('habilidades'),
				evoluciones_inmediatas: data.get('evoluciones_inmediatas'),
				tipo: data.get('tipo'),
				estadisticas: data.get('estadisticas')*/
			})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
	}
};
