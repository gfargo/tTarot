import { Box, Text } from 'ink';
import type { CardInterpretation } from '../data/interpretations.js';

type CardMeaningProps = {
	interpretation: CardInterpretation;
	reversed: boolean;
	positionLabel?: string;
	positionDescription?: string;
};

export default function CardMeaning({
	interpretation,
	reversed,
	positionLabel,
	positionDescription,
}: CardMeaningProps) {
	return (
		<Box flexDirection="column" paddingX={1} flexShrink={1}>
			<Text color="#f1c40f" bold>
				{interpretation.name}
				{reversed ? ' ⟳ Reversed' : ''}
			</Text>
			{positionLabel && (
				<Box marginTop={1}>
					<Text color="#9b59b6" bold>
						{positionLabel}
					</Text>
					{positionDescription && (
						<Text dimColor> — {positionDescription}</Text>
					)}
				</Box>
			)}
			<Box marginTop={1}>
				<Text wrap="wrap">
					{reversed ? interpretation.reversed : interpretation.upright}
				</Text>
			</Box>
			<Box marginTop={1} gap={1}>
				{interpretation.keywords.map(kw => (
					<Text key={kw} color="cyan" dimColor>
						#{kw}
					</Text>
				))}
			</Box>
		</Box>
	);
}
