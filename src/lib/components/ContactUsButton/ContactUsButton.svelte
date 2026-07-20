<script>
	import { Button } from '@gsa-tts/svelte-ui-uswds';

	function handleGetStarted() {
		window.location.href = 'mailto:FPDFTeam@gsa.gov?subject=FPDF%20Request';
	}
</script>

<Button variant="default" onclick={handleGetStarted}>Contact us</Button>
