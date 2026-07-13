<script lang="ts">
	import {
		Button,
		OfficialGovBanner,
		Header,
		HeaderLogo,
		HeaderNav,
		HeaderNavBar,
		HeaderNavItem,
		HeaderNavMenu,
		HeaderNavPrimary } from '@gsa-tts/svelte-ui-uswds';

	function handleGetStarted() {
		window.location.href = 'https://gsaext-fpdf-uat.cloud.databricks.com/';
	}
</script>
<svelte:head>
	<OfficialGovBanner />
	<title>Federal Procurement Data Fabric</title>
	<meta name="description" content="Federal Procurement Data Fabric" />
	<Header class="bg-black">
		{#snippet children()}
			<HeaderNavBar>
				<HeaderLogo href="/" title="Federal Procurement Data Fabric">
					{#snippet children()}
						<div class="brand">
							<span class="brand-acronym">FPDF</span>
							<span class="brand-name">Federal<br>Procurement<br>Data Fabric</span>
						</div>
					{/snippet}
				</HeaderLogo>
				<HeaderNavMenu variant="menu" />
			</HeaderNavBar>
			<!-- <HeaderNav>
				<HeaderNavPrimary>
					<HeaderNavItem label="Getting Started" href="javascript:void(0);" />
					<HeaderNavItem label="Learn" href="javascript:void(0);" />
					<HeaderNavItem label="Documentation" href="javascript:void(0);" />
					<HeaderNavItem label="Help" href="javascript:void(0);" />
				</HeaderNavPrimary>
			</HeaderNav> -->
		{/snippet}
	</Header>
</svelte:head>

<main id="main-content">
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
</main>

<style>
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
		max-width: 40rem;
		background-color: transparent;
	}
</style>
