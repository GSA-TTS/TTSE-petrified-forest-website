<script>
  import '../styles/global.css'
	import {
		Button,
		OfficialGovBanner,
		Header,
		HeaderLogo,
		HeaderNav,
		HeaderNavBar,
		HeaderNavItem,
		HeaderNavMenu,
		HeaderNavPrimary,
		Identifier,
		IdentifierMasthead,
		IdentifierRequiredLinks,
		IdentifierUSAGov } from '@gsa-tts/svelte-ui-uswds';

	let { children } = $props();

</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/css/uswds.min.css"
	/>
</svelte:head>

<OfficialGovBanner />
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

<main id="main-content">
	{@render children()}
</main>

<Identifier>
	<IdentifierMasthead
		domain="fpdf.gov"
		agencies={[{ name: 'U.S. General Services Administration', href: 'https://www.gsa.gov' }]}
	/>
	<IdentifierRequiredLinks
	    links={[
      { text: 'About GSA', href: 'https://www.gsa.gov/about-gsa', variant: 'external' }
    ]}
	/>
	<IdentifierUSAGov />
</Identifier>
