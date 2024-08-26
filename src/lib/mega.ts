import type {ModKey} from "$lib/mods-consts";

export type Mod = {
	key: ModKey
	name: string,
	description: string,
	searchStat: string,
	image?: string
}


// Fibonacci is just kinda neat
export type ModWeight = -1 | 1 | 2 | 3 | 5 | 8 | 13

export const MOD_WEIGHTS : ModWeight[] = [-1, 1, 2, 3, 5, 8, 13]

export const DEFAULT_WEIGHT : ModWeight = 5
export const MAX_WEIGHT : ModWeight = 13
