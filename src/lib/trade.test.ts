import {expect, test} from 'vitest'
import {getTradeQuery} from "$lib/trade";
import {urlToAppState} from "$lib/state";
import {MODS_LIST} from "$lib/mods";

type URLToTradeQueryTest = {
	url: string
	expected: {
		numCount?: number
		numCountDisabled?: number
		numCountEnabled?: number
		numNot?: number
		countMin?: number
	}
}

const tests : URLToTradeQueryTest[] = [
	{
		url: 'adr=2&wid=5',
		expected: {
			numCount: 2,
			numCountDisabled: 2,
			numCountEnabled: 0,
		}
	},
	{
		url: 'adr=-1&wid=2',
		expected: {
			numNot: 1,
			numCountEnabled: 0,
			numCount: 1,
			numCountDisabled: 1,
		}
	},
	{
		// NOTE: pic is not a valid mod key
		url: 'tts=-1pic=-1&adr=-1&wid=8&fet=1&dam=8',
		expected: {
			numNot: 2,
			numCountEnabled: 0,
			numCount: 3,
			numCountDisabled: 3,
			countMin: 1,
		}
	},
]
for (const t of tests) {
	test('urls to trade queries:' + t.url, () => {

		const state = urlToAppState(t.url)
		console.log('url', t.url)
		const tq = getTradeQuery(MODS_LIST, state)
		const countStat = tq.stats.find(x => x.type === 'count')!
		const countFilters = countStat.filters

		const notStat = tq.stats.find(x => x.type === 'not')!

		if (t.expected.countMin) {
			expect(countStat.value!.min).toEqual(t.expected.countMin)
		}

		if (t.expected.numCount) {
			expect(countFilters.length, `Expected to find ${t.expected.numCount} mods in the COUNT state`).toEqual(t.expected.numCount)
		}
		if (t.expected.numCountDisabled) {
			expect(countFilters.filter((f) => f.disabled).length, `Expected to find ${t.expected.numCountDisabled} mods in the COUNT state that are disabled`).toEqual(t.expected.numCountDisabled)
		}
		if (t.expected.numCountEnabled) {
			expect(countFilters.filter((f) => !f.disabled).length, `Expected to find ${t.expected.numCountDisabled} mods in the COUNT state that are enabled`).toEqual(t.expected.numCountEnabled)
		}
		if (t.expected.numNot) {
			expect(notStat.disabled).toBe(false)
			expect(notStat.filters.length, `Expected to find ${t.expected.numNot} mods in the NOT`).toEqual(t.expected.numNot)
			expect(notStat.filters.every(x => !x.disabled)).toBe(true)
		}
	})
}

