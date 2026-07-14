<script lang="ts">
	import { Card, CardGroup, Accordion, AccordionItem } from '@gsa-tts/svelte-ui-uswds';

</script>

<svelte:head>
	<title>FPDF - Help</title>
	<meta name="description" content="FPDF - Help" />
</svelte:head>

<section id="title-section-id" class="usa-section padding-bottom-0" aria-label="Title">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8 usa-prose">
        <h1>Help</h1>
        <h2>Frequently Asked Questions (FAQs)</h2>
      </div>
			<div class="tablet:grid-col-4 usa-prose">
        <CardGroup class="tablet-lg:grid-col">
          <Card class="tablet-lg:grid-col-4">
            {#snippet header()}
              Email us
            {/snippet}
            {#snippet body()}
              <p>
                Have a question not covered in the FAQs? Reach out to our team.
              </p>
            {/snippet}
          </Card>
        </CardGroup>
      </div>
    </div>
  </div>

</section>
<section id="faq-section-id" class="usa-section padding-top-0" aria-label="FAQ">
	<div class="grid-container">
		<div class="grid-row grid-gap">
      <div class="tablet:grid-col-8 usa-prose">
				<Accordion bordered multiselectable>
					<AccordionItem id="access" title="Who can access FPDF?" expanded>
						FPDF is available to federal employees with a valid Login.gov account. Access levels may vary by agency and role. Contract your agency’s FPDF point of contact to learn more about access permissions.
					</AccordionItem>
					<AccordionItem id="datasets" title="What datasets are included in FPDF?" expanded>
						FPDF consolidates procurement-related data from across the federal government, including contract awards, vendor information, spending history, and more. The platform continues to expand as additional data sources are integrated.
					</AccordionItem>
					<AccordionItem id="tech-skills" title="Do I need technical skills to use FPDF?" expanded>
						No. FPDF is designed for users at all technical levels. The AI-powered interface allows you to ask questions in plain language, and the dashboard builder requires no coding. However, advanced users can access more powerful query tools.
					</AccordionItem>
					<AccordionItem id="secure" title="Is my agency’s data secure?" expanded>
						Yes. FPDF is built on federal security standards, including FedRAMP-authorized infrastructure and role-based access controls. Data access is governed by your agency’s permissions and applicable federal policy.
					</AccordionItem>
					<AccordionItem id="different" title="How is FPDF different from existing procurement tools like USAspending.gov or FPDS?" expanded>
						FDPF connects those systems. Rather than navigating multiple platforms, FPDF gives you a unified interface to query, compare, and analyze data across sources in one place.
					</AccordionItem>
					<AccordionItem id="current-data" title="How current is the data?" expanded>
						FPDF uses live data pipelines connected directly to federal procurement data sources, so information is updated regularly. Refresh rates vary by dataset.
					</AccordionItem>
					<AccordionItem id="aligned-omb" title="Is this aligned with OMB policy?" expanded>
						Yes. FPDF was built to operationalize the High-Definition Government Initiative under OMB Circular A-137, which directs agencies to improve data visibility and decision-making through better data infrastructure.
					</AccordionItem>
				</Accordion>
			</div>


		</div>
	</div>
</section>
