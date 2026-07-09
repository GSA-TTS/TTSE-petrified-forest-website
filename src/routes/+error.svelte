<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page not found - TTSE Petrified Forest</title>
</svelte:head>

<section class="usa-banner" aria-label="Official website of the United States government">
	<div class="usa-accordion">
		<header class="usa-banner__header">
			<div class="usa-banner__inner">
				<div class="grid-col-auto">
					<img
						aria-hidden="true"
						class="usa-banner__header-flag"
						src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/us_flag_small.png"
						alt=""
					/>
				</div>
				<div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
					<p class="usa-banner__header-text">
						An official website of the United States government
					</p>
					<p class="usa-banner__header-action">Here's how you know</p>
				</div>
				<button
					type="button"
					class="usa-accordion__button usa-banner__button"
					aria-expanded="false"
					aria-controls="gov-banner-default"
				>
					<span class="usa-banner__button-text">Here's how you know</span>
				</button>
			</div>
		</header>
		<div class="usa-banner__content usa-accordion__content" id="gov-banner-default">
			<div class="grid-row grid-gap-lg">
				<div class="usa-banner__guidance tablet:grid-col-6">
					<img
						class="usa-banner__icon usa-media-block__img"
						src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/icon-dot-gov.svg"
						role="img"
						alt=""
						aria-hidden="true"
					/>
					<div class="usa-media-block__body">
						<p>
							<strong>Official websites use .gov</strong><br />
							A <strong>.gov</strong> website belongs to an official government organization in the United
							States.
						</p>
					</div>
				</div>
				<div class="usa-banner__guidance tablet:grid-col-6">
					<img
						class="usa-banner__icon usa-media-block__img"
						src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/icon-https.svg"
						role="img"
						alt=""
						aria-hidden="true"
					/>
					<div class="usa-media-block__body">
						<p>
							<strong>Secure .gov websites use HTTPS</strong><br />
							A <strong>lock</strong> or <strong>https://</strong> means you've safely connected to the
							.gov website. Share sensitive information only on official, secure websites.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="usa-overlay"></div>

<header class="usa-header usa-header--basic">
	<div class="usa-nav-container">
		<div class="usa-navbar">
			<div class="usa-logo">
				<em class="usa-logo__text"><a href="/" title="TTSE Petrified Forest">TTSE Petrified Forest</a></em>
			</div>
		</div>
	</div>
</header>

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
						If you typed the URL directly, check your spelling and capitalization. Our URLs look
						like this: <strong>petrifiedforest.gov/example-one</strong>.
					</p>
					<p>
						Visit our homepage for helpful tools and resources, or contact us and we'll point you in
						the right direction.
					</p>
					<div class="margin-y-5">
						<ul class="usa-button-group">
							<li class="usa-button-group__item">
								<a href="/" class="usa-button">Visit homepage</a>
							</li>
						</ul>
					</div>
					<p class="text-base"><strong>Error code:</strong> {$page.status}</p>
				</div>
			</main>
		</div>
	</div>
</div>

<footer class="usa-footer">
	<div class="grid-container usa-footer__return-to-top">
		<a href="#">Return to top</a>
	</div>
	<div class="usa-footer__secondary-section">
		<div class="grid-container">
			<div class="grid-row grid-gap">
				<div class="usa-footer__contact-links mobile-lg:grid-col-12">
					<p class="usa-footer__contact-heading">TTSE Petrified Forest</p>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
	}
</style>
