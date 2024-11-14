<header class="main-header">
    <div class="grid-container"></div>
    <a class ="header-logo" href="/">
        <picture>
            <source type="image/avif" media="(min-width: 900px)" width="1140" height="100" srcset="https://img.pokemondb.net/design/avif/header-lg.avif">
            <source type="image/avif" media="(min-width: 620px)" width="807" height="100" srcset="https://img.pokemondb.net/design/avif/header-md.avif, https://img.pokemondb.net/design/avif/header-md-2x.avif 2x">
            <source type="image/avif" width="367" height="100" srcset="https://img.pokemondb.net/design/avif/header-sm.avif, https://img.pokemondb.net/design/avif/header-sm-2x.avif 2x"> 
            <source type="image/png" media="(min-width: 900px)" width="1140" height="100" srcset="https://img.pokemondb.net/design/header-lg.png">
            <source type="image/png" media="(min-width: 620px)" width="807" height="100" srcset="https://img.pokemondb.net/design/header-md.png, https://img.pokemondb.net/design/header-md-2x.png 2x">
            <img src="https://img.pokemondb.net/design/header-sm.png" alt="Pokemon Database logo, with Scizor" srcset="https://img.pokemondb.net/design/header-sm-2x.png 2x" fetchpriority="high">
        </picture>
    </a>
</header>

<style>
	
    * {
        box-sizing: border-box;   
    }
    a {
        color: #2769be;
        text-decoration: none;
        transition: color .2s,background-color .2s;
    }    
    .main-header {
        height: 124px;
        background-color: #202020;
        background-image: linear-gradient(#3b3b3b, #202020);
    }
    .grid-container {
        margin: 0 auto;
        max-width: 1220px;
    }
    .main-header > .grid-container {
        position: relative;
    }
    .header-logo {
        display: block;
        height: 124px;
        overflow: hidden;
    }
    .header-logo > picture {
        display: flex;
        justify-content: center;
    }
</style>