<script>
    export let data;
	let selectedPokemon = null;
	let selectedMovimiento = null;
	let selectedGeneration = null;

	$: filteredPokemones = selectedGeneration ? data.pokemones.filter(pokemon => pokemon.generacion.includes(parseInt(selectedGeneration))) : data.pokemones;

	$: filteredMovimientos = selectedGeneration ? data.movimientos.filter(movimiento => movimiento.generacion === parseInt(selectedGeneration)) : data.movimientos;

</script>


<h1>esta es la pagina de equipos</h1>



<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Nombre Equipo</th>
			<th>Generacion</th>
			<th>Integrantes</th>
		</tr>
	</thead>
	<tbody>
		{#each data.equipos as equipo}
			{#if equipo.Nombre != 'string'}
				<tr class={equipo.id % 2 == 0 ? 'zero' : 'one'}>
					<td>{equipo.id}</td>
					<td><a href="/equipos/{equipo.id}">{equipo.nombre}</a></td>
					<td>{equipo.generacion}</td>
					<td><a href="/equipos/{equipo.id}">Ver integrantes</a></td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<h2>Crear Equipo</h2>
<form method="POST" action="?/create" class="form-create">
	<div class="form-info">
		<label>
			Nombre:
		</label>
		<input name="nombre" autocomplete="off" />
	</div>
	<div class="form-info">
		<label>
			Generacion:
		</label>
		<select name="generacion" bind:value={selectedGeneration}>
			<option value="1">Generación 1</option>
			<option value="2">Generación 2</option>
			<option value="3">Generación 3</option>
			<option value="4">Generación 4</option>
			<option value="5">Generación 5</option>
			<option value="6">Generación 6</option>
			<option value="7">Generación 7</option>
			<option value="8">Generación 8</option>
		</select>
	</div>
	<div class="form-info">
		<label>
			Integrantes:
		</label>
		<input name="integrantes" autocomplete="off" />
	</div>
	<div class="form-info">
		<label>
			Pokemon:
		</label>
		<select bind:value={selectedPokemon}>
			{#each filteredPokemones as pokemon} 
				<option value={pokemon.id}>{pokemon.identificador}</option>
			{/each}
		</select>
	</div>
	<div class="form-info">
		<label>
			Movimientos:
		</label>
		<select bind:value={selectedMovimiento}>
			{#each filteredMovimientos as movimiento} 
				<option value={movimiento.id}>{movimiento.nombre}</option>
			{/each}
		</select>
	</div>
	<div class="form-submit">
		<button class="button-submit">Crear</button>
	</div>
</form>



<style>
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

	.form-create {
		margin: 5rem;
		display: flex;
		flex-direction: column;

		.form-info {
			margin: .5rem;
		}

		label {
			display: flex;
			flex-direction: column;
		}

		input {
			align-self: center;
		}

		.form-submit {
			padding: 2rem 2rem 0 2rem;
			display: flex;
			flex-direction: column;
			border-style: none;
		}

		/* .button-submit {
			margin-top: .5rem; 
		} */
	}



</style>