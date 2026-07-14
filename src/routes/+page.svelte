<script lang="ts">
	import { Button, Accordion, AccordionItem } from '@gsa-tts/svelte-ui-uswds';

	function handleGetStarted() {
		window.location.href = 'https://gsaext-fpdf-uat.cloud.databricks.com/';
	}
</script>

<svelte:head>
	<title>Federal Procurement Data Fabric</title>
	<meta name="description" content="Federal Procurement Data Fabric" />
</svelte:head>

<section class="usa-hero" aria-label="Introduction">
	<div class="grid-container">
		<div class="usa-hero__callout">
			<h1 class="usa-hero__heading">
				<span class="usa-hero__heading--alt">Get a deeper, more intelligent look into your agency’s procurement data</span>
			</h1>
			<p>
				Access detailed procurement information from across the federal government in a centralized tool integrated with AI, without needing to navigate multiple systems.
			</p>
			<Button variant="default" onclick={handleGetStarted}>Go to Databricks</Button>
		</div>
	</div>
</section>
<section id="test-section-id" class="grid-container usa-section  bg-primary-lighter ">
	<div class="grid-row grid-gap">
		<div class="tablet:grid-col-5">
			<h2 class="font-heading-xl margin-y-0">Ready to get started?</h2>
			<p>
				FPDF is available exclusively to federal employees and authorized contractors. Contact our team to set up your agency’s access.
			</p>
			<Button variant="default" class="margin-top-4">Contact us</Button>
		</div>
		<div class="tablet:grid-col-1 usa-prose"></div>
		<div class="tablet:grid-col-6 usa-prose">
			<Accordion bordered class="custom-accordion">
				<AccordionItem id="who" title="Who can access FPDF?" expanded>
					FPDF is available to federal employees with a valid Login.gov account. Access levels may vary by agency and role. Contract your agency’s FPDF point of contact to learn more about access permissions.
				</AccordionItem>
				<AccordionItem id="what" title="What datasets are included in FPDF?">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit
				</AccordionItem>
				<AccordionItem id="do" title="Do I need technical skills to use FPDF?">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit
				</AccordionItem>
				<AccordionItem id="is" title="Is my agency’s data secure?">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</section>

<style>
	:global(.custom-accordion .usa-accordion__button) {
		background-color:  #aacdec;
	}
	:global(.custom-accordion .usa-accordion__button:hover) {
		background-color: #73b3e7;
	}
	:global(.custom-accordion .usa-accordion__button:focus) {
		outline: 3px solid #aacdec;
		outline-offset: 2px;
	}
	:global(.custom-accordion .usa-accordion__content) {
		background-color: #d9e8f6;
		border-left-color: #aacdec;
		border-right-color: #aacdec;
		border-bottom-color: #aacdec;
	}
	.usa-hero {
		color: rgb(0, 0, 0);
		background-color: rgb(240, 240, 240);
		background-image: url('/assets/img/hero-bgd.jpg');
		background-size: cover;
		background-position: center;
	}
	.usa-hero__heading--alt {
		color: #000000;
	}

	.usa-hero__callout {
		max-width: 35rem;
		background-color: transparent;
		padding-left: 0;
	}
</style>
