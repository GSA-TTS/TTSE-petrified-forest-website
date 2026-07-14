<script>
  import '../styles/global.css'
	import { resolve } from '$app/paths';
	import gsaLogo from '$lib/assets/img/GSA-250-footer-logo.png?url'
	import {
		Link,
		OfficialGovBanner,
		Header,
		HeaderLogo,
		HeaderNav,
		HeaderNavBar,
		HeaderNavItem,
		HeaderNavMenu,
		HeaderNavPrimary,
		Identifier,
		IdentifierLogo,
		IdentifierRequiredLinksItem } from '@gsa-tts/svelte-ui-uswds';

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
			<HeaderLogo href={resolve('/')} title="Federal Procurement Data Fabric">
				{#snippet children()}
					<div class="brand">
						<span class="brand-acronym">FPDF</span>
						<span class="brand-name">Federal<br>Procurement<br>Data Fabric</span>
					</div>
				{/snippet}
			</HeaderLogo>
			<HeaderNavMenu variant="menu" />
		</HeaderNavBar>
		<HeaderNav>
			<HeaderNavPrimary>
				<!-- <HeaderNavItem label="Getting Started" href="javascript:void(0);" />
				<HeaderNavItem label="Learn" href="javascript:void(0);" />
				<HeaderNavItem label="Documentation" href="javascript:void(0);" /> -->
				<HeaderNavItem label="Help" href={resolve('/help')} />
			</HeaderNavPrimary>
		</HeaderNav> -->
	{/snippet}
</Header>

<main id="main-content">
	{@render children()}
</main>

<Identifier domain="fpdf.gov">
  {#snippet logos()}
    <IdentifierLogo
      src={gsaLogo}
      alt="GSA logo"
    />
  {/snippet}
  {#snippet agencyLinks()}
    <Link href="https://www.gsa.gov" variant="external">U.S. General Services Administration</Link>
  {/snippet}
  {#snippet requiredLinks()}
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/about-gsa" variant="external">About GSA</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/website-information/accessibility-statement" variant="external">Accessibility statement</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/reference/freedom-of-information-act-foia" variant="external">FOIA Requests</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/reference/civil-rights-programs/the-no-fear-act" variant="external">No FEAR Act</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsaig.gov/" variant="external">Office of the Inspector General</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/reference/reports" variant="external">Reports</IdentifierRequiredLinksItem>
    <IdentifierRequiredLinksItem href="https://www.gsa.gov/website-information/website-policies#privacy" variant="external">Privacy Policy</IdentifierRequiredLinksItem>
	{/snippet}
</Identifier>
