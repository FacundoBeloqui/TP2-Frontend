<script>
	export let data;
</script>

{#if data.movimiento}
	<main>
		<h1>{data.movimiento.nombre}</h1>
		<p class="presentacion">
			El movimiento <strong>{data.movimiento.nombre}</strong> pertenece al tipo 
			<strong>{data.movimiento.tipo}</strong>.
		</p>
		<section class="movimiento-data">
			<h2>Detalles del Movimiento</h2>
			<table>
				<tbody>
					<tr>
						<th>Poder</th>
						<td>{data.movimiento.poder || '-'}</td>
					</tr>
					<tr>
						<th>Precisión</th>
						<td>{data.movimiento.accuracy || '-'}</td>
					</tr>
					<tr>
						<th>PP</th>
						<td>{data.movimiento.pp}</td>
					</tr>
					<tr>
						<th>Categoría</th>
						<td>{data.movimiento.categoria}</td>
					</tr>
					<tr>
						<th>Efecto</th>
						<td>{data.movimiento.efecto || 'Sin efecto'}</td>
					</tr>
				</tbody>
			</table>
		</section>
	</main>
{:else}
	<p class="no-encontrado">No se encontró el movimiento.</p>
{/if}

<button class="volver-link"><a href="/movimientos">Volver a la lista</a></button>

<style>
	* {
		font-family: 'Fira Sans', 'Trebuchet MS', Ubuntu, Helvetica, Arial, sans-serif;
		color: #333;
		line-height: 1.5;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		height: 100%;
	}

	main {
		padding: 2rem;
		text-align: center;
		flex: 1;
	}

	h1 {
		text-transform: capitalize;
		font-size: 2.5rem;
		color: #000;
		margin-bottom: 0.5rem;
	}

	.presentacion {
		font-size: 1.2rem;
		color: #555;
		margin-bottom: 1.5rem;
	}

	.movimiento-data {
		margin-top: 2rem;
	}

	.movimiento-data h2 {
		font-size: 1.8rem;
		color: #444;
		margin-bottom: 1rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 0 auto;
		text-align: left;
	}

	th,
	td {
		padding: 0.8rem;
		border-bottom: 1px solid #ddd;
	}

	th {
		font-weight: bold;
		color: #333;
	}

	.no-encontrado {
		color: #900;
		font-size: 1.2rem;
		margin: 2rem 0;
		text-align: center;
	}

	button {
		background-color: #04aa6d; 
		border: none;
		color: white;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		border-radius: 12px;
	}

	.volver-link {
		background-color: white;
		color: black;
		border: 2px solid #04aa6d;
		margin: 2rem; 
		display: inline-block; 
	}

	.volver-link:hover {
		background-color: #04aa6d;
		color: white;
	}
</style>

