import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let teamUrl = new URL(`http://localhost:8000/teams/${params.id}`);
	const teamResp = await fetch(teamUrl);
	if (!teamResp.ok) {
		error(teamResp.status);
	}

	let team = await teamResp.json();

	console.log(team)

	return {
		team
	};
}

export const actions = {
	update: async ({request}) => {
		const data = await request.formData();

		const integrantes = JSON.parse(data.get("integrantes") || "[]");

		let url = new URL(`http://localhost:8000/teams/${data.get("id")}/${data.get("id")}`);
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(integrantes)
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
