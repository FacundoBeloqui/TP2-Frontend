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

	let naturalezas = [
		{ id: 1, nombre: 'Adamant' },
		{ id: 2, nombre: 'Modest' },
		{ id: 3, nombre: 'Jolly' }
	];

	function editarIntegrante(integranteSeleccionado) {
		integrante.set({ ...integranteSeleccionado });
	}

	// let selectedPokemon = null;
	// let selectedMovimiento = null;
	let selectedGeneration = null;

	$: filteredPokemones = selectedGeneration ? data.pokemones.filter(pokemon => pokemon.generacion.includes(parseInt(selectedGeneration))) : data.pokemones;

	$: filteredMovimientos = selectedGeneration ? data.movimientos.filter(movimiento => movimiento.generacion === parseInt(selectedGeneration)) : data.movimientos;


	 // Función para guardar los cambios del integrante
	async function guardarIntegrante() {
		const currentIntegrante = $integrante;

		const response = await fetch(`/teams/${data.team.id}/${currentIntegrante.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(currentIntegrante)
		});

		if (response.ok) {
		alert('Integrante actualizado correctamente');
		// Realiza alguna acción después de guardar, como redirigir o actualizar la vista
		} else {
		alert('Error al actualizar el integrante');
		}
	}

	function verificarSelecciones(event) {
		const selectElement = event.target;
		const seleccionados = selectElement.selectedOptions;
		const mensajeError = document.getElementById(`mensaje-error`);

		if (seleccionados.length > 4) {
			mensajeError.style.display = 'block';
			seleccionados[seleccionados.length - 1].selected = false;
		} else {
			mensajeError.style.display = 'none';
		}
	}

</script>

<h1>Equipo {data.team.nombre}</h1>

{#if data.team}
	<main>
		<h1>{data.team.nombre}</h1>
		<p class="presentacion">
			{data.team.nombre}
		</p>
		<p>Generacion: {data.team.generacion}</p>
		<h2>Integrantes</h2>
		<div class="presentacion">
			{#each data.team.integrantes as integrante}
				<p>Nombre: {integrante.nombre}</p>
				<p>
					Naturaleza: <a href="/naturalezas/{integrante.naturaleza.id}"
						>{integrante.naturaleza.nombre}</a
					>
				</p>
				<p>
					Pokemon: <a href="/pokemones/{integrante.pokemon.id}"
						>{integrante.pokemon.identificador}</a
					>
				</p>
				<p>
					Movimientos:
					{#each integrante.movimientos as movimiento}
						<a href="/movimientos/{movimiento.id}" class="movs">
							- {movimiento.nombre}
						</a>
					{/each}
				</p>
				<!-- {#each Object.entries(integrante.pokemon) as [key, value]}
					<p>{key}: {value}</p>
				{/each} -->
				<button type="button" on:click={() => editarIntegrante(integrante)}>Editar integrante</button>
			{/each}
		</div>
	</main>
{/if}

{#if $integrante.id !== null}
	<form class="form-update" on:submit={guardarIntegrante}>
		<legend>Editar Integrante</legend>
		<div>
			<label for="integrante-nombre">Nombre:</label>
			<input type="text" id="integrante-nombre" bind:value={$integrante.nombre} required />
		</div>
		<div>
			<label for="integrante-pokemon">Pokemon:</label>
			<select id="integrante-pokemon" bind:value={$integrante.pokemon.id}>
				<option value="" disabled>Selecciona un pokemon</option>
				{#each filteredPokemones as pokemon}
					<option value={pokemon.id}>{pokemon.identificador}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="integrante-naturaleza">Naturaleza:</label>
			<select id="integrante-naturaleza" bind:value={$integrante.naturaleza.id}>
				<option value="" disabled>Selecciona una naturaleza</option>
				{#each naturalezas as naturaleza}
				<option value={naturaleza.id}>{naturaleza.nombre}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="integrante-movimientos">Movimientos:</label>
			<select id="integrante-movimientos" bind:value={$integrante.movimientos} multiple required on:change={(event) => verificarSelecciones(event)}>
				<option value="" disabled>Selecciona entre 1 y 4 movimientos:</option>
				{#each filteredMovimientos as movimiento} 
					<option value={movimiento.id}>{movimiento.nombre}</option>
				{/each}
			</select>
		</div>

		<button type="submit">Guardar integrante</button>
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
		margin-bottom: 0.5rem;
	}

	.presentacion {
		font-size: 1.2rem;
		color: #555;
		margin-bottom: 1.5rem;
	}

	.movs {
		display: flex;
		flex-direction: column;
		text-align: left;
	}
</style>
