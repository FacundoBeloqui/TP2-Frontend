<script>
	import Typeahead from 'svelte-typeahead';
	export let data;

	function searchedPokemon(pokemon) {
		console.log(pokemon.detail.original.id);
		window.location.href = `/pokemones/${pokemon.detail.original.id}`;
	}
</script>

<h1>Ésta es la página de Pokemones</h1>
<div class="buscador">
	<Typeahead
		label="Preseleccionar pokemon"
		placeholder={`Buscar pokemon por id o nombre`}
		data={data.pokemones}
		extract={(pokemon) => `${pokemon.id} ${pokemon.identificador}`}
		on:select={(pokemon) => searchedPokemon(pokemon)}
		inputAfterSelect="clear"
	/>
</div>

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

<style>
	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 40px;
		margin: 4rem 3rem;
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
	td {
		font-size: larger;
	}
</style>
