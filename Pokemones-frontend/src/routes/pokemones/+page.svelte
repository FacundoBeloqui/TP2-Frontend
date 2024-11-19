<script>
	export let data;
</script>

<h1>Ésta es la página de pokemones</h1>

<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Identificador</th>
			<th>Altura</th>
			<th>Peso</th>
			<th>Experiencia Base</th>
			<th>Imagen</th>
			<th>Grupo de Huevo</th>
			<th>Generacion</th>
			<th>Habilidades</th>
			<th>Evoluciones Inmediatas</th>
			<th>Tipo</th>
			<th>Estadisticas</th>
		</tr>
	</thead>
	<tbody>
		{#each data.pokemones as pokemon}
			{#if pokemon.identificador != 'string'}
				<tr class={pokemon.id % 2 == 0 ? 'zero' : 'one'}>
					<td>{pokemon.id}</td>
					<td>{pokemon.identificador}</td>
					<td>{pokemon.altura}</td>
					<td>{pokemon.peso}</td>
					<td>{pokemon.experiencia_base}</td>
					<td><img src={pokemon.imagen} alt="imagen de {pokemon.identificador}" /></td>
					<td>{pokemon.grupo_de_huevo}</td>
					<td>{pokemon.generacion}</td>
					<td>{pokemon.habilidades}</td>
					<td>{pokemon.evoluciones_inmediatas}</td>
					<td>{pokemon.tipo}</td>
					<td
						><ul>
							{#each Object.entries(pokemon.estadisticas) as [key, value]}
								<li>{key}: {value}</li>
							{/each}
						</ul></td
					>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<h2>Crear Pokemon</h2>
<form method="POST" action="?/create">
	<label>
		Nombre:
		<input name="identificador" autocomplete="off" />
	</label>
	<label>
		Altura:
		<input name="altura" autocomplete="off" />
	</label>
	<label>
		Peso:
		<input name="peso" autocomplete="off" />
	</label>
	<!-- 
	<label>
		Experiencia Base:
		<input name="experiencia_base" autocomplete="off" />
	</label>
	<label>
		Imagen:
		<input name="imagen" autocomplete="off" />
	</label>
	<label>
		Grupo De Huevo:
		<input name="grupo_de_huevo" autocomplete="off" />
	</label>
	<label>
		Generacion:
		<input name="generacion" autocomplete="off" />
	</label>
	<label>
		Habilidades:
		<input name="Habilidades" autocomplete="off" />
	</label>
	<label>
		Evoluciones Inmediatas:
		<input name="evoluciones_inmediatas" autocomplete="off" />
	</label>
	<label>
		Tipo:
		<input name="tipo" autocomplete="off" />
	</label>
	<label>
		Estadisticas:
		<input name="estadisticas" autocomplete="off" />
	</label>
	 -->

	<button>Crear</button>
</form>

<style>
	tr {
		text-align: center;
	}
	.zero {
		background-color: rgb(172, 169, 169);
	}
	.one {
		background-color: white;
	}
</style>
