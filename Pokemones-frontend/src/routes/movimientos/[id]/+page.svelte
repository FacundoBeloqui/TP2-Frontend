<script>
	export let data;
</script>

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

	<div>
		<h3>pokemon que pueden aprender este movimiento</h3>

		{#if data.pokemones_subida_nivel.length > 0}
			<h4>Por Subida de Nivel</h4>
			<ul>
				{#each data.pokemones_subida_nivel as pokemon}
					<li>{pokemon}</li>
				{/each}
			</ul>
		{:else}
			<p>No hay pokemon que aprendan este movimiento por subida de nivel.</p>
		{/if}

		{#if data.pokemones_tm.length > 0}
			<h4>Por TM</h4>
			<ul>
				{#each data.pokemones_tm as pokemon}
					<li>{pokemon}</li>
				{/each}
			</ul>
		{:else}
			<p>No hay pokemon que aprendan este movimiento por TM.</p>
		{/if}
	</div>
    {:else}
	<p>No se encontro el movimiento.</p>
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

	h1, h2, h3, h4 {
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

	ul {
		list-style-type: disc;
		padding-left: 40px;
		margin: 10px 0;
	}

	li {
		font-size: 1.1em;
		margin-bottom: 5px;
	}
</style>

