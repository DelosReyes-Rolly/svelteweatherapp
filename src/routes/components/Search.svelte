<script>
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';

	// Props to pass the function to fetch weather data
	export let onSearch;

	let city = '';

	// Function to handle form submission
	const handleSearch = (/** @type {{ preventDefault: () => void; }} */ event) => {
		event.preventDefault();
		onSearch(city);
	};
</script>

<main>
	<form on:submit={handleSearch} name="Search">
		<Textfield label="Search for city" bind:value={city} style="width: 40%;" name="SearchBar"/>
		<Button touch variant="raised" type="submit">Search</Button>
	</form>
</main>
