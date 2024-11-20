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
					<td><a href="/teams/{equipo.id}">{equipo.nombre}</a></td>
					<td>{equipo.generacion}</td>
					<td>{equipo.integrantes}</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<h2>Crear Equipo</h2>
<form method="POST" action="?/create">
	<label>
		Nombre:
		<input name="nombre" autocomplete="off" />
	</label>
	<label>
		Generacion:
		<input name="generacion" autocomplete="off" />
	</label>
	<label>
		Integrantes:
		<input name="integrantes" autocomplete="off" />
	</label>
	<button>Crear</button>
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
</style>