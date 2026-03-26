import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { renderToString, Box, Text } from 'ink';
import { TarotCard, type TarotCardProps } from 'ink-playing-cards';
import { getAllCards, getInterpretation } from './data/interpretations.js';

type DailyCache = {date: string; cardIndex: number; reversed: boolean};
const CACHE_DIR = join(homedir(), '.ttarot');
const CACHE_FILE = join(CACHE_DIR, 'daily.json');

function todayString(): string {
	const d = new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function readCache(): DailyCache | undefined {
	try {
		if (!existsSync(CACHE_FILE)) return undefined;
		return JSON.parse(readFileSync(CACHE_FILE, 'utf8')) as DailyCache;
	} catch { return undefined; }
}

function writeCache(cache: DailyCache): void {
	try {
		if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, {recursive: true});
		writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
	} catch { /* cache is optional */ }
}

function seededRandom(seed: string): number {
	let hash = 0;
	for (const ch of seed) { hash = Math.imul(31, hash) + ch.charCodeAt(0); hash |= 0; }
	return Math.abs(hash % 10_000) / 10_000;
}

function getDailyCard(): {cardIndex: number; reversed: boolean} {
	const today = todayString();
	const cached = readCache();
	if (cached?.date === today) return {cardIndex: cached.cardIndex, reversed: cached.reversed};
	const cards = getAllCards();
	const rand = seededRandom(today);
	const cardIndex = Math.floor(rand * cards.length);
	const reversed = seededRandom(today + '-rev') > 0.5;
	writeCache({date: today, cardIndex, reversed});
	return {cardIndex, reversed};
}

function buildTarotProps(entry: ReturnType<typeof getAllCards>[number]): TarotCardProps {
	if (entry.arcana === 'major') {
		return {id: `daily-major-${entry.key}`, arcana: 'major', majorIndex: entry.key} as TarotCardProps;
	}
	const [suit, value] = (entry.key as string).split('-') as [string, string];
	return {id: `daily-minor-${entry.key}`, arcana: 'minor', suit, value} as TarotCardProps;
}

export function printDailyCard(): void {
	const cards = getAllCards();
	const {cardIndex, reversed} = getDailyCard();
	const entry = cards[cardIndex];
	if (!entry) { console.log('Could not draw a daily card.'); return; }
	const interp = getInterpretation(entry.arcana, entry.key);
	if (!interp) { console.log('Could not find interpretation.'); return; }
	const cardProps = buildTarotProps(entry);
	const today = todayString();
	const output = renderToString(
		<Box flexDirection="column">
			<Box><Text color="#f1c40f" bold>🔮 tTarot — Card of the Day</Text></Box>
			<Box marginTop={1} flexDirection="row" gap={2}>
				<TarotCard {...cardProps} faceUp reversed={reversed} />
				<Box flexDirection="column" flexShrink={1}>
					<Text color="#f1c40f" bold>{interp.name}{reversed ? ' ⟳ Reversed' : ''}</Text>
					<Box marginTop={1}><Text wrap="wrap">{reversed ? interp.reversed : interp.upright}</Text></Box>
					<Box marginTop={1} gap={1}>
						{interp.keywords.map((kw: string) => (<Text key={kw} color="cyan" dimColor>#{kw}</Text>))}
					</Box>
				</Box>
			</Box>
			<Box marginTop={1}><Text dimColor>{today} · Run `ttarot` for a full reading</Text></Box>
		</Box>,
	);
	console.log(output);
}
