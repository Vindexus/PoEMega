import {expect, test} from 'vitest'
import {appStateToUSP, getModInclusionLink, normalizeAppStateURL, urlToAppState} from "$lib/state";
import type {ModKey} from "$lib/mods-consts";
import {DEFAULT_MOD_SETTING, DEFAULT_WEIGHT, type ModSetting} from "$lib/mega";

type StateToURLTest = {
	search?: string,
	modSettings?: Partial<Record<ModKey, ModSetting>> // Using Record instead of Map cause it's easier to get intellisense
	expected: Record<string, string | null>
}

type URLToStateTest = {
	url: string
	expected: {
		search?: string,
		modSettings?: Partial<Record<ModKey, ModSetting>>
	}
}
test('app state to URLSearchParams', () => {
	const tests : StateToURLTest[] = [
		{
			search: 'crit',
			expected: {
				search: 'crit',
				crit: null,
			}
		},
		{
			search: 'crit',
			modSettings: {
				adr: {
					inclusion: 'excluded',
					weight: 1,
				},
				non: {
					inclusion: 'ignored',
					weight: DEFAULT_WEIGHT,
				}
			},
			expected: {
				search: 'crit',
				crit: null,
				adr: 'n1',
				adn: null,
				non: null,
			}
		},
		{
			modSettings: {
				fas: {
					inclusion: 'priority',
					weight: DEFAULT_WEIGHT,
				},
				wid: {
					inclusion: 'priority',
					weight: 1,
				},
				fet: {
					inclusion: 'included',
					weight: 13,
				},
				dam: {
					inclusion: 'ignored',
					weight: DEFAULT_WEIGHT,
				}
			},
			expected: {
				fas: 'p',
				wid: 'p1',
				fet: 'y13',
				woa: null,
				dam: null,
			}
		}
	]

	let idx = 0;
	for (const test of tests) {
		console.log(`-----`)
		console.log(`[${idx}] AppState: ${JSON.stringify(test)}`)
		const usp = appStateToUSP({
			search: test.search ?? '',
			modSettings: (test.modSettings ? new Map(Object.entries(test.modSettings))  : new Map<ModKey, ModSetting>())  as Map<ModKey, ModSetting>
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
			url: '?search=suppress',
			expected: {
				search: 'suppress',
				modSettings: {
					adr: DEFAULT_MOD_SETTING
				}
			}
		},
		{
			url: '?adr=y88',
			expected: {
				search: '',
				modSettings: {
					adr: {
						inclusion: 'included',
						weight: DEFAULT_WEIGHT,
					},
					pac: {
						inclusion: 'ignored',
						weight: DEFAULT_WEIGHT,
					},
				}
			}
		}
	]

	let idx = 0
	for (const test of tests) {
		console.log(`-----`)
		console.log('test', test)
		console.log(`[${idx}] URL: ${test.url}`)
		const state = urlToAppState(test.url)
		if (test.expected.search) {
			expect(state.search).toBe(test.expected.search)
		}
		else {
			expect(state.search).toBe('')
		}
		for (const [key, setting] of Object.entries(test.expected.modSettings || {})) {
			const actual = state.modSettings.get(key as ModKey)
			if (!actual) {
				throw new Error(`expected ${key} to be in the map`)
			}
			expect(actual).toEqual(setting)
		}
		idx++
	}
})

test('url fixing', () => {
	const tests : string[][] = [
		['?adr=y88', 'adr=y'],
		['?adr=y88&search=hello', 'search=hello&adr=y'],
		['?search=hello&adr=y5', 'search=hello&adr=y'],
		['?adr=n3&utm_source=reddit', 'adr=n3&utm_source=reddit'],
	]

	for (const [input, expected] of tests) {
		expect(normalizeAppStateURL(input).toString()).toBe(expected)
	}
})

test('links', () => {
	const state = urlToAppState('adr=y1')
	const excludeLink = getModInclusionLink(state, 'adr', 'excluded')
	expect(excludeLink).toBe('adr=n1')

	const ignoreLink = getModInclusionLink(state, 'adr', 'ignored')
	expect(ignoreLink).toBe('')

	const includeLink = getModInclusionLink(state, 'adr', 'priority')
	expect(includeLink).toBe('adr=p1')
})
