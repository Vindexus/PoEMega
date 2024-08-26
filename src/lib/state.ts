import type {ModKey} from "$lib/mods-consts";
import {DEFAULT_WEIGHT, MOD_WEIGHTS, type ModWeight} from "$lib/mega";
import {MODS} from "$lib/mods";

export type ModsSettings = Map<ModKey, ModWeight>

export type AppState = {
	search: string
	modWeights: ModsSettings
	view: 'search' | 'selected'
}

export function normalizeAppStateURL (url: string) : URLSearchParams {
	const state = urlToAppState(url)
	const stateUSP = appStateToUSP(state)
	const originalUSP = strToUSP(url)
	for (const key of originalUSP.keys()) {
		if (key.startsWith('utm')) {
			stateUSP.set(key, originalUSP.get(key) as string)
		}
	}

	return stateUSP
}

export function appStateToUSP (state: AppState): URLSearchParams {
	const usp = new URLSearchParams()
	if (state.search) {
		usp.set('search', state.search)
	}
	if (state.view === 'selected') {
		usp.set('view', 'selected')
	}
	Array.from(state.modWeights.entries())
		.sort(([a], [b]) => {
			return a < b ? -1 : 1
		})
		.forEach(([key, val]) => {
			if (val !== null) {
				usp.set(key, `${val}`)
			}
		})

	return usp
}

function numberToWeight (num: number | string) : ModWeight {
	const n = parseInt(num as string)
	if (MOD_WEIGHTS.includes(n as ModWeight)) {
		return n as ModWeight
	}
	return null
}

function strToUSP (urlS: string) : URLSearchParams {
	let queryParams = ''
	if (urlS.startsWith('http')) {
		queryParams = new URL(urlS).search
	}
	else {
		queryParams = urlS.replace(/^\?/, '')
	}
	return new URLSearchParams(queryParams)
}

export function urlToAppState (urlS: string) : AppState {
	const usp = strToUSP(urlS)
	const state : AppState = {
		search: usp.get('search') ?? '',
		modWeights: new Map<ModKey, ModWeight>(),
		view: usp.get('view') === 'selected' ? 'selected' : 'search',
	}

	for (const [key, val] of usp.entries()) {
		if (MODS[key as ModKey]) {
			const weight = numberToWeight(val)
			if (weight !== null) {
				state.modWeights.set(key as ModKey, weight)
			}
		}
	}

	return state
}


/**
 * This gives you the URL for a specific inclusion
 * If that inclusion is already in the app state, this will toggle it
 * Thus, the final URL is dependent on the state
 */
export function getModWeightToggleLink (state: AppState, modKey: ModKey, newWeight: ModWeight) {
	const url = appStateToUSP(state)
	if (newWeight === null || url.get(modKey) === `${newWeight}`) {
		url.delete(modKey)
	}
	else if (newWeight !== null) {
		url.set(modKey, `${newWeight}`)
	}
	return url.toString()
}
