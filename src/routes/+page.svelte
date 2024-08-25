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
	
	$: numSelectedMods = Array.from(state.modSettings.values()).filter((mod) => mod.inclusion !== 'ignored').length
	$: filteredMods = filterMods(searchInputValue, state)
	$: clearSearch = '/?' + appStateToUSP({
		...state,
		search: ''
	}).toString()
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

<div class="top-0 sticky bg-slate-900">
	<h1 class="text-2xl bold">Megalomaniac Trade Search Tool</h1>
	<form method="GET" action="/" class="relative">
		<input class="outline-none w-full text-gray-800 ps-2 pe-8 py-1" autocomplete="off" spellcheck="false" value={searchInputValue} on:input={inputSearchChanged} type="text" name="search" placeholder="Search" />
		{#if searchInputValue}<a class="absolute right-0 top-0 h-full text-gray-600 px-2 flex items-center" href={clearSearch}>X</a>{/if}
	</form>
	<div class="text-sm text-gray-300 py-2 flex justify-between">
		<div>Showing {filteredMods.length} of {MODS_LIST.length} mods.</div>
		<div>{#if numSelectedMods}{numSelectedMods} mod{#if numSelectedMods !== 1}s{/if} selected{/if}</div>
	</div>
</div>

<div class="">
	{#each filteredMods as mod}
		<div class={"border-2 rounded px-3 py-2 mb-2 " + (mod.inclusion === 'priority' ? 'border-emerald-500 text-white' : 'text-slate-300 border-cyan-900')}>
			<div class="flex justify-between">
				<h3 class={"text-xl font-bold " + (mod.inclusion === 'excluded' ? 'line-through' : '')}>
					{mod.name}
				</h3>
				<div class="toggles">
					<a class={'include ' + getModLinkClass(mod, 'priority')} href={getModLink(state, mod, 'priority')}>Include</a>
					<!--<a href={getModLink(mod, 'ignored')}>ignore</a>-->
					<a class={'exclude ' + getModLinkClass(mod, 'excluded')} href={getModLink(state, mod, 'excluded')}>Exclude</a>
				</div>
			</div>
			<p class={"" + (mod.inclusion === 'excluded' ? 'line-through' : '')}>{@html convertLineBreaks(mod.description)}</p>
		</div>
	{/each}
</div>
<div id="footer" class="fixed bottom-0 left-0 w-full p-3 bg-gray-700 flex justify-center">
	<section class="max-w-2xl w-full">
		{#if numSelectedMods > 0}
			<a href={tradeLink} target="_blank" class="trade-link">Open Trade Link</a>
		{:else}
			<button disabled class="trade-link">Open Trade Link</button>
		{/if}
	</section>
</div>
<style>
.toggles a {
	@apply text-sm inline-block px-2 py-1 rounded text-gray-300;
}

.toggles a.include {
	@apply bg-emerald-950/50;
}

.toggles a.exclude {
	@apply bg-amber-950/50;
}

.toggles a.include.active {
	@apply bg-emerald-500 text-gray-950;
}

.toggles a.exclude.active {
	@apply bg-red-700;
}

.trade-link {
	@apply bg-emerald-500 text-white px-4 py-2 rounded inline-block;
}

button.trade-link {
	@apply bg-emerald-500/25 text-gray-500 cursor-not-allowed;
}

</style>
