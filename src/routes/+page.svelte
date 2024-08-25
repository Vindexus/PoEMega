<script lang="ts">
	import {page} from '$app/stores';

	import {afterNavigate, beforeNavigate, pushState } from "$app/navigation";
	import {type AppState, appStateToUSP, getModInclusionLink, urlToAppState} from "$lib/state";
	import {MODS_LIST} from "$lib/mods";
	import {getTradeLink} from "$lib/trade";
	import {DEFAULT_WEIGHT, type Mod, type ModInclusion, type ModItem} from "$lib/mega";
	import {searchMods} from "$lib/mod-search";

	let state = urlToAppState($page.url.searchParams.toString());
	let searchInputValue = state.search
	let urlTimeout: number;
	let includedMods : string[] = []

	function convertLineBreaks(input: string) {
		return input.replace(/\n/g, '<br />');
	}

	let scrollY = 0;

	beforeNavigate(() => {
		scrollY = window.scrollY;
	});

	function updateStateFromCurrentURL () {
		const currentURL = window.location.toString()
		console.log('currentUrl', currentURL)
		const newState = urlToAppState(currentURL)
		state = newState
		searchInputValue = newState.search
	}
	
	window.addEventListener('popstate', () => {
		updateStateFromCurrentURL()
	})
	
	afterNavigate(() => {
		console.log('scroll thing')
		window.scrollTo(0, scrollY);
		updateStateFromCurrentURL()
	})

	function modToModItem (mod: Mod, state: AppState) : ModItem {
		const setting = state.modSettings.get(mod.key)!
		return {
			key: mod.key,
			name: mod.name,
			description: mod.description,
			inclusion: setting.inclusion ?? 'ignored',
			weight: setting.weight ?? DEFAULT_WEIGHT,
			priorityLink: '/?priority',
			excludedLink: '/?excluded',
			type: mod.type,
			searchStat: mod.searchStat,
		}
	}
	
	function filterMods (search: string, appState: AppState) : ModItem[] {
		return searchMods(MODS_LIST, search).map((mod) => {
			return modToModItem(mod, appState)
		});
	}
	
	function inputSearchChanged (e: Event) : void {
		const target = e.target as HTMLInputElement;
		searchInputValue = target.value
		clearTimeout(urlTimeout)

		urlTimeout = setTimeout(() => {
			const newState = urlToAppState($page.url.searchParams.toString())
			newState.search = searchInputValue
			console.log('push state')
			//goto('/?' + appStateToUSP(newState))
			pushState('?' + appStateToUSP(newState), {})
		}, 250)
	}
	
	$: filteredMods = filterMods(searchInputValue, state)
	$: clearSearch = () => {
		if (includedMods.length === 0) {
			return '/'
		}
		const usp = new URLSearchParams()
		for (const key of includedMods) {
			usp.set(key, 'y')
		}
		return '/?' + usp.toString()
	}
	$: tradeLink = getTradeLink(MODS_LIST, state)
	const getModLink = (state: AppState, mod: Mod, include: ModInclusion) : string => {
		const newLink = getModInclusionLink(state, mod.key, include)
		return '/?' + newLink
	}
	
	const getModLinkClass = (mod: ModItem, include: ModInclusion) : string => {
		if (mod.inclusion === include) {
			return 'active'
		}
		return ''
	}
</script>

<svelte:head>
	<title>Megalomaniac Trade Search - Path of Exile Tool</title>
	<meta name="description" content="Find the perfect Megalomaniac for your build." />
</svelte:head>

<h1>Megalomaniac Trade Search Tool</h1>
<p>Search for available Megalomaniac mods. You can set which ones are required, and give them a weight for sorting.</p>

<form method="GET" action="/">
	<div>
		<input autocomplete="off" spellcheck="false" class="search" value={searchInputValue} on:input={inputSearchChanged} type="text" name="search" placeholder="Search for Megalomaniac mods" />
	</div>
	<a href={clearSearch()}>X</a>
</form>
<h2>Showing {filteredMods.length} of {MODS_LIST.length} mods</h2>
<a href={tradeLink} target="_blank" class="trade">Open Trade Link</a>
<div>
	{#each filteredMods as mod}
		<div>
			<h3>
				{mod.name}
				<em>{mod.inclusion}</em>
				<a class={getModLinkClass(mod, 'priority')} href={getModLink(state, mod, 'priority')}>priority</a>
				<!--<a href={getModLink(mod, 'ignored')}>ignore</a>-->
				<a class={getModLinkClass(mod, 'excluded')} href={getModLink(state, mod, 'excluded')}>exclude</a>
			</h3>
			<p>{@html convertLineBreaks(mod.description)}</p>
		</div>
	{/each}
</div>
<div id="footer">
	<section>
		<a href={tradeLink} target="_blank" class="trade">Open Trade Link</a>
	</section>
</div>

<style>
a, a:visited {
	font-weight: normal;
	padding: 0.25em;
	background: #333333;
	color: #eee;
}

a.active {
	background: forestgreen;
}
</style>
