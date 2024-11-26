<script>
	import Typeahead from 'svelte-typeahead';
	export let data;

	function searchedPokemon(pokemon) {
		console.log(pokemon.detail.original.id);
		window.location.href = `/pokemones/${pokemon.detail.original.id}`;
	}
</script>

<h1>Ésta es la página de Pokemones</h1>
<Typeahead
	label="Preseleccionar pokemon"
	placeholder={`Buscar pokemon por id o nombre`}
	data={data.pokemones}
	extract={(pokemon) => `${pokemon.id} ${pokemon.identificador}`}
	on:select={(pokemon) => searchedPokemon(pokemon)}
	inputAfterSelect="clear"
/>

<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Identificador</th>
			<th>Altura</th>
			<th>Peso</th>
			<th>Experiencia Base</th>
			<th>Imagen</th>
		</tr>
	</thead>
	<tbody>
		{#each data.pokemones as pokemon}
			{#if pokemon.identificador != 'string'}
				<tr class={pokemon.id % 2 == 0 ? 'zero' : 'one'}>
					<td>{pokemon.id}</td>
					<td><a href="/pokemones/{pokemon.id}">{pokemon.identificador}</a></td>
					<td>{pokemon.altura}</td>
					<td>{pokemon.peso}</td>
					<td>{pokemon.experiencia_base}</td>
					<td><img src={pokemon.imagen} alt="imagen de {pokemon.identificador}" /></td>
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
	<label for="generacion">Generacion:</label>
	<select id="generacion" name="generacion" required>
		<option value="1">Generación 1</option>
		<option value="2">Generación 2</option>
		<option value="3">Generación 3</option>
		<option value="4">Generación 4</option>
		<option value="5">Generación 5</option>
		<option value="6">Generación 6</option>
		<option value="7">Generación 7</option>
		<option value="8">Generación 8</option>
	</select>
	<label>
		Habilidades:
		<input name="habilidades" autocomplete="off" />
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
	<label>
		Id de especie:
		<input name="id_especie" autocomplete="off" />
	</label>
	<button>Crear</button>
</form>

<style>
	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 40px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	table {
		width: 100%;
	}
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
