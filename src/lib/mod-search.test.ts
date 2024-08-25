import {expect, test} from 'vitest'
import type {ModKey} from "$lib/mods-consts";
import {searchMods, textToSearch} from "$lib/mod-search";
import {MODS, MODS_LIST} from "$lib/mods";

type SearchTest = {
	search: string,
	includes?: string[]
	excludes?: string[]
	total?: number
}

test('input to search', () => {
	let search = textToSearch('crit multi')
	expect(search).toEqual([
		{
			wanted: true,
			phrase: 'crit',
		},
		{
			wanted: true,
			phrase: 'multi',
		}
	])

	search = textToSearch('-mana')
	expect(search).toEqual([
		{
			wanted: false,
			phrase: 'mana',
		}
	])
})

test('not then a thing', () => {
	const search = textToSearch('-mana crit')
	expect(search.length).toBe(2)
	expect(search).toEqual([
		{
			phrase: 'mana',
			wanted: false
		},
		{
			phrase: 'crit',
			wanted: true,
		}
	])
})


test('weird extra characters', () => {
	const search = textToSearch('fire ! earth -  water')
	expect(search).toEqual([
		{
			phrase: 'fire',
			wanted: true,
		},
		{
			phrase: 'earth',
			wanted: true,
		},
		{
			phrase: 'water',
			wanted: true,
		},
	])
})


test('"ell sup"', () => {
	const search = textToSearch('"ell sup"')
	expect(search).toEqual([
		{
			wanted: true,
			phrase: 'ell sup',
		},
	])
})

const term = `-chaos = ? --- "elemental res" -"imum mana"`
test(term, () => {
	const search = textToSearch(term)
	expect(search).toEqual([
		{
			phrase: 'chaos',
			wanted: false,
		},
		{
			phrase: 'elemental res',
			wanted: true,
		},
		{
			wanted: false,
			phrase: 'imum mana',
		}
	])
})

test('searches', () => {
	const subset = [MODS.adg, MODS.alc, MODS.agd, MODS.asa]

	const tests : SearchTest[] = [
		{
			search: 'adv guard',
			includes: ['Advance Guard'],
			excludes: ['Mystic Bulwark', 'Alchemist'],
			total: 1,
		},
		{
			search: 'advance -guard',
			excludes: ['Advance Guard'],
		},
		{
			search: 'ailment',
			total: 1,
		},
		{
			search: 'ailment -non-damaging',
			total: 0,
		},
		{
			search: '-non-damaging',
			total: 3,
		},
		{
			search: ' ,,, forti - ! (',
			includes: ['Aggressive Defence'],
			total: 1,
		},
	]

	for (const test of tests) {
		const results = searchMods(subset, test.search)
		if (test.total) {
			expect(results.length, `Expected ${test.total} results`).toEqual(test.total)
		}
		if (test.includes) {
			for (const inc of test.includes) {
				const some = results.some(r => r.name === inc)
				expect(some, `Expected to find ${inc}`).toBe(true)
			}
		}
		if (test.excludes) {
			for (const exc of test.excludes) {
				expect(results.some(r => r.name === exc), `Expected to not find ${exc}`).toBe(false)
			}
		}
	}
})

