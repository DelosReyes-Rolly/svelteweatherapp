<script>
	import Main from './components/Main.svelte';
</script>

<svelte:head>
	<title>Svelte Weather App</title>
	<meta name="description" content="Svelte Weather App" />
	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>

	<!-- Material Typography -->
	<link 
		rel="stylesheet"
		href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
	/>

	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<Main />