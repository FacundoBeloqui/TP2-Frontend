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
