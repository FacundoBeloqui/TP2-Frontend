<script>
	import { writable } from 'svelte/store';
	export let data;

	let mostrarFormulario = false;
	let integrante = writable({
		id: null,
		nombre: '',
		pokemon: '',
		naturaleza: '',
		movimientos: []
	});
	let integranteNuevo = writable({
		nombre: '',
		id_pokemon: '',
		id_naturaleza: '',
		movimientos: []
	});

	function editarIntegrante(integranteSeleccionado) {
		integrante.set({ ...integranteSeleccionado });
	}

	let selectedGeneration = null;

	$: selectedGeneration = data.team ? data.team.generacion : null;

	$: filteredPokemones = selectedGeneration
		? data.pokemones.filter(
				(pokemon) =>
					Array.isArray(pokemon.generacion) &&
					pokemon.generacion.includes(parseInt(selectedGeneration))
			)
		: data.pokemones;

	$: filteredMovimientos = selectedGeneration
		? data.movimientos.filter(
				(movimiento) => movimiento.generacion === parseInt(selectedGeneration)
			)
		: data.movimientos;

	async function nuevoIntegrante(event) {
		event.preventDefault();
		if (data.team.integrantes.length > 5) {
			errorMessage = 'El equipo no puede tener mas de 6 integrantes';
			return;
		}
		const current = $integranteNuevo;
		console.log(current);
		const integranteNew = {
			nombre: current.nombre,
			id_pokemon: current.id_pokemon,
			id_naturaleza: current.id_naturaleza,
			movimientos: current.movimientos.filter((id) => id !== null && id !== undefined)
		};
		if (current.movimientos.length > 4) {
			errorMessage = 'Un integrante no puede tener más de 4 movimientos';
			return;
		}
		const response = await fetch(`http://localhost:8000/teams/${data.team.id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(integranteNew)
		});
		if (response.ok) {
			alert('Integrante agregado correctamente');

			location.reload();
		} else {
			alert('Error al agregar el integrante');
		}
	}

	async function guardarIntegrante(event) {
		event.preventDefault();
		const currentIntegrante = $integrante;
		console.log(currentIntegrante);
		const integranteUpdate = {
			id_integrante: currentIntegrante.id,
			nombre: currentIntegrante.nombre,
			id_pokemon: currentIntegrante.pokemon.id,
			id_naturaleza: currentIntegrante.naturaleza.id,
			movimientos: currentIntegrante.movimientos.filter((id) => id !== null && id !== undefined)
		};
		if (currentIntegrante.movimientos.length > 4) {
			errorMessage = 'Un integrante no puede tener más de 4 movimientos';
			return;
		}
		const response = await fetch(`http://localhost:8000/teams/${data.team.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(integranteUpdate)
		});
		if (response.ok) {
			alert('Integrante actualizado correctamente');
			location.reload();
		} else {
			alert('Error al actualizar el integrante');
			location.reload();
		}
	}

	let errorMessage = '';

	function verificarCantidadMovimientos(event) {
		const movimientosSeleccionados = event.target.selectedOptions;

		if (movimientosSeleccionados.length > 4) {
			errorMessage = 'No puedes elegir mas de 4 movimientos';
		} else {
			errorMessage = '';
		}
	}

	async function eliminarIntegrante(integrante) {
		const response = await fetch(`http://localhost:8000/teams/${data.team.id}/${integrante.id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
		});

		if (response.ok) {
			alert('Integrante eliminado correctamente');
			location.reload();
		} else {
			alert('Error al eliminar el integrante');
			location.reload();
		}
	}
</script>

<h1>Equipo {data.team.nombre}</h1>

{#if data.team}
	<main>
		<p class="team-generacion">Generacion: {data.team.generacion}</p>
		<h2>Integrantes</h2>
		<button
			class="boton nuevo"
			on:click={() => {
				mostrarFormulario = true;
			}}>Agregar integrante</button
		>
		{#if mostrarFormulario}
			<form class="form-update" on:submit={nuevoIntegrante}>
				<h3>Nuevo integrante</h3>
				<div class="integrante-form">
					<div>
						<label for="nuevo-integrante-nombre">Nombre:</label>
						<input
							type="text"
							id="nuevo-integrante-nombre"
							bind:value={$integranteNuevo.nombre}
							required
						/>
					</div>
					<div>
						<label for="nuevo-integrante-pokemon">Pokemon:</label>
						<select id="nuevo-integrante-pokemon" bind:value={$integranteNuevo.id_pokemon} required>
							<option value="" disabled>Selecciona un pokemon</option>
							{#each filteredPokemones as pokemon}
								<option value={pokemon.id}>{pokemon.identificador}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="nuevo-integrante-naturaleza">Naturaleza:</label>
						<select
							id="nuevo-integrante-naturaleza"
							bind:value={$integranteNuevo.id_naturaleza}
							required
						>
							<option value="" disabled>Selecciona una naturaleza</option>
							{#each data.naturalezas as naturaleza}
								<option value={naturaleza.id}>{naturaleza.nombre}</option>
							{/each}
						</select>
					</div>
					<div class="movimiento-select">
						<label for="nuevo-integrante-movimientos">Movimientos:</label>
						<select
							id="nuevo-integrante-movimientos"
							bind:value={$integranteNuevo.movimientos}
							multiple
							required
							on:change={verificarCantidadMovimientos}
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
				</div>
				<div class="form-submit">
					<button type="submit">Crear</button>
				</div>
			</form>
		{/if}
		<div class="presentacion">
			{#each data.team.integrantes as integrante}
				<div class="integrante">
					<p>Nombre: {integrante.nombre}</p>
					<p>
						Naturaleza: {integrante.naturaleza.nombre}
					</p>
					<p>
						Pokemon: <a href="/pokemones/{integrante.pokemon.id}"
							>{integrante.pokemon.identificador}</a
						>
					</p>
					<div class="alinear">
						<p>
							Movimientos:
							{#if integrante.movimientos}
								{#each integrante.movimientos as movimiento}
									<a href="/movimientos/{movimiento.id}" class="movs">
										- {movimiento.nombre}
									</a>
								{/each}
							{:else}
								-
							{/if}
						</p>
					</div>
					<div class="form-edit">
						<button type="submit" class="boton editar" on:click={() => editarIntegrante(integrante)}
							>Editar integrante</button
						>
						<button
							type="button"
							class="boton eliminar"
							on:click={() => eliminarIntegrante(integrante)}>Eliminar integrante</button
						>
					</div>
				</div>
			{/each}
		</div>
	</main>
{/if}
{#if $integrante.id !== null}
	<form class="form-update" on:submit={guardarIntegrante}>
		<p>Editar Integrante</p>
		<div class="form-info">
			<label for="integrante-nombre">Nombre:</label>
			<input type="text" id="integrante-nombre" bind:value={$integrante.nombre} required />
		</div>
		<div class="form-info">
			<label for="integrante-pokemon">Pokemon:</label>
			<select id="integrante-pokemon" bind:value={$integrante.pokemon.id}>
				<option value="" disabled>Selecciona un pokemon</option>
				{#each filteredPokemones as pokemon}
					<option value={pokemon.id}>{pokemon.identificador}</option>
				{/each}
			</select>
		</div>
		<div class="form-info">
			<label for="integrante-naturaleza">Naturaleza:</label>
			<select id="integrante-naturaleza" bind:value={$integrante.naturaleza.id}>
				<option value="" disabled>Selecciona una naturaleza</option>
				{#each data.naturalezas as naturaleza}
					<option value={naturaleza.id}>{naturaleza.nombre}</option>
				{/each}
			</select>
		</div>
		<div class="form-info">
			<label for="integrante-movimientos">Movimientos:</label>
			<select
				id="integrante-movimientos"
				bind:value={$integrante.movimientos}
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
		<div class="form-submit">
			<button type="submit">Guardar integrante</button>
		</div>
	</form>
{/if}

<style>
	main {
		padding: 2rem;
		text-align: center;
	}

	h1 {
		text-transform: capitalize;
		font-size: 2.5rem;
		color: #000;
		margin: 4rem 0.5rem 0.5rem 2rem;
	}

	.presentacion {
		font-size: 1.2rem;
		color: #555;
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: row;
		align-items: start;
		padding: 1.5rem;

		.integrante {
			border: 4px solid brown;
			border-radius: 5px;
			width: 300px;
			padding: 1.5rem;
			margin: 0 auto;
		}

		.form-edit {
			margin: 2rem auto 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 0.5rem;
			border-style: none;
			align-items: center;
		}
	}

	.boton {
		display: inline-block;
		align-items: center;
		background-color: #e6dddd;
		color: black;
		border: 2px solid rgb(151, 134, 134);
		border-radius: 12px;
		padding: 10px 20px;
		margin-right: 5px;
		cursor: pointer;
	}

	.boton.eliminar:hover {
		background-color: red;
		color: white;
	}
	.boton.editar:hover {
		background-color: rgb(53, 24, 214);
		color: white;
	}
	.boton.nuevo:hover {
		background-color: green;
		color: white;
	}

	a {
		color: black;
		margin-top: 0.5rem;
	}

	.team-generacion {
		text-align: left;
		font-size: 1.5rem;
		border-bottom: 2px solid black;
		padding-bottom: 0.5rem;
	}

	.movs {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.error-message {
		color: red;
		margin-top: 7px;
		font-weight: bold;
		position: relative;
		border-radius: 5px;
		width: 300px;
		font-size: 13px;
	}
	.form-update {
		margin: 5rem auto;
		display: flex;
		flex-direction: column;
		border: 2px solid brown;
		border-radius: 5px;
		padding: 20px;
		width: 300px;

		p {
			text-align: center;
			margin-bottom: 2rem;
			font-size: 25px;
		}

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
			justify-self: center;
			border-style: none;
			text-align: center;
			align-items: center;
		}
	}
</style>
