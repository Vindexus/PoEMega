import type {Mod} from "$lib/mega";
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
	const countedMods = mods.filter((mod) => {
		const include = state.modSettings.get(mod.key)?.inclusion
		return include === 'priority' || include === 'included'
	})
	const priorityMods = mods.filter((mod) => state.modSettings.get(mod.key)?.inclusion === 'priority')
	const priorityMinCount = Math.min(3, priorityMods.length)

	const excludedMods = mods.filter((mod) => state.modSettings.get(mod.key)?.inclusion === 'excluded')

	const query : TradeQuery = {
		stats: [
			/*{
				type: 'weight',
				filters: // TODO: Add some weighted searching,
				disabled: false,
				value: {
					min: 1,
				}
			},*/
			// This second block clones all the mods from the weighted sum search, but it
			// groups them just into a "count" query that is disabled
			// This is hear so you can easily swap your search from using weight sums to just going
			// "I want any 2 of these mods" and then selecting them on and off
			{
				type: 'count',
				filters: countedMods.map((mod) =>{
					return {
						disabled: state.modSettings.get(mod.key)?.inclusion !== 'priority',
						id: 'explicit.stat_' + mod.searchStat
					}
				}),
				disabled: priorityMinCount === 0,
				value: {
					min: priorityMinCount,
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
			// 'statgroup.0': 'desc', // This appears to be ignored, so I'm just using price
			price: 'asc',
		},
	})


	const link = url + encodeURIComponent(str)
	return link
}
