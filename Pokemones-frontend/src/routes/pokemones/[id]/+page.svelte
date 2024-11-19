<script>
	export let data;
</script>

<h1>Detalles del Pokémon</h1>

{#if data.pokemon}
	<div>
		<h2>{data.pokemon.identificador}</h2>
		<img src={data.pokemon.imagen} alt="Imagen de {data.pokemon.identificador}" />
		<p><strong>Altura:</strong> {data.pokemon.altura}</p>
		<p><strong>Peso:</strong> {data.pokemon.peso}</p>
		<p><strong>Experiencia Base:</strong> {data.pokemon.experiencia_base}</p>
		<p><strong>Grupo de Huevo:</strong> {data.pokemon.grupo_de_huevo}</p>
		<p><strong>Generación:</strong> {data.pokemon.generacion}</p>
		<p><strong>Habilidades:</strong> {data.pokemon.habilidades.join(', ')}</p>
		<p>
			<strong>Evoluciones Inmediatas:</strong>
			{data.pokemon.evoluciones_inmediatas.join(', ')}
		</p>
		<p><strong>Tipo:</strong> {data.pokemon.tipo.join(', ')}</p>
		<h3>Estadísticas:</h3>
		<ul>
			{#each Object.entries(data.pokemon.estadisticas) as [key, value]}
				<li>{key}: {value}</li>
			{/each}
		</ul>
		<h3>Debilidades:</h3>
		<ul>
			{#each Object.entries(data.pokemon.debilidades) as [key, value]}
				<li>{key}: {value}</li>
			{/each}
		</ul>
		<h3>Fortalezas:</h3>
		<ul>
			{#each Object.entries(data.pokemon.fortalezas) as [key, value]}
				<li>{key}: {value}</li>
			{/each}
		</ul>
	</div>
{:else}
	<p>No se encontró el Pokémon.</p>
{/if}

<a href="/pokemones">Volver a la lista</a>
