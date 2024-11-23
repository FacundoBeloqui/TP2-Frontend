<script>
	export let data;
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
		<label> Nombre: </label>
		<input name="nombre" autocomplete="off" />
	</div>
	<div class="form-info">
		<label> Generacion: </label>
		<input name="generacion" autocomplete="off" />
	</div>
	<div class="form-info">
		<label> Integrantes: </label>
		<input name="integrantes" autocomplete="off" />
	</div>
	<div class="form-submit">
		<button class="button-submit">Crear</button>
	</div>
</form>

<style>
	h2 {
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

		.button-submit {
			margin-top: 0.5rem;
		}
	}
</style>
