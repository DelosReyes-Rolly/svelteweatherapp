<script>
	import { weather, forecast, fetchWeather } from '$lib/index.js'; // Adjust the import path if necessary
	import { onMount } from 'svelte'; // for first rendering of page (onMount) - default city
	import Card from './Card.svelte';
	import { get } from 'svelte/store';

	/**
	 * @type {null}
	 */
	let data = null;
	/**
	 * @type {null}
	 */
	let fc = null;
	let city = 'Taguig City'; // default city on page load

	/**
	 * @param {string} cityName
	 */
	async function getWeather(cityName) {
		await fetchWeather(cityName);
		data = get(weather);
		fc = get(forecast);
	}

	onMount(() => {
		getWeather(city);
	});
</script>

<main>
	{#if data && fc}
		<Card {data} {fc} onSearch={getWeather} />
	{:else}
		<p>Loading ....</p>
	{/if}
</main>
