import {type ModKey, SRC_MODS, SRC_MODS_LIST} from "$lib/mods-consts";
import type {Mod} from "$lib/mega";

export const MODS = SRC_MODS as Record<ModKey, Mod>
export const MODS_LIST = SRC_MODS_LIST as Mod[]
