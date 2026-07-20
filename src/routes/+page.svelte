<script lang="ts">
	import { Accordion, AccordionItem } from '@gsa-tts/svelte-ui-uswds';
	import ContactUsButton from '$lib/components/ContactUsButton/ContactUsButton.svelte';
</script>

<svelte:head>
	<title>Federal Procurement Data Fabric</title>
	<meta name="description" content="Federal Procurement Data Fabric" />
</svelte:head>

<section class="usa-hero bg-base-lightest" aria-label="Introduction">
	<div class="grid-container">
		<div class="usa-hero__callout">
			<h1 class="usa-hero__heading">
				<span class="usa-hero__heading--alt">Get a deeper, more intelligent look into your agency’s procurement data</span>
			</h1>
			<p>
				Access detailed procurement information from across the federal government in a centralized tool integrated with AI, without needing to navigate multiple systems.
			</p>
		</div>
	</div>
</section>
<section id="new-section-id" class="usa-section bg-base-lightest">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<h2 class="font-heading-xl margin-y-0">A new way to make decisions</h2>
			<p>
				Our intelligent interface interprets natural language queries and returns data-backed answers, making complex analysis accessible to every user, regardless of technical background.
			</p>
		</div>
		<div class="grid-row grid-gap bg-white padding-top-2 padding-bottom-2 decision-cards">
			<div class="tablet:grid-col-6">
				<h2 class="margin-y-0">For the Acquisition Workforce</h2>
				<p>
					Unify fragmented procurement data for instant insights.
				</p>
			</div>
			<div class="tablet:grid-col-6">
				<h3 class="site-preview-heading margin-0">Market Research</h3>
				<ul class="usa-list">
					<li>Get a complete view into details of individual contracts or larger vehicles from across the government</li>
					<li>Use custom filters to find awards that match your specifications (e.g. product, service, or vendor)</li>
					<li>Use plain English to search using FPDF’s “Similar Contract Finder”</li>
				</ul>
				<h3 class="site-preview-heading margin-0">Facilitating Awards</h3>
				<ul class="usa-list">
					<li>View all post-award documents for desired contracts in an interface that prioritizes the documents that are most relevant to your search</li>
				</ul>
			</div>
		</div>
		<div class="grid-row grid-gap bg-white margin-top-4 padding-top-2 padding-bottom-2 decision-cards">
			<div class="tablet:grid-col-6">
				<h2 class="margin-y-0">For Executives</h2>
				<p>
					Centralize portfolios for strategic decisions.
				</p>
			</div>
			<div class="tablet:grid-col-6">
				<h3 class="site-preview-heading margin-0">Quick answers to high-level questions</h3>
				<ul class="usa-list">
					<li>Obligations and outlays by department, agency, office, and other levels of organizational hierarchy as desired</li>
					<li>View spend by category, vendor, and other dimensions</li>
				</ul>
				<h3 class="site-preview-heading margin-0">Easy access to finer levels of detail</h3>
				<ul class="usa-list">
					<li>Easily navigate from high-level summaries to detailed aspects of contracts such as individual line items</li>
					<li>Use the “AskFPDF” chatbot for quick clarifying questions</li>
				</ul>
			</div>
		</div>
		<div class="grid-row grid-gap bg-white margin-top-4 padding-top-2 padding-bottom-2 decision-cards">
			<div class="tablet:grid-col-6">
				<h2 class="margin-y-0">For Analysts and Technical Users</h2>
				<p>
					Access governed data for advanced analytics.
				</p>
			</div>
			<div class="tablet:grid-col-6">
				<h3 class="site-preview-heading margin-0">Quick answers to ad hoc questions</h3>
				<ul class="usa-list">
					<li>Use the “AskFPDF” chatbot to get detailed answers to questions that may not be answered by a dashboard</li>
					<li>Validate the correctness of the chatbot’s answers looking under the hood at the SQL it used to generate its answer</li>
				</ul>
				<h3 class="site-preview-heading margin-0">Access raw data</h3>
				<ul class="usa-list">
					<li>Access the data as it exists at each level of FPDF’s medallion architecture from the raw source data to enriched </li>
				</ul>
				<h3 class="site-preview-heading margin-0">Custom dashboards</h3>
				<ul class="usa-list">
					<li>Create agency-specific views of the data that matter most to you</li>
					<li>Drag, drop, and configure with no coding required if using the metric views FPDF has established for each grain of data</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section id="ready-section-id" class="usa-section bg-primary-lighter">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<div class="tablet:grid-col-5">
				<h2 class="font-heading-xl margin-y-0">Ready to get started?</h2>
				<p>
					FPDF is available exclusively to federal employees and authorized contractors. Contact our team to set up your agency’s access.
				</p>
				<ContactUsButton />
			</div>
			<div class="tablet:grid-col-1 usa-prose"></div>
			<div class="tablet:grid-col-6 usa-prose">
				<Accordion bordered class="custom-accordion" multiselectable>
					<AccordionItem id="access" title="Who can access FPDF?" expanded>
						FPDF is available to federal employees with a valid Login.gov account. Access levels may vary by agency and role. Contract your agency’s FPDF point of contact to learn more about access permissions.
					</AccordionItem>
					<AccordionItem id="datasets" title="What datasets are included in FPDF?">
						FPDF consolidates procurement-related data from across the federal government, including contract awards, vendor information, spending history, and more. The platform continues to expand as additional data sources are integrated.
					</AccordionItem>
					<AccordionItem id="tech-skills" title="Do I need technical skills to use FPDF?">
						No. FPDF is designed for users at all technical levels. The AI-powered interface allows you to ask questions in plain language, and the dashboard builder requires no coding. However, advanced users can access more powerful query tools.
					</AccordionItem>
					<AccordionItem id="secure" title="Is my agency’s data secure?">
						Yes. FPDF is built on federal security standards, including FedRAMP-authorized infrastructure and role-based access controls. Data access is governed by your agency’s permissions and applicable federal policy.
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	</div>
</section>

<style>
	.decision-cards {
		border-radius: 9px;
	}
	.usa-hero {
		color: rgb(0, 0, 0);
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
</style>
