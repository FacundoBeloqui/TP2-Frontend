<header class="main-header">
	<div class="grid-container">
		<a href="/" class="header-logo">
			<picture>
				<source
					type="image/avif"
					media="(min-width: 900px)"
					width="1140"
					height="100"
					srcset="https://img.pokemondb.net/design/avif/header-lg.avif"
				/>
				<source
					type="image/avif"
					media="(min-width: 620px)"
					width="807"
					height="100"
					srcset="https://img.pokemondb.net/design/avif/header-md.avif, https://img.pokemondb.net/design/avif/header-md-2x.avif 2x"
				/>
				<source
					type="image/avif"
					width="367"
					height="100"
					srcset="https://img.pokemondb.net/design/avif/header-sm.avif, https://img.pokemondb.net/design/avif/header-sm-2x.avif 2x"
				/>
				<source
					type="image/png"
					media="(min-width: 900px)"
					width="1140"
					height="100"
					srcset="https://img.pokemondb.net/design/header-lg.png"
				/>
				<source
					type="image/png"
					media="(min-width: 620px)"
					width="807"
					height="100"
					srcset="https://img.pokemondb.net/design/header-md.png, https://img.pokemondb.net/design/header-md-2x.png 2x"
				/>
				<img
					src="https://img.pokemondb.net/design/header-sm.png"
					alt="Pokemon Database logo, with Scizor"
					srcset="https://img.pokemondb.net/design/header-sm-2x.png 2x"
					fetchpriority="high"
				/>
			</picture>
		</a>
	</div>
</header>
<nav class="main-menu grid-container">
	<ul class="main-menu-list">
		<p class="main-menu-item">
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="main-menu-heading" href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="main-menu-icon img-fixed"
					width="24"
					height="24"
					aria-label="Pokeball icon"
					role="img"
					><g fill="#a3a3a3"
						><path
							d="M229.7 36.8A220.9 220.9 0 0 0 37.5 224.9l-.4 4.3h106.5l1.4-4.7a116.3 116.3 0 0 1 73-77.5 114.7 114.7 0 0 1 149 79l.9 3.2H475l-1.7-10.1A220 220 0 0 0 281 36.7c-12-1.4-39.3-1.4-51.2 0z"
						></path><path
							d="M239.7 185a74 74 0 0 0-49.7 40.3 73 73 0 0 0 15.4 82.3 72.1 72.1 0 0 0 101.9-1.2 68.8 68.8 0 0 0 20.6-50.7 69.1 69.1 0 0 0-21-51.2 73.3 73.3 0 0 0-33-19c-7.6-2.1-26.4-2.3-34.2-.5z"
						></path><path
							d="M37.5 286.3a220.5 220.5 0 0 0 436 4.5l1.5-8.9H367.9l-1 3.2a130 130 0 0 1-17.7 37.6 144 144 0 0 1-26.9 26.8 142 142 0 0 1-30.7 15.4 96.3 96.3 0 0 1-35.8 5.3 90 90 0 0 1-22.5-1.7 114 114 0 0 1-58.6-31.7 110.1 110.1 0 0 1-28.3-46l-2.9-8.9H37l.6 4.4h-.1z"
						></path></g
					></svg
				> <span class="main-menu-title">Home</span>
			</a>
		</p>
		<p class="main-menu-item">
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="main-menu-heading" href="/pokemones">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="main-menu-icon img-fixed"
					width="24"
					height="24"
					aria-label="Mechanics icon"
					role="img"
					><path
						fill="#a3a3a3"
						d="M479.5 297.5v-82l-50.3-8.4a156.5 156.5 0 0 0-16-38.3l30-40.8-57.7-58.8-42 29c-12-6.5-25-12.2-38.2-15.9L297 33h-82l-8.3 50.3a163 163 0 0 0-38.3 16l-41-29.1L68.8 128l29.9 41A184 184 0 0 0 82.8 208l-50.3 7.4v82l50.3 8.3a163 163 0 0 0 16 38.3l-30 41.7 57.6 57.6 42-29.7a184 184 0 0 0 39 15.8l8.4 49.5h82l8.3-50.4c13.1-3.7 26-9.3 38.3-15.8l41.9 29.8 57.6-57.8-29.7-42c6.4-12 12-24 15.8-38.1l49.3-7.4.2.2zM255.8 342c-47.5 0-85.7-38.3-85.7-85.7s39.1-85.7 85.7-85.7 85.8 38.3 85.8 85.7-38.3 85.7-85.8 85.7z"
					></path></svg
				> <span class="main-menu-title">Pokemones</span>
			</a>
		</p>
		<p class="main-menu-item">
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="main-menu-heading" href="/movimientos">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="main-menu-icon img-fixed"
					width="24"
					height="24"
					aria-label="Game controller icon"
					role="img"
					><path
						fill="#a3a3a3"
						fill-rule="evenodd"
						d="M117.4 121.9c-104.8 14.6-152 142.6-82.2 222.9 48 55 131.9 62.7 187.2 17l4.6-3.8H285l4.6 3.7c55.3 45.8 139.3 38.2 187.2-17 70.2-80.6 22.4-208.6-83.1-222.9-14.8-2-261.9-2-276.2 0m42.8 52.8c2.2 2.2 2.2 2.7 2.5 29.4l.3 27.2h53.5l2.4 2.5c3.8 3.8 3.8 40.8 0 44.6l-2.4 2.4H163l-.3 27.2c-.4 35 2.2 31.7-25 31.7-27.3 0-24.7 3.3-25-31.7l-.4-27.2H59l-2.4-2.4c-3.9-3.8-3.9-40.8 0-44.6l2.4-2.5h53.4l.3-27c.4-35-1.8-32.4 26.3-32 18.3.1 19 .2 21.3 2.4m259.3 16.5a33.7 33.7 0 0 1 19.5 42.5 33.2 33.2 0 0 1-59 5.8c-16.4-26.6 9.7-58.4 39.5-48.3M352 259a33 33 0 0 1 3.7 60 32.7 32.7 0 0 1-48-27.3A32.9 32.9 0 0 1 352 259"
					></path></svg
				> <span class="main-menu-title">Movimientos</span>
			</a>
		</p>
		<p class="main-menu-item">
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="main-menu-heading" href="/equipos">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="main-menu-icon img-fixed"
					width="24"
					height="24"
					aria-label="Chat icon"
					role="img"
					><path
						fill="#a3a3a3"
						d="M36.5 95v241.5a44.5 44.5 0 0 0 43.9 43.9h58.5v73.1a7.3 7.3 0 0 0 12.8 5l71-78.1h208.9a44.5 44.5 0 0 0 43.9-44V95a44.5 44.5 0 0 0-43.9-43.9H80.4a44.5 44.5 0 0 0-43.9 44zm292.7 117.1a29.3 29.3 0 1 1 58.6 0 29.3 29.3 0 0 1-58.6 0zm-102.5 0a29.3 29.3 0 1 1 58.6 0 29.3 29.3 0 0 1-58.6 0zm-102.4 0a29.3 29.3 0 1 1 58.6 0 29.3 29.3 0 0 1-58.6 0z"
					></path></svg
				> <span class="main-menu-title">Equipos</span>
			</a>
		</p>
	</ul>
</nav>

<style>
	* {
		box-sizing: border-box;
	}
	a {
		color: #2769be;
		text-decoration: none;
		transition:
			color 0.2s,
			background-color 0.2s;
	}
	ul {
		padding: 0;
	}
	.main-header {
		height: 124px;
		background-color: #202020;
		background-image: linear-gradient(#3b3b3b, #202020);
	}
	.grid-container {
		margin: 0 auto;
		width: a;
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
	.main-menu {
		margin-top: -24px;
		background-color: #363636;
		background-image: linear-gradient(#404040, #363636);
	}
	.main-menu-list {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		margin: 0;
	}
	.main-menu-item {
		line-height: 2.5rem;
		position: relative;
		flex: 1 0;
		color: #f0f0f0;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
		margin: auto;
	}
	.main-menu-heading {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 0.25rem 0.5rem 0;
		padding-bottom: 0.25rem;
		font-size: 1rem;
		font-weight: bold;
		text-align: center;
	}
	.main-menu-icon {
		margin: 0 0.5rem 0 0;
		width: 24px;
		height: 24px;
	}
	.main-menu-item a {
		color: #f0f0f0;
		text-decoration: none;
	}
</style>
