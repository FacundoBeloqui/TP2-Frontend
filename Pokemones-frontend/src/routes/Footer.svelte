<footer class="main-footer">
	<div class="grid-container">
		<!-- svelte-ignore a11y_invalid_attribute -->
		<a class="wrap-right" href="#">Privacy Policy</a>
		All content & design © Pokémon Database, 2008-2024. Pokémon images & names © 1995-2024 The Coding
		Stones.
	</div>
</footer>

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
	.main-footer {
		padding: 1rem;
		background-color: #202020;
		background-image: linear-gradient(#3b3b3b, #202020);
		font-size: 0.875rem;
		color: #dbdbdb;
		//height: 350px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.grid-container {
		margin: 0 auto;
		max-width: 1220px;
	}
	.wrap-right {
		color: #fff;
		float: right;
		margin-left: 1rem;
		margin-bottom: 1rem;
	}
</style>
