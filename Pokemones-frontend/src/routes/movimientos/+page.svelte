<script>
	import Typeahead from 'svelte-typeahead';
	export let data;

	function searchedMovimiento(movimiento) {
		console.log(movimiento.detail.original.id);
		window.location.href = `/movimientos/${movimiento.detail.original.id}`;
	}
</script>

<h1>Ésta es la página de Movimientos</h1>
<Typeahead
	label="Preseleccionar movimiento"
	placeholder={`Buscar movimiento por id o nombre`}
	data={data.movimientos}
	extract={(movimiento) => `${movimiento.id} ${movimiento.nombre}`}
	on:select={(movimiento) => searchedMovimiento(movimiento)}
	inputAfterSelect="clear"
/>

<table>
	<thead>
		<tr>
			<th>id</th>
			<th>nombre</th>
			<th>generacion</th>
			<th>tipo</th>
			<th>poder</th>
			<th>accuracy</th>
			<th>pp</th>
			<th>categoria</th>
			<th>efecto</th>
		</tr>
	</thead>
	<tbody>
		{#each data.movimientos as movimiento}
			<tr class={movimiento.id % 2 == 0 ? 'zero' : 'one'}>
				<td>{movimiento.id}</td>
				<td><a href="/movimientos/{movimiento.id}">{movimiento.nombre}</a></td>
				<td>{movimiento.generacion}</td>
				<td>{movimiento.tipo}</td>
				<td>{movimiento.poder}</td>
				<td>{movimiento.accuracy}</td>
				<td>{movimiento.pp}</td>
				<td>{movimiento.categoria}</td>
				<td>{movimiento.efecto}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 40px;
		margin: 4rem 3rem;
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
	td {
		font-size: 25px;
		padding: 20px;
	}
</style>
