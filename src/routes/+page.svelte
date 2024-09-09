<script lang="ts">
	import {onMount} from 'svelte'
	import {base} from '$app/paths';
	import {page} from '$app/stores';
	import {afterNavigate, beforeNavigate, goto} from "$app/navigation";
	import {type AppState, appStateToUSP, getModWeightToggleLink, urlToAppState} from "$lib/state";
	import {browser} from '$app/environment'
	import {MODS_LIST} from "$lib/mods";
	import {getTradeLink} from "$lib/trade";
	import {type Mod} from "$lib/mega";
	import {searchMods, textToSearch} from "$lib/mod-search";
	import ModButtons from "../components/ModButtons.svelte";
	import cx from 'classnames'

	let windowSearch = browser ? window.location.search : ''
	let state = urlToAppState(windowSearch);
	let searchInputValue = state.search
	let urlTimeout: number;
	let searchTimeout: number
	let navigateScrollKey : string = getStateScrollKey(state)
	
	function getStateScrollKey (appState: AppState) {
		return [appState.search, appState.view].join('-')
	}

	function convertLineBreaks (input: string) {
		console.log('searchPieces', searchPieces)
		return '<div>' +  input.split(/\n/g).map((text) => {
			if (searchPieces.length) {
				searchPieces.forEach((piece) => {
					if (piece.wanted) {
						text = text.replace(new RegExp(piece.phrase, 'gi'), (match) => {
							return '<span class="text-yellow-400">' + match + '</span>'
						})
					}
				})
			}
			return text
		}).join('</div><div>') + '</div>'
	}

	let scrollY = 0;

	beforeNavigate(() => {
		scrollY = window.scrollY;
	});

	onMount(() => {
		const searchInput = document.querySelector('input[name="search"]') as HTMLInputElement
		searchInput.focus()
	})
	
	function updateStateFromWindowLocation () {
		windowSearch = browser ? window.location.search : ''
		const newState = urlToAppState(windowSearch)
		state = newState
		searchInputValue = newState.search

		// Clicking on weights should maintain your scroll position, but searching
		// or changing the view should scroll you to the top
		const newScrollKey = getStateScrollKey(newState)
		if (newScrollKey !== navigateScrollKey) {
			window.scrollTo(0, 0)
		}
		else {
			window.scrollTo(0, scrollY);
		}
		navigateScrollKey = newScrollKey
	}

	afterNavigate(() => {
		//updateStateFromCurrentURL()

		updateStateFromWindowLocation()
	})
	
	function filterMods (appState: AppState) : (Mod&{href:string})[] {
		let list
		if (appState.view === 'selected') {
			list = MODS_LIST.filter((mod) => {
				const weight = appState.modWeights.get(mod.key)
				return !!weight
			})
		}
		else {
			list = searchMods(MODS_LIST, appState.search).map((mod) => {
				return mod
			});
		}
		
		return list.map((mod) => {
			const weight = appState.modWeights.get(mod.key)
			const href = base + '/?' + getModWeightToggleLink(state, mod.key, weight || 5)
			return {
				...mod,
				href,
			}
		})
	}
	
	function inputSearchChanged (e: Event) : void {
		clearTimeout(searchTimeout)
		searchTimeout = setTimeout(() => {
			const target = e.target as HTMLInputElement;
			searchInputValue = target.value
			state.search = searchInputValue
			filteredMods = filterMods(state)
			clearTimeout(urlTimeout)
			
			// Only scroll up if there's something in the search box
			// This is because it was annoying to have the screen jump when I
			// did ctrl+a and delete, before typing my new search
			if (searchInputValue.length) {
				window.scrollTo(0, 0)
			}
	
			/**
			 * We use a timeout and debounce here so that their search history
			 * doesn't have every single letter that they've typed
			 * Instead it'll just have the searches that they've finished typing
			 */
			urlTimeout = setTimeout(() => {
				const newState = urlToAppState($page.url.searchParams.toString())
				newState.search = searchInputValue
				//goto('/?' + appStateToUSP(newState))
				//pushState(base + '/?' + appStateToUSP(newState), {})
				goto(base + '/?' + appStateToUSP(newState), {
					// Prevents the page from scrolling to the top. This is intentional because we scroll
					// to the top as soon as we start filtering, and they might scroll a bit in the time
					// it takes for the debounce to run
					noScroll: true,
					keepFocus: true,
				})
			}, 250)
		}, 25)
	}
	
	$: numSelectedMods = Array.from(state.modWeights.values()).filter((weight) => {
		return !!weight
	}).length
	$: filteredMods = filterMods(state)
	$: clearSearchHREF = base + '/?' + appStateToUSP({
		...state,
		search: ''
	}).toString()
	$: toggleViewHREF = base + '/?' + appStateToUSP({
		...state,
		view: state.view === 'selected' ? 'search' : 'selected'
	}).toString()
	$: tradeLink = getTradeLink(MODS_LIST, state);
	$: searchPieces = textToSearch(state.search);
</script>

<svelte:head>
	<title>Megalomaniac Trade Search - Path of Exile Tool</title>
	<meta name="description" content="Find the perfect Megalomaniac for your build." />
</svelte:head>

<div class="top-0 sticky bg-slate-900 z-30">
	<h1 class="text-2xl bold mb-1">Megalomaniac Trade Search Tool</h1>
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
		<div class={cx("border-2 rounded px-3 py-3 mb-4 ", {
			'border-blue-200 text-white bg-slate-800': state.modWeights.has(mod.key),
			'border-gray-800 text-gray-300': !state.modWeights.has(mod.key),
		})}>
			<a href={mod.href} class="select-text grid grid-cols-[1fr_min-content] mb-3">
				<div class="pe-1">
					<h3 class={cx("text-xl font-semibold mb-1 ", {
						'line-through': state.modWeights.get(mod.key) === -1,
					})}>
						{mod.name}
					</h3>
					<p class={cx("flex gap-1.5 flex-col ", {
						'line-through': state.modWeights.get(mod.key) === -1,
					})}>{@html convertLineBreaks(mod.description)}</p>
				</div>
				<div class="relative">
					<div class="absolute bg-center bg-contain z-10 bg-no-repeat w-full h-full top-0 left-0" style={`background-image: url(./notables/frame.png)`} />
					<div class="relative bg-center z-0 bg-no-repeat w-16 h-16 top-0 left-0" style={`background-size: 71% auto; background-image: url(./notables/${mod.image}.png)`} />
				</div>
			</a>
			<ModButtons mod={mod} state={state} />
		</div>
	{/each}
	{#if state.view === 'selected' && numSelectedMods === 0}
		<div class="text-center text-gray-400">No mods selected.</div>
	{/if}
	{#if state.view === 'search' && filteredMods.length === 0}
		<div class="text-center text-gray-400">No mods found.</div>
	{/if}
	{#if state.view === 'selected' && numSelectedMods > 1}
		<a class="text-red-300" href={'/' + base}>Clear All Selections</a>
	{/if}
</div>
<div id="footer" class="fixed bottom-0 z-30 left-0 w-full bg-gray-700 flex justify-center">
	<section class="max-w-2xl w-full py-3 px-2">
		{#if numSelectedMods > 0}
			<a href={tradeLink} target="_blank" class="trade-link">Open Trade Link</a>
		{:else}
			<button disabled class="trade-link">Open Trade Link</button>
		{/if}
	</section>
</div>
<style>
.trade-link {
	@apply bg-emerald-500 text-white px-4 py-2 rounded inline-block;
}

button.trade-link {
	@apply bg-emerald-500/25 text-gray-500 cursor-not-allowed;
}

</style>
