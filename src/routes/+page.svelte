<script lang="ts">
	import { Button } from '@gsa-tts/svelte-ui-uswds';

	function handleGetStarted() {
		window.location.href = 'https://gsaext-fpdf-uat.cloud.databricks.com/';
	}
</script>

<svelte:head>
	<title>Federal Procurement Data Fabric</title>
	<meta name="description" content="Federal Procurement Data Fabric" />
</svelte:head>

<div class="usa-section">
	<div class="grid-container">
		<h1>Federal Procurement Data Fabric</h1>

		<Button variant="default" onclick={handleGetStarted}>Go to Databricks</Button>
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
