import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let movimientoUrl = new URL(`http://localhost:8000/movimientos/${params.id}`);
	const movimientoResp = await fetch(movimientoUrl);
	if (!movimientoResp.ok) {
		error(movimientoResp.status);
	}

	let movimiento = await movimientoResp.json();

	return {
		movimiento
	};
}