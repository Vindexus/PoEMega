import type {ModKey} from "$lib/mods-consts";
import {
	DEFAULT_MOD_SETTING,
	DEFAULT_WEIGHT,
	type Mod, MOD_WEIGHTS,
	type ModInclusion,
	type ModSetting,
	type ModWeight
} from "$lib/mega";
import {MODS_LIST} from "$lib/mods";

export type ModsSettings = Map<ModKey, ModSetting>

export type AppState = {
	search: string
	modSettings: ModsSettings
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
	Array.from(state.modSettings.entries())
		.sort(([a], [b]) => {
			return a < b ? -1 : 1
		})
		.forEach(([key, setting]) => {
			const val = modSettingToStr(setting)
			if (val) {
				usp.set(key, val)
			}
		})

	return usp
}

function numberToWeight (num: number | string) : ModWeight {
	const n = parseInt(num as string)
	if (MOD_WEIGHTS.includes(n as ModWeight)) {
		return n as ModWeight
	}
	return DEFAULT_WEIGHT
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
		modSettings: new Map<ModKey, ModSetting>(),
		view: usp.get('view') === 'selected' ? 'selected' : 'search',
	}

	MODS_LIST.forEach((mod: Mod) => {
		if (usp.has(mod.key)) {
			state.modSettings.set(mod.key as ModKey, strToModSetting(usp.get(mod.key) as string))
		}
		else {
			state.modSettings.set(mod.key as ModKey, DEFAULT_MOD_SETTING)
		}
	})

	return state
}

function modSettingToStr (setting: ModSetting) : string {
	if (setting.inclusion === 'ignored' && setting.weight === DEFAULT_WEIGHT) {
		return ''
	}
	let str = modInclusionToLetter(setting.inclusion)
	if (setting.weight != DEFAULT_WEIGHT) {
		str += setting.weight
	}
	return str
}

function strToModSetting (str: string) : ModSetting {
	if (!str) {
		return DEFAULT_MOD_SETTING
	}
	const letter= str.slice(0, 1)
	const weightStr = str.slice(1)
	return {
		inclusion: letterToModInclusion(letter),
		weight: numberToWeight(weightStr)
	}
}

function letterToModInclusion (letter: string) : ModInclusion {
	switch (letter) {
		case 'p':
			return 'priority'
		case 'n':
			return 'excluded'
		case 'y':
			return 'included'
		default:
			return 'ignored'
	}
}

function modInclusionToLetter (inclusion: ModInclusion) : string {
	switch (inclusion) {
		case 'priority':
			return 'p'
		case 'excluded':
			return 'n'
		case 'included':
			return 'y'
		default:
			return ''
	}
}

/**
 * This gives you the URL for a specific inclusion
 * If that inclusion is already in the app state, this will toggle it
 * Thus, the final URL is dependent on the state
 */
export function getModInclusionLink (state: AppState, modKey: ModKey, inclusion: ModInclusion) {
	const url = appStateToUSP(state)
	const setting = state.modSettings.get(modKey)!

	// This generates the URL for the "Ignore" button
	if (inclusion === 'ignored') {
		// If it isn't ignored, then we ignore it
		if (setting.inclusion !== 'ignored') {
			url.delete(modKey)
		}
		else {
			url.set(modKey, modSettingToStr({
				weight: setting.weight,
				inclusion: "included"
			}))
		}
	}
	else if (setting.inclusion === inclusion) {
		if (setting.weight === DEFAULT_WEIGHT) {
			url.delete(modKey)
		}
		else {
			url.set(modKey, modSettingToStr({
				weight: DEFAULT_WEIGHT,
				inclusion
			}))
		}
	}
	else {
		url.set(modKey, modSettingToStr({
			weight: setting.weight,
			inclusion
		}))
	}
	return url.toString()
}
