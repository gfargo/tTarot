import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { TarotCard } from 'ink-playing-cards';
import { getInterpretation } from '../data/interpretations.js';
import type { Reading } from '../types.js';
import { spreads } from '../utils/spreads.js';

type SummaryProps = {
	reading: Reading;
	onDone: () => void;
};

function getCardKey(card: Reading['cards'][number]['card']) {
	if (card.arcana === 'major') {
		return {arcana: 'major' as const, key: card.majorIndex};
	}

	return {arcana: 'minor' as const, key: `${card.suit}-${card.value}`};
}

export default function Summary({reading, onDone}: SummaryProps) {
	const spread = spreads[reading.spread]!;
	const [scrollIndex, setScrollIndex] = useState(0);

	const cards = reading.cards;
	const maxScroll = Math.max(0, cards.length - 1);

	useInput((_input, key) => {
		if (key.return || key.escape) {
			onDone();
			return;
		}

		if (key.upArrow) {
			setScrollIndex(i => Math.max(0, i - 1));
		} else if (key.downArrow) {
			setScrollIndex(i => Math.min(maxScroll, i + 1));
		}
	});

	const currentCard = cards[scrollIndex];

	return (
		<Box flexDirection="column" flexGrow={1}>
			{/* Title bar */}
			<Box paddingX={1} justifyContent="space-between">
				<Text color="#f1c40f" bold>
					✦ {spread.name} Reading Complete ✦
				</Text>
				{cards.length > 1 && (
					<Text dimColor>
						{scrollIndex + 1}/{cards.length}
					</Text>
				)}
			</Box>
			{reading.question && (
				<Box paddingX={1}>
					<Text dimColor italic>
						&quot;{reading.question}&quot;
					</Text>
				</Box>
			)}

			{/* Card navigation strip */}
			<Box paddingX={1} marginTop={1} gap={1}>
				{cards.map((dc, i) => {
					const isActive = i === scrollIndex;
					const {arcana, key} = getCardKey(dc.card);
					const interp = getInterpretation(arcana, key);
					const label = interp?.name ?? dc.position.label;
					return (
						<Text
							key={dc.card.id}
							color={isActive ? '#f1c40f' : 'gray'}
							bold={isActive}
							inverse={isActive}
						>
							{' '}
							{label}
							{dc.reversed ? ' ⟳' : ''}
							{' '}
						</Text>
					);
				})}
			</Box>

			{/* Current card detail */}
			{currentCard && (
				<Box
					flexGrow={1}
					marginTop={1}
					marginX={1}
					borderStyle="round"
					borderColor="#9b59b6"
					paddingX={1}
					overflowY="hidden"
				>
					<Box flexDirection="row" gap={2} alignItems="center">
						<TarotCard
							{...currentCard.card}
							faceUp
							reversed={currentCard.reversed}
						/>
						<Box
							flexDirection="column"
							flexShrink={1}
							flexGrow={1}
							justifyContent="center"
						>
							<Text color="#f1c40f" bold>
								{currentCard.position.label}
							</Text>
							<Text dimColor>{currentCard.position.description}</Text>
							{(() => {
								const {arcana, key} = getCardKey(currentCard.card);
								const interp = getInterpretation(arcana, key);
								if (!interp) return null;
								return (
									<Box marginTop={1} flexDirection="column">
										<Text bold>
											{interp.name}
											{currentCard.reversed ? ' ⟳ Reversed' : ''}
										</Text>
										<Box marginTop={1}>
											<Text wrap="wrap">
												{currentCard.reversed
													? interp.reversed
													: interp.upright}
											</Text>
										</Box>
										<Box marginTop={1} gap={1} flexWrap="wrap">
											{interp.keywords.map(kw => (
												<Text key={kw} color="cyan" dimColor>
													#{kw}
												</Text>
											))}
										</Box>
									</Box>
								);
							})()}
						</Box>
					</Box>
				</Box>
			)}

			{/* Footer */}
			<Box paddingX={1} justifyContent="space-between">
				<Text dimColor>
					{cards.length > 1 ? '↑↓ browse cards · ' : ''}
					Enter/Esc: return to menu
				</Text>
			</Box>
		</Box>
	);
}
