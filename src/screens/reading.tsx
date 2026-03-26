import { useState, useEffect, useCallback } from 'react';
import { Box, Text, useInput } from 'ink';
import { useDeck, TarotCard, type TarotCardProps } from 'ink-playing-cards';
import { spreads } from '../utils/spreads.js';
import { getInterpretation } from '../data/interpretations.js';
import CardMeaning from '../components/card-meaning.js';
import type { SpreadType, DrawnCard, Reading } from '../types.js';

type ReadingPhase = 'shuffling' | 'drawing' | 'revealing' | 'done';

type ReadingScreenProps = {
	spreadType: SpreadType;
	question?: string;
	allowReversed: boolean;
	onComplete: (reading: Reading) => void;
};

function isTarotCard(card: unknown): card is TarotCardProps {
	return (
		typeof card === 'object' &&
		card !== null &&
		'arcana' in card
	);
}

function getCardKey(card: TarotCardProps): {arcana: 'major' | 'minor'; key: number | string} {
	if (card.arcana === 'major') {
		return {arcana: 'major', key: card.majorIndex};
	}

	return {arcana: 'minor', key: `${card.suit}-${card.value}`};
}

export default function ReadingScreen({
	spreadType,
	question,
	allowReversed,
	onComplete,
}: ReadingScreenProps) {
	const spread = spreads[spreadType]!;
	const {shuffle, draw, hands} = useDeck();
	const [phase, setPhase] = useState<ReadingPhase>('shuffling');
	const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
	const [revealIndex, setRevealIndex] = useState(0);
	const [shuffleFrame, setShuffleFrame] = useState(0);

	const shuffleFrames = ['🂠 ·  ·  · ', ' · 🂠 ·  · ', ' ·  · 🂠 · ', ' ·  ·  · 🂠', ' ·  · 🂠 · ', ' · 🂠 ·  · '];

	// Shuffle animation
	useEffect(() => {
		if (phase !== 'shuffling') return;

		const timer = setInterval(() => {
			setShuffleFrame(f => (f + 1) % shuffleFrames.length);
		}, 150);

		const done = setTimeout(() => {
			clearInterval(timer);
			shuffle();
			setPhase('drawing');
		}, 1500);

		return () => {
			clearInterval(timer);
			clearTimeout(done);
		};
	}, [phase]);

	// Draw cards after shuffle
	useEffect(() => {
		if (phase !== 'drawing') return;
		draw(spread.cardCount, 'querent');
		setPhase('revealing');
	}, [phase]);

	// Build drawn cards from hand
	useEffect(() => {
		if (phase !== 'revealing' && phase !== 'done') return;

		const hand = hands['querent'];
		if (!hand || hand.length === 0) return;
		if (drawnCards.length > 0) return;

		const cards: DrawnCard[] = hand
			.filter(c => isTarotCard(c))
			.slice(0, spread.cardCount)
			.map((card, i) => ({
				position: spread.positions[i]!,
				card: card as TarotCardProps,
				reversed: allowReversed && Math.random() < 0.5,
				revealed: false,
			}));

		setDrawnCards(cards);
	}, [phase, hands]);

	const handleReveal = useCallback(() => {
		if (phase !== 'revealing') return;
		if (revealIndex >= drawnCards.length) return;

		setDrawnCards(prev =>
			prev.map((c, i) => (i === revealIndex ? {...c, revealed: true} : c)),
		);

		if (revealIndex >= drawnCards.length - 1) {
			setPhase('done');
		}

		setRevealIndex(i => i + 1);
	}, [phase, revealIndex, drawnCards.length]);

	useInput((_input, key) => {
		if (key.return || key.rightArrow) {
			if (phase === 'revealing') {
				handleReveal();
			} else if (phase === 'done') {
				onComplete({
					spread: spreadType,
					question,
					cards: drawnCards,
				});
			}
		}
	});

	if (phase === 'shuffling') {
		return (
			<Box flexDirection="column" padding={1} alignItems="center" flexGrow={1} justifyContent="center">
				<Text color="#9b59b6" bold>
					Shuffling the deck...
				</Text>
				<Box marginTop={1}>
					<Text color="#f1c40f">{shuffleFrames[shuffleFrame]}</Text>
				</Box>
				{question && (
					<Box marginTop={1}>
						<Text dimColor italic>
							&quot;{question}&quot;
						</Text>
					</Box>
				)}
			</Box>
		);
	}

	if (phase === 'revealing' && drawnCards.length === 0) {
		return (
			<Box padding={1} flexGrow={1} justifyContent="center">
				<Text color="#9b59b6">Drawing cards...</Text>
			</Box>
		);
	}

	// Current card to show interpretation for
	const currentIndex = Math.min(revealIndex, drawnCards.length - 1);
	const currentCard = drawnCards[currentIndex];

	return (
		<Box flexDirection="column" padding={1} flexGrow={1}>
			{question && (
				<Box marginBottom={1}>
					<Text dimColor italic>
						&quot;{question}&quot;
					</Text>
				</Box>
			)}
			<Box flexDirection="row" gap={1} flexWrap="wrap">
				{drawnCards.map(dc => {
					const {card} = dc;
					return (
						<Box key={card.id} flexDirection="column" alignItems="center">
							<TarotCard
								{...card}
								faceUp={dc.revealed}
								reversed={dc.revealed && dc.reversed}
							/>
							<Text
								color={dc.revealed ? '#f1c40f' : 'gray'}
								bold={dc.revealed}
							>
								{dc.position.label}
							</Text>
						</Box>
					);
				})}
			</Box>

			{currentCard?.revealed && (
				<Box marginTop={1}>
					{(() => {
						const {arcana, key} = getCardKey(currentCard.card);
						const interp = getInterpretation(arcana, key);
						if (!interp) return null;
						return (
							<CardMeaning
								interpretation={interp}
								reversed={currentCard.reversed}
								positionLabel={currentCard.position.label}
								positionDescription={currentCard.position.description}
							/>
						);
					})()}
				</Box>
			)}

			<Box marginTop={1}>
				{phase === 'revealing' ? (
					<Text dimColor>
						Press Enter to reveal card {revealIndex + 1} of {drawnCards.length}
					</Text>
				) : (
					<Text dimColor>All cards revealed. Press Enter for summary.</Text>
				)}
			</Box>
		</Box>
	);
}
