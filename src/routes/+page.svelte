<script lang="ts">
	import { Button } from '@gsa-tts/svelte-ui-uswds';
</script>

<svelte:head>
	<title>TTSE Petrified Forest</title>
	<meta name="description" content="Welcome to the TTSE Petrified Forest website" />
</svelte:head>

<div class="usa-section">
	<div class="grid-container">
		<h1>Welcome to TTSE Petrified Forest</h1>
		<p>This is a SvelteKit application using USWDS components.</p>

		<Button variant="default">Get Started</Button>
	</div>
</div>

<style>
	.usa-section {
		padding: 4rem 0;
	}

	h1 {
		margin-bottom: 1.5rem;
	}

	p {
		margin-bottom: 2rem;
	}
</style>
