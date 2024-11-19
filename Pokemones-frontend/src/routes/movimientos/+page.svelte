<script>
    export let data;
</script>

<h1>Ésta es la página de movimientos</h1>

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
            <th> pokemones_subida_nivel</th>
            <th>pokemones_tm</th>
            <th> pokemones_grupo_huevo</th>
        </tr>
    </thead>
    <tbody>
        {#each data.movimiento as movimiento}
            <tr class="{movimiento.id % 2 == 0 ? 'zero' : 'one'}">
                <td>{movimiento.id}</td>
                <td>{movimiento.nombre}</td>
                <td>{movimiento.generacion}</td>
                <td>{movimiento.tipo}</td>
                <td>{movimiento.poder}</td>
                <td>{movimiento.accuracy}</td>
                <td>{movimiento.pp}</td>
                <td>{movimiento.categoria}</td>
                <td>{movimiento.efecto}</td>
                <td>{movimiento.pokemones_subida_nivel}</td>
                <td>{movimiento.pokemones_tm}</td>
                <td>{movimiento.pokemones_grupo_huevo}</td>
                
            </tr>
        {/each}
    </tbody>
</table>

<h1>esta es la pagina de movimientos</h1>
