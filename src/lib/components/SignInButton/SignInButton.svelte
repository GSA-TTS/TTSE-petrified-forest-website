<script>
	import { Button } from '@gsa-tts/svelte-ui-uswds';

	function handleGetStarted() {
		window.location.href = 'https://gsaext-fpdf-uat.cloud.databricks.com/';
	}
</script>

<Button variant="default" onclick={handleGetStarted}>Sign in</Button>
