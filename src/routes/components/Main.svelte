<script>
	import Header from './Header.svelte';
	import Weather from './Weather.svelte';
</script>

<main>
	<Header />
    <br/>
	<Weather/>
</main>

<style>
	:global(body) {
		background-image: url('bg.jpeg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
		margin: 0;
		padding: 0;
	}
</style>
