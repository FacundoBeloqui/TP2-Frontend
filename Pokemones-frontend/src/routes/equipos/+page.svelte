<script>
	import { writable } from 'svelte/store';
	export let data;

	let equipo = writable({
		nombre: '',
		generacion: 1,
		integrantes: [
			{
				nombre: '',
				id_pokemon: null,
				id_naturaleza: null,
				movimientos: []
			}
		]
	});

	let naturalezas = [
		{ id: 1, nombre: 'Adamant' },
		{ id: 2, nombre: 'Modest' },
		{ id: 3, nombre: 'Jolly' }
	];

	let selectedPokemon = null;
	let selectedMovimiento = null;
	export let selectedGeneration = null;

	$: filteredPokemones = selectedGeneration
		? data.pokemones.filter((pokemon) => pokemon.generacion.includes(parseInt(selectedGeneration)))
		: data.pokemones;

	$: filteredMovimientos = selectedGeneration
		? data.movimientos.filter(
				(movimiento) => movimiento.generacion === parseInt(selectedGeneration)
			)
		: data.movimientos;

	function agregarIntegrante() {
		equipo.update((e) => {
			e.integrantes.push({ nombre: '', id_pokemon: null, id_naturaleza: null, movimientos: [] });
		});
	}

	function quitarIntegrante(index) {
		equipo.update((e) => {
			e.integrantes.splice(index, 1);
			return e;
		});
	}

	function verificarSelecciones(event, index) {
		const selectElement = event.target;
		const seleccionados = selectElement.selectedOptions;
		const mensajeError = document.getElementById(`mensaje-error-${index}`);

		if (seleccionados.length > 4) {
			mensajeError.style.display = 'block';
			seleccionados[seleccionados.length - 1].selected = false;
		} else {
			mensajeError.style.display = 'none';
		}
	}
</script>

<h1>Esta es la pagina de Equipos</h1>

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
			{#if equipo.nombre != 'string'}
				<tr class={equipo.id % 2 == 0 ? 'zero' : 'one'}>
					<td>{equipo.id}</td>
					<td><a href="/equipos/{equipo.id}">{equipo.nombre}</a></td>
					<td>{equipo.generacion}</td>
					<td>
						<button><a href="/equipos/{equipo.id}">Ver integrantes</a></button>
					</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<form method="POST" action="?/create" class="form-create">
	<h2>Crear Equipo</h2>
	<div class="form-info">
		<label for="nombre"> Nombre: </label>
		<input
			id="nombre"
			type="text"
			bind:value={$equipo.nombre}
			required
			name="nombre"
			autocomplete="off"
		/>
	</div>
	<div class="form-info">
		<label for="generacion">Generacion:</label>
		<select id="generacion" name="generacion" bind:value={selectedGeneration} required>
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
	<div>
		<input type="hidden" name="integrantes" value={JSON.stringify($equipo.integrantes)} />
		<h3>Integrantes del equipo</h3>
		{#each $equipo.integrantes as integrante, index}
			<fieldset>
				<legend>Integrante {index + 1}</legend>
				<div>
					<label for="integrante-nombre-{index}">Nombre:</label>
					<input
						type="text"
						id="integrante-nombre-{index}"
						bind:value={integrante.nombre}
						required
					/>
				</div>
				<div>
					<label for="integrante-pokemon-{index}">Pokemon:</label>
					<select id="integrante-pokemon-{index}" bind:value={integrante.id_pokemon}>
						<option value="" disabled>Selecciona un pokemon</option>
						{#each filteredPokemones as pokemon}
							<option value={pokemon.id}>{pokemon.identificador}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="integrante-naturaleza-{index}">Naturaleza:</label>
					<select id="integrante-naturaleza-{index}" bind:value={integrante.id_naturaleza}>
						<option value="" disabled>Selecciona una naturaleza</option>
						{#each naturalezas as naturaleza}
							<option value={naturaleza.id}>{naturaleza.nombre}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="integrante-movimientos-{index}">Movimientos:</label>
					<select
						id="integrante-movimientos-{index}"
						bind:value={integrante.movimientos}
						multiple
						required
						on:change={(event) => verificarSelecciones(event, index)}
					>
						<option value="" disabled>Selecciona entre 1 y 4 movimientos:</option>
						{#each filteredMovimientos as movimiento}
							<option value={movimiento.id}>{movimiento.nombre}</option>
						{/each}
					</select>
				</div>
				<button type="button" on:click={() => quitarIntegrante(index)}>Eliminar integrante</button>
			</fieldset>
		{/each}
	</div>

	<button type="button" on:click={agregarIntegrante}>Agregar integrante</button>
	<div class="form-submit">
		<button type="submit" class="button-submit">Crear</button>
	</div>
</form>

<style>
	h1 {
		text-align: center;
	}
	h2 {
		margin-top: 2rem;
		text-align: center;
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

	.form-create {
		margin: 5rem;
		display: flex;
		flex-direction: column;

		.form-info {
			margin: 0.5rem;
			text-align: center;
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
			margin-top: 0.5rem;
		} */
	}
</style>
