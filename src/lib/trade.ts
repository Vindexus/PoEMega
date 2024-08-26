import {MAX_WEIGHT, type Mod} from "$lib/mega";
import type {AppState} from "$lib/state";

type TradeFilter = {
	id: string
	disabled: boolean
	value?: {
		weight?: number
		min?: number
		max?: number
	}
}

type TradeStat = {
	type: 'count' | 'weight' | 'and' | 'not'
	disabled: boolean,
	filters: TradeFilter[]
	value?: {
		min: number,
		max?: number
	}
}

export type TradeQuery = {
	status: {
		option: 'online' | 'any'
	},
	stats: TradeStat[],
}

export function getTradeQuery (mods: Mod[], state: AppState): TradeQuery {
	// All non-excluded mods get put into the COUNT filter, but only the max ones will be enabled
	// This is for easily toggling them on/off on the trade site
	const countedMods = mods.filter((mod) => {
		const weight = state.modWeights.get(mod.key)
		return weight !== undefined && weight !== -1
	})

	const excludedMods = mods.filter((mod) => {
		const weight = state.modWeights.get(mod.key)
		return weight === -1
	})

	const summedMods = mods.filter((mod) => {
		const weight = state.modWeights.get(mod.key)
		return !!weight && weight > 0
	})

	const query : TradeQuery = {
		stats: [
			{
				type: 'weight',
				filters: summedMods.map((mod) =>{
					return {
						disabled: false,
						id: 'explicit.stat_' + mod.searchStat,
						value: {
							weight: state.modWeights.get(mod.key)! as number
						}
					}
				}),
				disabled: false,
				value: {
					min: 1,
				}
			},
			// Your high priority mods are put into their own group so they don't just affect
			// the sum weighting, they become requirements
			{
				type: 'count',
				filters: countedMods.map((mod) =>{
					return {
						disabled: state.modWeights.get(mod.key) !== MAX_WEIGHT,
						id: 'explicit.stat_' + mod.searchStat
					}
				}),
				disabled: false,
				value: {
					min: 1,
				}
			},
			{
				type: 'not',
				disabled: excludedMods.length === 0,
				filters: excludedMods.map((mod) =>{
					return {
						disabled: false,
						id: 'explicit.stat_' + mod.searchStat
					}
				}),
			},
			{
				filters: [
					{
						id: "explicit.stat_3086156145",
						value: {
							min: 4,
							max: 4
						},
						disabled: false
					}
				],
				disabled: false,
				type: "and"
			}
		],
		status: {
			option: 'online',
		},
	}
	return query

}

export function getTradeLink (mods: Mod[], state: AppState) : string {
	const url = `https://pathofexile.com/trade/search?q=`
	const query = getTradeQuery(mods, state)
	const str = JSON.stringify({
		query: {
			...query,
			filters: {
				"type_filters": {
					"filters": {
						"category": {
							"option": "jewel.cluster"
						},
						"rarity": {
							"option": "unique"
						}
					}
				}
			}
		},
		sort: {
			'statgroup.0': 'desc', // This appears to be ignored, so maybe just use price
			//price: 'asc',
		},
	})


	const link = url + encodeURIComponent(str)
	return link
}
