<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page not found - FPDF</title>
</svelte:head>

<div class="usa-section">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<main id="main-content">
				<div class="usa-prose">
					<h1>Page not found</h1>
					<p class="usa-intro">
						We're sorry, we can't find the page you're looking for. The site administrator may have
						removed it, changed its location, or made it otherwise unavailable.
					</p>
					<p>
						Visit our homepage for helpful tools and resources, or contact us and we'll point you in
						the right direction.
					</p>
					<div class="margin-y-5">
						<ul class="usa-button-group">
							<li class="usa-button-group__item">
								<a href="./" class="usa-button">Visit homepage</a>
							</li>
						</ul>
					</div>
					<p class="text-base"><strong>Error code:</strong> {$page.status}</p>
				</div>
			</main>
		</div>
	</div>
</div>

