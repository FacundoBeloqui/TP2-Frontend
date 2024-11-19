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
			{#if pokemon.id < 10195}
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

<!--
<h2>Dar de alta alumno</h2>
<form method="POST" action="?/create">
	<label>
		Nombre:
		<input name="nombre" autocomplete="off" />
	</label>
	<label>
		Apellido:
		<input name="apellido" autocomplete="off" />
	</label>
	<label>
		Edad:
		<input name="edad" autocomplete="off" />
	</label>

	<button>Crear</button>
</form>
-->
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
