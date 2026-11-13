import type {Mod} from "$lib/mega";

type Search = {
	phrase: string
	wanted: boolean
}

function startsWithNot (input: string) : boolean {
	return input.startsWith('-') || input.startsWith('!')
}

const extractPhrases = (input: string) : string[] => {
	// Regular expression to match words and quoted phrases
	const regex = /([!-])?"([^"]+)"|(\S+)/g;
	const matches = [];
	let match;

	// Extract all matches
	while ((match = regex.exec(input)) !== null) {
		let matched = match[2] || match[3];
		if (matched) {

			// This is here so that `-"some phrase"` returns `-some phrase`
			if (!startsWithNot(matched) && match[1] === '-') {
				matched = '-' + matched
			}
			matches.push(matched);
		}
	}

	return matches;
};

export function textToSearch (input: string) : Search[] {
	const extracted = extractPhrases((input||'').trim().toLowerCase())
	const phrases = extracted.filter((phrase) => {
		const match = !!phrase.match(/[a-zA-Z0-9]{1,}/)
		return phrase.length > 0 && match
	})

	const searches = phrases.map((phrase: string) : Search => {
		// Remove the "s
		phrase = phrase.replace(/"/g, '')

		if (phrase.startsWith('-') || phrase.startsWith('!')) {
			return {
				phrase: phrase.slice(1),
				wanted: false,
			}
		}

		return {
			phrase: phrase,
			wanted: true,
		}
	})

	return searches
}

export function searchMods (mods: Mod[], search: string) {
	const searches = textToSearch(search)

	return mods.filter(mod => {
		for (const search of searches) {
			const inName = mod.name.toLowerCase().includes(search.phrase)
			const inDesc = mod.description.toLowerCase().includes(search.phrase)
			const found =  inName || inDesc
			if (found !== search.wanted) {
				return false
			}
		}

		return true
	})
}

function escapeRegExp (input: string) : string {
	return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeHtml (input: string) : string {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
}

// Returns HTML-safe markup: `text` escaped, with every case-insensitive match
// of any phrase wrapped in a highlight span.
// All phrases go into ONE regex so a single pass can never match inside
// markup it has already inserted (e.g. the "a" in `class="..."`).
export function highlightText (text: string, phrases: string[]) : string {
	const usable = phrases.filter((phrase) => phrase.length > 0)
	if (!usable.length) {
		return escapeHtml(text)
	}

	// Longest first so "attack speed" wins over "attack" at the same position
	const pattern = [...usable]
		.sort((a, b) => b.length - a.length)
		.map(escapeRegExp)
		.join('|')
	const regex = new RegExp(pattern, 'gi')

	let result = ''
	let lastIndex = 0
	for (const match of text.matchAll(regex)) {
		const index = match.index!
		result += escapeHtml(text.slice(lastIndex, index))
		result += '<span class="text-yellow-400">' + escapeHtml(match[0]) + '</span>'
		lastIndex = index + match[0].length
	}
	result += escapeHtml(text.slice(lastIndex))
	return result
}
