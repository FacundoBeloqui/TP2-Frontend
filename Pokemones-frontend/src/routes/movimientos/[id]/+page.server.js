import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let movimientoUrl = new URL(`http://localhost:8000/movimientos/${params.id}`);
	const movimientoResp = await fetch(movimientoUrl);
	if (!movimientoResp.ok) {
		error(movimientoResp.status);
	}

	let movimiento = await movimientoResp.json();

	return {
		movimiento,
		pokemones_tm: movimiento.pokemones_tm || [],
        pokemones_subida_nivel: movimiento.pokemones_subida_nivel || []
	};
}