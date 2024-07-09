<script>
	export let data;
	export let fc;
	import Card, { Content } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Search from './Search.svelte';
	export let onSearch;

	let weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
</script>

<main>
	<Card
		style="width: 1200px; margin: 8em auto 0; background-color:#189AB4; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
	>
		<Content class="mdc-typography--body2">
			<Search {onSearch} /> <br />
			<div style="height: 400px;" class="card-above">
				<img
					src="card-background.jpg"
					alt="Weather background"
					style="position: absolute; z-index: 1; height:402px; width:1170px; filter: brightness(40%);"
					class="card-above"
				/>
				<div
					id="top-content"
					style="text-align: center; position: relative; z-index: 2; color: white; padding-top: 80px;"
				>
					<div class="left-to-right">
						<img src={weatherIconUrl} alt="Weather icon" />
						<h2 class="mdc-typography--headline6" style="margin: 0; font-size: 100px;">
							{+data.main.temp.toFixed(0)}°C
						</h2>
						<br /><br />
						<h3
							class="mdc-typography--subtitle6"
							style="margin: 0 0 10px; letter-spacing: 4px; text-transform: uppercase;"
						>
							<br /><br />
							{data.weather[0].description}
						</h3>
						<br />
						<div style="letter-spacing: 4px; text-transform: uppercase; padding-right: 20px;">
							Humidity - <span style="padding-top: 12px; padding-right: 40px;"
								>{data.main.humidity}%</span
							>
						</div><br />
						<div style="letter-spacing: 4px; text-transform: uppercase;">
							Wind - <span style="padding-top: 12px;">{+data.wind.speed.toFixed(0)} k/m</span>
						</div>
					</div>
				</div>
				<div
					id="top-content"
					style="text-align: center; position: relative; z-index: 2; color: white;"
				></div>
				<div
					id="top-content"
					style="text-align: center; position: relative; z-index: 2; color: white; padding-top: 100px;"
				>
					<div class="right-to-left">
						<h2
							class="mdc-typography--headline6"
							style="margin: 0; letter-spacing: 4px; text-transform: uppercase; font-size: 28px; color: white;"
						>
							{data.name}
						</h2>
						<hr style="border-radius: 10px; border: 4px solid white; width: 80px" />
					</div>
				</div>
			</div>
			{#each fc.slice(1, 6) as fore}
				<section style="color: white; margin-top: 2em; margin-bottom: 2em;" class="top-to-bottom">
					<div class="card-below">
						<div style="text-align: center; letter-spacing: 4px; text-transform: uppercase;">
							<div style="padding-top: 4px;">{fore.date}</div>
						</div>
						<img
							style="margin-left: 4.8em;"
							src="https://openweathermap.org/img/wn/{fore.icon}@2x.png"
							alt="Weather icon"
						/><br /><br />
						<div
							style="text-align: center; letter-spacing: 4px; text-transform: uppercase; margin-top:-30px;"
						>
							{+fore.temp.toFixed(0)}°C
							<div style="padding-top: 4px">{fore.weather}</div>
						</div>
					</div>
				</section>
			{/each}
		</Content>
	</Card>
</main>

<style>
	.card-above {
		border-radius: 16px;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-shadow: 0.6px 0.6px 0.6px rgb(141, 140, 140);
	}
	.card-below {
		border-radius: 16px;
		box-shadow:
			0 4px 8px 0 rgba(22, 19, 19, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-shadow: 2px 2px 2px rgb(141, 140, 140);
		margin-right: 14px;
		margin-left: 14px;
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: #6d9ca5;
	}
	.card-below:hover {
		box-shadow: none;
		text-shadow: none;
	}
	section {
		width: 20%;
		height: 100%;
		float: left;
		box-sizing: border-box; /* so the borders don't mess up the alignment */
	}
	#top-content {
		width: 32%;
		height: 100%;
		float: left;
		box-sizing: border-box; /* so the borders don't mess up the alignment */
	}
	.right-to-left {
		animation: fadeInRight 0.8s ease-in-out;
	}

	@keyframes fadeInRight {
		from {
			opacity: 0;
			transform: translateX(80px);
		}
		to {
			opacity: 1;
		}
	}

	.left-to-right {
		animation: fadeInLeft 0.8s ease-in-out;
	}

	@keyframes fadeInLeft {
		from {
			opacity: 0;
			transform: translateX(-80px);
		}
		to {
			opacity: 1;
		}
	}

	.top-to-bottom {
		animation: fadeInTop 0.8s ease-in-out;
	}

	@keyframes fadeInTop {
		from {
			opacity: 0;
			transform: translateY(-40px);
		}
		to {
			opacity: 1;
		}
	}
</style>
