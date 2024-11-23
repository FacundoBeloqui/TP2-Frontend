<script>
	export let data;
</script>

<h1>Equipo {data.team.nombre}</h1>

{#if data.team}
	<main>
		<h1>{data.team.nombre}</h1>
		<p class="presentacion">
			{data.team.nombre}
		</p>
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
			{/each}
		</div>
	</main>
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
