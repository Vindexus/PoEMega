import {expect, test} from 'vitest'
import {appStateToUSP, getMetaFromState, getModWeightToggleLink, normalizeAppStateURL, urlToAppState} from "$lib/state";
import type {ModKey} from "$lib/mods-consts";
import {type ModWeight} from "$lib/mega";

type StateToURLTest = {
	view?: 'search' | 'selected',
	search?: string,
	modWeights?: Partial<Record<ModKey, ModWeight|null>> // Using Record instead of Map cause it's easier to get intellisense
	expected: Record<string, string | null>
}

type URLToStateTest = {
	url: string
	expected: {
		search?: string,
		modWeights?: Partial<Record<ModKey, ModWeight|null>>
		documentTitle?: string
	}
}
test('app state to URLSearchParams', () => {
	const tests : StateToURLTest[] = [
		{
			search: 'crit',
			expected: {
				search: 'crit',
				adr: null,
				view: null,
			}
		},
		{
			search: 'crit',
			modWeights: {
				adr: 1,
				non: null,
				pac: -1,
			},
			expected: {
				search: 'crit',
				adr: '1',
				pac: '-1',
				adn: null,
				non: null,
				view: null,
			}
		},
		{
			view: 'selected',
			modWeights: {
				fas: 8,
				wid: null,
				fet: -1,
				dam: 1,
			},
			expected: {
				fas: '8',
				wid: null,
				fet: '-1',
				woa: null,
				dam: '1',
				view: 'selected',
			}
		}
	]

	let idx = 0;
	for (const test of tests) {
		console.log(`-----`)
		console.log(`[${idx}] AppState: ${JSON.stringify(test)}`)
		const usp = appStateToUSP({
			search: test.search ?? '',
			view: test.view ?? 'search',
			modWeights: (test.modWeights ? new Map(Object.entries(test.modWeights))  : new Map<ModKey, ModWeight>())  as Map<ModKey, ModWeight>
		})
		for (const [key, val] of Object.entries(test.expected)) {
			if (val === null) {
				if (usp.has(key)) {
					throw new Error(`expected ${key} to not be in the URL`)
				}
			}
			else {
				expect(usp.get(key), `expected ${key} to be ${val} but it was ${usp.get(key)}`).toBe(val)
			}
		}
		console.log(`[${idx}] USP: ?${usp}`)
		idx++
	}
})

test('URL to AppState', () => {
	const tests: URLToStateTest[] = [
		{
			url: 'tts=-1&adr=-1&wid=8&fet=1&dam=8',
			expected: {
				documentTitle: 'Widespread Destruction, Darting Movements, and Fettle',
				modWeights: {
					tts: -1,
					adr: -1,
					wid: 8,
					fet: 1,
					dam: 8,
				}
			}
		},
		{
			url: '?search=suppress',
			expected: {
				search: 'suppress',
				modWeights: {
					adr: undefined
				}
			}
		},
		{
			url: '?adr=8',
			expected: {
				search: '',
				modWeights: {
					adr: 8,
					pac: undefined,
				}
			}
		},
		{
			url: '?adr=YES',
			expected: {
				modWeights: {
					adr: undefined,
				}
			}
		}
	]

	for (const test of tests) {
		const state = urlToAppState(test.url)
		if (test.expected.search) {
			expect(state.search).toBe(test.expected.search)
		}
		else {
			expect(state.search).toBe('')
		}
		if (test.expected.documentTitle) {
			const {title} = getMetaFromState(state)
			expect(title).toContain(test.expected.documentTitle)
		}
		for (const [key, setting] of Object.entries(test.expected.modWeights || {})) {
			const actual = state.modWeights.get(key as ModKey)
			expect(actual).toEqual(setting)
		}
	}
})


test('url fixing', () => {
	const tests : string[][] = [
		['?adr=y88', ''],
		['?adr=-10&search=hello', 'search=hello'],
		['?adr=8&search=hello', 'search=hello&adr=8'],
		['?adr=3&utm_source=reddit', 'adr=3&utm_source=reddit'],
	]
	for (const [input, expected] of tests) {
		expect(normalizeAppStateURL(input).toString()).toBe(expected)
	}
})

test('links', () => {
	let state = urlToAppState('adr=1')
	let excludeLink = getModWeightToggleLink(state, 'adr', 1)
	expect(excludeLink).toBe('')

	state = urlToAppState('adr=1')
	excludeLink = getModWeightToggleLink(state, 'adr', 2)
	expect(excludeLink).toBe('adr=2')

	state = urlToAppState('adr=1')
	excludeLink = getModWeightToggleLink(state, 'adr', null)
	expect(excludeLink).toBe('')

	state = urlToAppState('adr=1&pac=8')
	excludeLink = getModWeightToggleLink(state, 'pac', 8)
	expect(excludeLink).toBe('adr=1')

	state = urlToAppState('adr=1&pac=-1')
	excludeLink = getModWeightToggleLink(state, 'pac', 8)
	expect(excludeLink).toBe('adr=1&pac=8')

	state = urlToAppState('adr=1&pac=-1')
	excludeLink = getModWeightToggleLink(state, 'adr', -1)
	expect(excludeLink).toBe('adr=-1&pac=-1')
})
