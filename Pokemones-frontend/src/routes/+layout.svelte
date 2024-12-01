<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		flex: 1;
		margin: 0 auto;
		width: 100%;
		overflow-x: scroll;
	}
</style>
