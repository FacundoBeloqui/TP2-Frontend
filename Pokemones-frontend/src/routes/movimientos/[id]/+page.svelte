<script>
	export let data;
</script>

<h1>Detalles del movimiento</h1>

{#if data.movimiento}
	<div>
		<h2>{data.movimiento.nombre}</h2>
		<p><strong>Generación:</strong> {data.movimiento.generacion}</p>
		<p><strong>Tipo:</strong> {data.movimiento.tipo}</p>
		<p><strong>Poder:</strong> {data.movimiento.poder || '-'}</p>
		<p><strong>Precisión:</strong> {data.movimiento.accuracy || '-'}</p>
		<p><strong>PP:</strong> {data.movimiento.pp}</p>
		<p><strong>Categoría:</strong> {data.movimiento.categoria}</p>
		<p><strong>Efecto:</strong> {data.movimiento.efecto || 'Sin efecto'}</p>
	</div>
{:else}
	<p>No se encontró el movimiento.</p>
{/if}

<a href="/movimientos">Volver a la lista</a>

<style>	
	a {
		color: inherit;
		text-decoration: none;
	}

	h1, h2 {
		text-align: center;
	}

	div {
		margin: 20px auto;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 8px;
		width: 80%;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	}

	p {
		font-size: 1.2em;
		margin: 5px 0;
	}
</style>
