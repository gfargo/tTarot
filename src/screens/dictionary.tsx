import { useState, useMemo } from 'react';
import { Box, Text, useInput } from 'ink';
import {
    TarotCard,
    type MajorArcanaIndex,
    type TarotMinorValue,
} from 'ink-playing-cards';
import {
    getAllCards,
    type CardInterpretation,
} from '../data/interpretations.js';
import { useViewportHeight } from '../components/viewport.js';

type DictionaryEntry = {
	arcana: 'major' | 'minor';
	key: string | number;
	interpretation: CardInterpretation;
};

type Filter = 'all' | 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

const FILTERS: Filter[] = [
	'all',
	'major',
	'wands',
	'cups',
	'swords',
	'pentacles',
];
const FILTER_LABELS: Record<Filter, string> = {
	all: 'All (78)',
	major: 'Major (22)',
	wands: '🜂 Wands',
	cups: '☽ Cups',
	swords: '⚔ Swords',
	pentacles: '⛤ Pentacles',
};

type DictionaryProps = {
	onBack: () => void;
};

export default function Dictionary({onBack}: DictionaryProps) {
	const viewportHeight = useViewportHeight();
	const allCards = useMemo(() => getAllCards(), []);
	const [filterIndex, setFilterIndex] = useState(0);
	const [selected, setSelected] = useState(0);
	const [showReversed, setShowReversed] = useState(false);

	const filter = FILTERS[filterIndex]!;

	const filtered = useMemo(() => {
		if (filter === 'all') return allCards;
		if (filter === 'major')
			return allCards.filter(c => c.arcana === 'major');
		return allCards.filter(
			c =>
				c.arcana === 'minor' &&
				typeof c.key === 'string' &&
				c.key.startsWith(filter),
		);
	}, [filter, allCards]);

	// Clamp selection when filter changes
	const safeSelected = Math.min(selected, Math.max(0, filtered.length - 1));
	const current = filtered[safeSelected];

	// Panel fills the viewport minus filter tabs (2) and footer (2)
	const panelHeight = Math.max(10, viewportHeight - 4);

	// The visible item slots are fixed — scroll indicators always take 1 line each
	// so the list content area is always panelHeight - 2 (top indicator + bottom indicator)
	const itemSlots = panelHeight - 2;

	// Calculate visible window
	const halfWindow = Math.floor(itemSlots / 2);
	let windowStart = safeSelected - halfWindow;
	if (windowStart < 0) windowStart = 0;
	if (windowStart + itemSlots > filtered.length) {
		windowStart = Math.max(0, filtered.length - itemSlots);
	}

	const windowEnd = Math.min(windowStart + itemSlots, filtered.length);
	const visibleItems = filtered.slice(windowStart, windowEnd);

	// Pad to fixed height so the panel never changes size
	const emptySlots = itemSlots - visibleItems.length;

	useInput((input, key) => {
		if (key.escape) {
			onBack();
			return;
		}

		if (key.upArrow) {
			setSelected(i => (i > 0 ? i - 1 : filtered.length - 1));
		} else if (key.downArrow) {
			setSelected(i => (i < filtered.length - 1 ? i + 1 : 0));
		} else if (key.leftArrow) {
			setFilterIndex(i => (i > 0 ? i - 1 : FILTERS.length - 1));
			setSelected(0);
		} else if (key.rightArrow) {
			setFilterIndex(i => (i < FILTERS.length - 1 ? i + 1 : 0));
			setSelected(0);
		} else if (input === 'r') {
			setShowReversed(v => !v);
		} else if (key.pageDown) {
			setSelected(i =>
				Math.min(i + itemSlots, filtered.length - 1),
			);
		} else if (key.pageUp) {
			setSelected(i => Math.max(i - itemSlots, 0));
		}
	});

	const cardProps = current ? buildCardProps(current) : undefined;

	// Scrollbar indicator
	const scrollPercent =
		filtered.length <= itemSlots
			? -1
			: safeSelected / (filtered.length - 1);

	return (
		<Box flexDirection="column" padding={1} flexGrow={1}>
			{/* Filter tabs */}
			<Box gap={1}>
				{FILTERS.map((f, i) => {
					const isActive = i === filterIndex;
					return (
						<Box key={f}>
							<Text
								color={isActive ? '#f1c40f' : 'gray'}
								bold={isActive}
								inverse={isActive}
							>
								{' '}
								{FILTER_LABELS[f]}{' '}
							</Text>
						</Box>
					);
				})}
			</Box>

			<Box marginTop={1} flexDirection="row" gap={1} flexGrow={1}>
				{/* Card list panel */}
				<Box
					flexDirection="column"
					width={30}
					flexGrow={1}
					borderStyle="round"
					borderColor="#9b59b6"
					overflowY="hidden"
				>
					{/* Scroll-up indicator (always present for consistent height) */}
					<Box justifyContent="center" height={1}>
						{windowStart > 0 ? (
							<Text dimColor>▲ {windowStart} more</Text>
						) : (
							<Text> </Text>
						)}
					</Box>

					{visibleItems.map((entry, vi) => {
						const actualIndex = windowStart + vi;
						const isSel = actualIndex === safeSelected;
						return (
							<Box
								key={`${String(entry.arcana)}-${String(entry.key)}`}
								height={1}
							>
								<Text
									color={isSel ? '#f1c40f' : 'white'}
									bold={isSel}
									inverse={isSel}
									wrap="truncate-end"
								>
									{isSel ? ' ▸ ' : '   '}
									{entry.interpretation.name}
								</Text>
							</Box>
						);
					})}

					{/* Empty padding rows to keep height fixed */}
					{Array.from({length: emptySlots}).map((_, i) => (
						// eslint-disable-next-line react/no-array-index-key
						<Box key={`empty-${i}`} height={1}>
							<Text> </Text>
						</Box>
					))}

					{/* Scroll-down indicator (always present for consistent height) */}
					<Box justifyContent="center" height={1}>
						{windowEnd < filtered.length ? (
							<Text dimColor>
								▼ {filtered.length - windowEnd} more
							</Text>
						) : (
							<Text> </Text>
						)}
					</Box>
				</Box>

				{/* Detail panel — vertically centered */}
				{current && cardProps && (
					<Box
						flexDirection="column"
						flexGrow={1}
						flexShrink={1}
						borderStyle="round"
						borderColor="#9b59b6"
						paddingX={1}
						justifyContent="center"
						overflowY="hidden"
					>
						<Box flexDirection="row" gap={2} alignItems="center">
							<TarotCard
								{...cardProps}
								faceUp
								reversed={showReversed}
							/>
							<Box flexDirection="column" flexShrink={1} flexGrow={1} justifyContent="center">
								<Text color="#f1c40f" bold>
									{current.interpretation.name}
								</Text>
								{showReversed && (
									<Text color="red"> ⟳ Reversed</Text>
								)}

								<Box marginTop={1}>
									<Text color="#9b59b6" bold>
										{showReversed ? 'Reversed' : 'Upright'}
										{': '}
									</Text>
								</Box>
								<Text wrap="wrap">
									{showReversed
										? current.interpretation.reversed
										: current.interpretation.upright}
								</Text>

								<Box marginTop={1} gap={1} flexWrap="wrap">
									{current.interpretation.keywords.map(
										kw => (
											<Text
												key={kw}
												color="cyan"
												dimColor
											>
												#{kw}
											</Text>
										),
									)}
								</Box>
							</Box>
						</Box>
					</Box>
				)}
			</Box>

			{/* Footer */}
			<Box marginTop={1} justifyContent="space-between">
				<Text dimColor>
					↑↓ browse · PgUp/PgDn jump · ←→ filter · r: reversed · esc:
					back
				</Text>
				{scrollPercent >= 0 && (
					<Text dimColor>
						{safeSelected + 1}/{filtered.length}
					</Text>
				)}
			</Box>
		</Box>
	);
}

function buildCardProps(entry: DictionaryEntry) {
	if (entry.arcana === 'major') {
		return {
			id: `dict-major-${entry.key}`,
			arcana: 'major' as const,
			majorIndex: entry.key as MajorArcanaIndex,
		};
	}

	const key = entry.key as string;
	const [suit, value] = key.split('-') as [string, string];
	return {
		id: `dict-minor-${key}`,
		arcana: 'minor' as const,
		suit: suit as 'wands' | 'cups' | 'swords' | 'pentacles',
		value: value as TarotMinorValue,
	};
}
