import type {ModKey} from "$lib/mods-consts";

export type Mod = {
	key: ModKey
	name: string,
	description: string,
	searchStat: string,
	image?: string
}

/**
 * Determines how a mod is included in the final search query
 * - priority: The mod is included in the COUNT block, as well as the WEIGHTED SUM block
 * - excluded: The mod is in the NOT block
 * - weighted: The mod is included in the WEIGHT SUM block
 */
export type ModInclusion = 'priority' | 'excluded' | 'ignored' | 'included'

// Fibonacci is just kinda neat
export type ModWeight = 1 | 2 | 3 | 5 | 8

export type ModSetting = {
	inclusion: ModInclusion
	weight: ModWeight
}

export type ModItem = Mod & ModSetting

export const MOD_WEIGHTS : ModWeight[] = [1, 2, 3, 5, 8]

export const DEFAULT_WEIGHT : ModWeight = 5
export const MAX_WEIGHT : ModWeight = 8
export const DEFAULT_MOD_SETTING : ModSetting = {
	inclusion: 'ignored',
	weight: DEFAULT_WEIGHT
}
