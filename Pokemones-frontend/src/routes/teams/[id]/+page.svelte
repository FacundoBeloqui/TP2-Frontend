<script>
	import { writable } from 'svelte/store';
	export let data;

	let integrante = writable({
		id: null,
		nombre: '',
		pokemon: '',
		naturaleza: '',
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

	async function guardarIntegrante() {
		const currentIntegrante = $integrante;
		console.log(currentIntegrante);
		const integranteUpdate = {
			id_integrante: currentIntegrante.id,
			nombre: currentIntegrante.nombre,
			id_pokemon: currentIntegrante.pokemon.id,
			id_naturaleza: currentIntegrante.naturaleza.id,
			movimientos: currentIntegrante.movimientos.filter((id) => id !== null && id !== undefined) // Asegúrate de que sea un array de IDs
		};
		const response = await fetch(`http://localhost:8000/teams/${data.team.id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(integranteUpdate)
		});

		if (response.ok) {
			alert('Integrante actualizado correctamente');
		} else {
			alert('Error al actualizar el integrante');
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
</script>

<h1>Equipo {data.team.nombre}</h1>

{#if data.team}
	<main>
		<p class="team-generacion">Generacion: {data.team.generacion}</p>
		<h2>Integrantes</h2>
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
					<div class="form-edit">
						<button type="button" on:click={() => editarIntegrante(integrante)}
							>Editar integrante</button
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
			border: 2px solid red;
			border-radius: 5px;
			width: 300px;
			padding: 1.5rem;
			margin: 0 auto;
		}

		.form-edit {
			margin: 2rem auto 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			border-style: none;
			align-items: center;
		}
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
		text-align: left;
	}

	.form-update {
		margin: 5rem auto;
		display: flex;
		flex-direction: column;
		border: 2px solid red;
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
