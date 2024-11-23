<script>
	export let data;
</script>

{#if data.pokemon}
	<main>
		<h1>{data.pokemon.identificador}</h1>
		<p class="presentacion">
			{data.pokemon.identificador} es un Pokémon de tipo {data.pokemon.tipo.join(', ')} introducido en
			la generación {data.pokemon.generacion[0]}.
		</p>
		<img
			src={data.pokemon.imagen}
			alt="Imagen de {data.pokemon.identificador}"
			class="pokemon-imagen"
		/>
		<section class="pokedex-data">
			<h2>Datos de la Pokédex</h2>
			<table>
				<tbody>
					<tr>
						<th>Altura</th>
						<td>{data.pokemon.altura / 10} m</td>
					</tr>
					<tr>
						<th>Peso</th>
						<td>{data.pokemon.peso / 10} kg</td>
					</tr>
					<tr>
						<th>Experiencia Base</th>
						<td>{data.pokemon.experiencia_base}</td>
					</tr>
					<tr>
						<th>Grupo de Huevo</th>
						<td>{data.pokemon.grupo_de_huevo}</td>
					</tr>
					<tr>
						<th>Generación</th>
						<td>{data.pokemon.generacion}</td>
					</tr>
					<tr>
						<th>Habilidades</th>
						<td>{data.pokemon.habilidades.join(', ')}</td>
					</tr>
					<tr>
						<th>Evoluciones Inmediatas</th>
						<td>{data.pokemon.evoluciones_inmediatas.join(', ')}</td>
					</tr>
					<tr>
						<th>Tipo</th>
						<td>{data.pokemon.tipo.join(', ')}</td>
					</tr>
					<tr>
						<th>Estadísticas</th>
						<td>
							<ul>
								{#each Object.entries(data.pokemon.estadisticas) as [key, value]}
									<li><strong>{key}:</strong> {value}</li>
								{/each}
							</ul>
						</td>
					</tr>
					<tr>
						<th>Debilidades</th>
						<td>
							<ul>
								{#each Object.entries(data.pokemon.debilidades) as [key, value]}
									<li><strong>{key}:</strong> {value}</li>
								{/each}
							</ul>
						</td>
					</tr>
					<tr>
						<th>Fortalezas</th>
						<td>
							<ul>
								{#each Object.entries(data.pokemon.fortalezas) as [key, value]}
									<li><strong>{key}:</strong> {value}</li>
								{/each}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	</main>
{:else}
	<p class="no-encontrado">No se encontró el Pokémon.</p>
{/if}

<button class="volver-link"><a href="/pokemones">Volver a la lista</a></button>

<style>
	* {
		font-family: 'Fira Sans', 'Trebuchet MS', Ubuntu, Helvetica, Arial, sans-serif;
		color: #333;
		line-height: 1.5;
		margin: 0;
		padding: 0;
	}

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

	.pokemon-imagen {
		width: 20%;
		height: 20%;
		margin: 1rem auto;
	}

	.pokedex-data {
		margin-top: 2rem;
	}

	.pokedex-data h2 {
		font-size: 1.8rem;
		color: #444;
		margin-bottom: 1rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 0 auto;
		text-align: left;
	}

	th,
	td {
		padding: 0.8rem;
		border-bottom: 1px solid #ddd;
	}

	th {
		font-weight: bold;
		color: #333;
	}

	td ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	td ul li {
		margin: 0.3rem 0;
	}

	.no-encontrado {
		color: #900;
		font-size: 1.2rem;
		margin: 2rem 0;
	}

	button {
		background-color: #04aa6d;
		border: none;
		color: white;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		border-radius: 12px;
		position: relative;
		right: 570px;
	}

	.volver-link {
		background-color: white;
		color: black;
		border: 2px solid #04aa6d;
	}

	.volver-link:hover {
		background-color: #04aa6d;
		color: white;
	}
</style>
