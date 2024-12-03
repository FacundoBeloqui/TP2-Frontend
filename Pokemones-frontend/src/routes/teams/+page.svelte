<script>
	import { error } from '@sveltejs/kit';
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

	let errorMessage = '';

	function verificarCantidadMovimientos(event) {
		const movimientosSeleccionados = event.target.selectedOptions;

		if (movimientosSeleccionados.length > 4) {
			errorMessage = 'No puedes elegir mas de 4 movimientos';
		} else {
			errorMessage = '';
		}
	}

	function agregarIntegrante() {
		const cantidadMovimientos = $equipo.integrantes.some(
			(integrante) => integrante.movimientos.length > 4
		);

		if (cantidadMovimientos) {
			errorMessage = 'Un integrante no puede tener más de 4 movimientos';
			return;
		}
		if ($equipo.integrantes.length > 5) {
			errorMessage = 'No se puede crear un equipo con mas de 6 integrantes';
			return;
		}
		equipo.update((e) => {
			e.integrantes.push({ nombre: '', id_pokemon: null, id_naturaleza: null, movimientos: [] });
			return e;
		});
	}

	async function eliminarEquipo(team) {
		console.log(team);
		const response = await fetch(`http://localhost:8000/teams/${team.id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			alert('Equipo eliminado correctamente');
			data.equipos = data.equipos.filter((e) => e.id !== team.id);
		} else {
			alert('Error al eliminar el equipo');
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
					<td><a href="/teams/{equipo.id}">{equipo.nombre}</a></td>
					<td>{equipo.generacion}</td>
					<td>
						<button type="button" class="boton detalles"><a href="/teams/{equipo.id}">Ver integrantes</a></button>
						<button type="button" class="boton eliminar" on:click={() => eliminarEquipo(equipo)}>Eliminar equipo</button>
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
	<div class="integrante-form">
		<input type="hidden" name="integrantes" value={JSON.stringify($equipo.integrantes)} />
		<h3>Integrantes del equipo</h3>
		{#each $equipo.integrantes as integrante}
			<fieldset>
				<div>
					<label for="integrante-nombre">Nombre:</label>
					<input type="text" id="integrante-nombre" bind:value={integrante.nombre} required />
				</div>
				<div>
					<label for="integrante-pokemon">Pokemon:</label>
					<select id="integrante-pokemon" bind:value={integrante.id_pokemon}>
						<option value="" disabled>Selecciona un pokemon</option>
						{#each filteredPokemones as pokemon}
							<option value={pokemon.id}>{pokemon.identificador}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="integrante-naturaleza">Naturaleza:</label>
					<select id="integrante-naturaleza" bind:value={integrante.id_naturaleza}>
						<option value="" disabled>Selecciona una naturaleza</option>
						{#each data.naturalezas as naturaleza}
							<option value={naturaleza.id}>{naturaleza.nombre}</option>
						{/each}
					</select>
				</div>
				<div class="movimiento-select">
					<label for="integrante-movimientos">Movimientos:</label>
					<select
						id="integrante-movimientos"
						bind:value={integrante.movimientos}
						multiple
						required
						on:change={(event) => verificarCantidadMovimientos(event)}
					>
						<option value="" disabled>Selecciona entre 1 y 4 movimientos:</option>
						{#each filteredMovimientos as movimiento}
							<option value={movimiento.id}>{movimiento.nombre}</option>
						{/each}
					</select>
					{#if errorMessage}
						<div class="error-message">
							{errorMessage}
						</div>
					{/if}
				</div>
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
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 40px;
		margin: 4rem 3rem;
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


	.boton {
		display: inline-block;
		align-items: center;
		background-color: #e6dddd;
		color: black;
		border: 2px solid black;
		border-radius: 12px;
		padding: 10px 20px;
		margin: .5rem .5rem 5px .5rem;
		cursor: pointer;
	}

	.boton.eliminar:hover {
		background-color: red;
		color: white;
	}
	.boton.detalles:hover {
		background-color: rgb(53, 24, 214);
		color: white;
	}

	.form-create {
		display: flex;
		flex-direction: column;
		margin: 5rem auto;
		border: 2px solid red;
		border-radius: 5px;
		padding: 20px;
		width: 300px;

		.form-info {
			margin: 0.5rem;
			text-align: center;
		}

		.integrante-form {
			margin-bottom: 1.5rem;
		}

		label {
			display: flex;
			flex-direction: column;
		}

		input {
			align-self: center;
		}

		select {
			margin-bottom: 1rem;
		}

		.form-submit {
			padding: 2rem 2rem 0 2rem;
			display: flex;
			flex-direction: column;
			border-style: none;
		}

		.error-message {
			color: red;
			font-weight: bold;
			position: relative;
			border-radius: 5px;
			width: 200px;
			font-size: 10px;
		}
	}
</style>
