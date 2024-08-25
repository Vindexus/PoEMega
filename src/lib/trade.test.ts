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
	}
}

test('urls to trade queries', () => {
	const tests : URLToTradeQueryTest[] = [
		{
			url: 'adr=p&wid=y',
			expected: {
				numCount: 2,
				numCountDisabled: 1,
				numCountEnabled: 1,
			}
		},
		{
			url: 'adr=n&wid=p',
			expected: {
				numNot: 1,
			}
		}
	]
	for (const t of tests) {
		const state = urlToAppState(t.url)
		console.log('state', {
			adr: state.modSettings.get('adr'),
			wid: state.modSettings.get('wid'),
		})
		const tq = getTradeQuery(MODS_LIST, state)
		if (t.expected.numCount) {
			expect(tq.stats[0].filters.length, `Expected to find ${t.expected.numCount} mods in the COUNT state`).toEqual(t.expected.numCount)
		}
		if (t.expected.numCountDisabled) {
			expect(tq.stats[0].filters.filter((f) => f.disabled).length, `Expected to find ${t.expected.numCountDisabled} mods in the COUNT state that are disabled`).toEqual(t.expected.numCountDisabled)
		}
		if (t.expected.numCountEnabled) {
			expect(tq.stats[0].filters.filter((f) => !f.disabled).length, `Expected to find ${t.expected.numCountDisabled} mods in the COUNT state that are enabled`).toEqual(t.expected.numCountEnabled)
		}
		if (t.expected.numNot) {
			expect(tq.stats[1].disabled).toBe(false)
			expect(tq.stats[1].filters.length, `Expected to find ${t.expected.numNot} mods in the NOT`).toEqual(t.expected.numNot)
			expect(tq.stats[1].filters.every(x => !x.disabled)).toBe(true)
		}
	}
})
