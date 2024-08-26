<script lang="ts">
	import {DEFAULT_WEIGHT, MAX_WEIGHT} from "$lib/mega.js";
	import {type Mod, MOD_WEIGHTS, type ModWeight} from "$lib/mega";
	import {base} from '$app/paths';
	import cx from 'classnames'
	import {type AppState, getModWeightToggleLink} from "$lib/state";

	export let mod: Mod;
	export let state: AppState
	
	type Button = {
		active: boolean
		href: string
		weight: ModWeight
	}
	
	$: buttons = MOD_WEIGHTS.map((val) : Button => {
		let currentWeight : undefined | ModWeight = state.modWeights.get(mod.key)
		const active = val === currentWeight
		
		return {
			active,
			weight: val,
			href: base + '/?' + getModWeightToggleLink(state, mod.key, val)
		}
	})
</script>
<div class="flex items-center">
	<div class="flex rounded-md shadow-sm" role="group">
		<span class="text-xs me-1 flex items-center pb-1/2">Weight:</span>
		{#each buttons as {href, weight, active}, idx}
			<a href={href} class:active={active} class={cx("px-3 py-1 flex items-center text-xs font-medium focus:z-10 focus:ring-2 border-gray-700", {
				'active': active,
				'excluded': weight === -1,
				'regular': weight > -1,
				'rounded-l-md': idx === 0,
				'rounded-r-md': idx === buttons.length - 1,
			})}>
				{#if weight === -1}
					<svg aria-hidden="true" viewBox="0 0 512 512" width="16" height="16"><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg>
				{:else}
					{weight}
				{/if}
			</a>
		{/each}
	</div>
</div>
<style>
	a {
		@apply bg-gray-700 text-gray-300;
	}
	
	a.regular:hover {
		@apply bg-blue-800 text-gray-200;
	}
	
	a.regular.active {
		@apply bg-blue-600 text-white;
	}
	
	a.excluded:hover {
		@apply bg-red-600;
	}
	
	a.excluded.active {
		@apply bg-red-600;
	}
</style>

