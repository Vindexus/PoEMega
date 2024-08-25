<script lang="ts">
	import { base } from '$app/paths';
	import {page} from '$app/stores';
	import {afterNavigate, goto, beforeNavigate, pushState } from "$app/navigation";
	import {type AppState, appStateToUSP, getModInclusionLink, urlToAppState} from "$lib/state";
	import { browser } from '$app/environment'
	import {MODS_LIST} from "$lib/mods";
	import {getTradeLink} from "$lib/trade";
	import {DEFAULT_WEIGHT, type Mod, type ModInclusion, type ModItem, type ModWeight} from "$lib/mega";
	import {searchMods} from "$lib/mod-search";
	
	let windowSearch = browser ? window.location.search : ''
	let state = urlToAppState(windowSearch);
	let searchInputValue = state.search
	let urlTimeout: number;

	function convertLineBreaks(input: string) {
		return input.replace(/\n/g, '<br />');
	}

	let scrollY = 0;

	beforeNavigate(() => {
		scrollY = window.scrollY;
	});
	
	function updateStateFromWindowLocation () {
		windowSearch = browser ? window.location.search : ''
		const newState = urlToAppState(windowSearch)
		state = newState
		searchInputValue = newState.search
		
		if (searchInputValue.length && newState.view === 'search') {
			// Focus on the search input
			const searchInput = document.querySelector('input[name="search"]') as HTMLInputElement
			searchInput.focus()
		}
	}

	afterNavigate(() => {
		window.scrollTo(0, scrollY);
		//updateStateFromCurrentURL()

		updateStateFromWindowLocation()
	})

	function modToModItem (mod: Mod, state: AppState) : ModItem {
		const setting = state.modSettings.get(mod.key)!
		return {
			key: mod.key,
			name: mod.name,
			description: mod.description,
			inclusion: setting.inclusion ?? 'ignored',
			weight: setting.weight ?? DEFAULT_WEIGHT,
			
			// TODO: Remove these link properties I think?
			priorityLink: '/?priority',
			excludedLink: '/?excluded',
			type: mod.type,
			searchStat: mod.searchStat,
		}
	}
	
	function filterMods (appState: AppState) : ModItem[] {
		if (appState.view === 'selected') {
			return MODS_LIST.filter((mod) => {
				const setting = appState.modSettings.get(mod.key)!
				return setting.inclusion !== 'ignored'
			}).map((mod) => {
				return modToModItem(mod, appState)
			})
		}
		
		return searchMods(MODS_LIST, appState.search).map((mod) => {
			return modToModItem(mod, appState)
		});
	}
	
	function inputSearchChanged (e: Event) : void {
		const target = e.target as HTMLInputElement;
		searchInputValue = target.value
		state.search = searchInputValue
		filteredMods = filterMods(state)
		clearTimeout(urlTimeout)

		urlTimeout = setTimeout(() => {
			const newState = urlToAppState($page.url.searchParams.toString())
			newState.search = searchInputValue
			//goto('/?' + appStateToUSP(newState))
			//pushState(base + '/?' + appStateToUSP(newState), {})
			goto(base + '/?' + appStateToUSP(newState), {
				noScroll: true,
				keepFocus: true,
			})
		}, 2000)
	}
	
	$: numSelectedMods = Array.from(state.modSettings.values()).filter((mod) => mod.inclusion !== 'ignored').length
	$: filteredMods = filterMods(state)
	$: clearSearchHREF = base + '/?' + appStateToUSP({
		...state,
		search: ''
	}).toString()
	$: toggleViewHREF = base + '/?' + appStateToUSP({
		...state,
		view: state.view === 'selected' ? 'search' : 'selected'
	}).toString()
	$: tradeLink = getTradeLink(MODS_LIST, state)
	const getModLink = (state: AppState, mod: Mod, include: ModInclusion, weight?: ModWeight) : string => {
		const newLink = getModInclusionLink(state, mod.key, include, weight)
		return base + '/?' + newLink
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
		<input disabled={state.view !== 'search'} class={"outline-none w-full text-gray-800 ps-2 pe-8 py-1 " + (state.view === 'selected' ? 'opacity-50' : '')} autocomplete="off" spellcheck="false" value={searchInputValue} on:input={inputSearchChanged} type="text" name="search" placeholder="Search" />
		{#if searchInputValue}<a class="absolute right-0 top-0 h-full text-gray-600 px-2 flex items-center" href={clearSearchHREF}>X</a>{/if}
	</form>
	<div class="text-sm text-gray-300 py-2 flex justify-between">
		<div>
			{#if state.view === 'selected'}
				Showing {#if numSelectedMods}{numSelectedMods} selected mod{#if numSelectedMods !== 1}s{/if}{/if}
				{:else}
				Showing {filteredMods.length} of {MODS_LIST.length} mods.
			{/if}
			</div>
		<div>
			<a class="text-cyan-300 hover:text-cyan-200 cursor-pointer" href={toggleViewHREF}>
				{#if state.view === 'search'}
					View {numSelectedMods} selected mod{#if numSelectedMods !== 1}s{/if}
				{:else}
					View all mods
				{/if}
			</a>
		</div>
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
			<div class={"transition-[height] overflow-hidden flex items-center " + (mod.inclusion === 'included' || mod.inclusion === 'priority' ? /*' h-12'*/'h-0' : 'h-0')}>
				<div class="me-2">Weight:</div>
				<div class="inline-flex rounded-md shadow-sm" role="group">
					<a href={getModLink(state, mod, mod.inclusion, 1)} class="px-3 py-1.5 text-xs font-medium rounded-s-lg focus:z-10 focus:ring-2 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
						1
					</a>
					<a href="#lol" class="px-3 py-1.5 text-xs font-medium r-gray-200 focus:z-10 focus:ring-2 bg-gray-600 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
						2
					</a>
					<a href="#lol" class="px-3 py-1.5 text-xs font-medium rounded-e-lg focus:z-10 focus:ring-2 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
						3
					</a>
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
.toggles a, .toggles a.exclude.active:hover {
	@apply text-sm inline-block px-2 py-1 rounded text-gray-300;
}

.toggles a.include, div.toggles a.include.active:hover {
	@apply bg-emerald-950/50 text-gray-300;
}

.toggles a.exclude, div.toggles a.exclude.active:hover {
	@apply bg-amber-950/50;
}

.toggles a.include.active {
	@apply bg-emerald-500 text-gray-950;
}

.toggles a.include:hover {
	@apply bg-emerald-600 text-gray-950;
}


.toggles a.exclude.active {
	@apply bg-red-700;
}

.toggles a.exclude:hover {
	@apply bg-red-600;
}


.trade-link {
	@apply bg-emerald-500 text-white px-4 py-2 rounded inline-block;
}

button.trade-link {
	@apply bg-emerald-500/25 text-gray-500 cursor-not-allowed;
}

</style>
