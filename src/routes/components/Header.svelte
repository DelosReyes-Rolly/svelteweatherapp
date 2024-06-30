<script>
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import { Icon } from '@smui/common';
	let today = new Date();
	const options = { weekday: 'long', day: 'numeric', month: 'long' };
	// @ts-ignore
	const formattedDate = today.toLocaleDateString('en-GB', options);

	// Split the date into parts
	const [weekday, dayMonth] = formattedDate.split(', ');

	function updateTime() {
		today = new Date();
	}

	// Call updateTime every second to update the time
	setInterval(updateTime, 1000);
</script>

<TopAppBar variant="standard" style="padding-top: 10px; padding-bottom: 10px; background-color:#050A30; box-shadow: 0 4px 20px -2px gray;">
	<Row>
		<Section style="padding-left:40px;">
				<Icon
					tag="img"
					style="height: auto; width: 48px;"
					src="svelte-logo.png"
				/>
				<Title>Svelte Weather App</Title>
		</Section>
		<div
			style="text-align: center; padding-right:40px; letter-spacing: 4px; font-family:Arial, Helvetica, sans-serif; font-size: 20px"
		>
			<span class="weekday">{weekday}</span>, {dayMonth}
			<br />
			<div style="padding-top: 10px;">
				{today.toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: true
				})}
			</div>
		</div>
	</Row>
</TopAppBar>

<style>
	.weekday {
		font-weight: bold;
	}
</style>