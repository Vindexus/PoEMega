<script lang="ts">
	import {DEFAULT_WEIGHT, MAX_WEIGHT, type ModInclusion} from "$lib/mega.js";

	export let mod: Mod;
	export let setting: ModSetting
	export let state: AppState

	import {type Mod, MOD_WEIGHTS, type ModSetting, type ModWeight} from "$lib/mega";
	import { base } from '$app/paths';
	import cx from 'classnames'
	import {type AppState, getModInclusionLink} from "$lib/state";
	
	const values = ['Exclude', ...MOD_WEIGHTS, 'Max Weight']
	
	type Button = {
		active: boolean
		label: string | ModWeight
		href: string
	}
	
	$: buttons = values.map((val) : Button => {
		let label = val
		let include : ModInclusion = 'included'
		let weight : ModWeight = DEFAULT_WEIGHT
		
		if (val === 'Exclude') {
			label = 'Exclude'
			include = 'excluded'
		} else if (val === 'Include') {
			label = 'Y'
			include = 'included'
		}
		else if (val === 'Priority') {
			label = 'Priority'
			include = 'priority'
			weight = MAX_WEIGHT
		}
		
		const active = setting.inclusion === include && setting.weight === weight
		return {
			active,
			label,
			href: base + '/?' + getModInclusionLink(state, mod.key, include, weight)
		}
	})
</script>
<div class="flex items-center">
	<div class="inline-flex rounded-md shadow-sm" role="group">
		{#each buttons as {href, active, label}, idx}
			<a href={href} class:active={active} class={cx("px-3 py-1 text-xs font-medium  focus:z-10 focus:ring-2 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white", {
				'rounded-s-lg': idx === 0,
				'rounded-e-lg': idx === buttons.length - 1,
				'bg-red-600 text-white': active && idx === 0,
				'bg-gray-800 text-red-400': !active && idx === 0,
				'bg-gray-800 text-green-400': !active && idx === 1,
				'bg-green-800 text-white': active && idx === 1,
			})}>
				{label}
			</a>
		{/each}
	</div>
	<div class={cx('overflow-hidden transition-[width]', {
		'w-0': true || setting.inclusion === 'excluded' || setting.inclusion === 'ignored',
		
		//'w-[151px]': setting.inclusion === 'included' || setting.inclusion === 'priority',
	})}>
		<div class="inline-flex rounded-md shadow-sm" role="group">
			{#each MOD_WEIGHTS as weight, idx}
				<a href={''} class:active={weight === setting.weight} class={cx("px-3 py-1 text-xs font-medium  focus:z-10 focus:ring-2 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white", {
					'rounded-s-lg': idx === 0,
					'rounded-e-lg': idx === MOD_WEIGHTS.length - 1,
					'bg-gray-800': true,
				})}>
					{weight}
				</a>
			{/each}
		</div>
	</div>
	
</div>


