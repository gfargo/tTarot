import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { spreads } from '../utils/spreads.js';
import type { SpreadType } from '../types.js';

const spreadList = Object.values(spreads);

type SpreadSelectProps = {
	onSelect: (spread: SpreadType) => void;
};

export default function SpreadSelect({onSelect}: SpreadSelectProps) {
	const [selected, setSelected] = useState(0);

	useInput((_input, key) => {
		if (key.upArrow) {
			setSelected(i => (i > 0 ? i - 1 : spreadList.length - 1));
		} else if (key.downArrow) {
			setSelected(i => (i < spreadList.length - 1 ? i + 1 : 0));
		} else if (key.return) {
			onSelect(spreadList[selected]!.type);
		}
	});

	return (
		<Box flexDirection="column" padding={1} flexGrow={1} justifyContent="center">
			<Text color="#9b59b6" bold>
				Choose your spread
			</Text>
			<Box marginTop={1} flexDirection="column">
				{spreadList.map((spread, i) => {
					const isFocused = i === selected;
					return (
						<Box key={spread.type} gap={1}>
							<Text color={isFocused ? '#f1c40f' : 'gray'}>
								{isFocused ? '▸' : ' '}
							</Text>
							<Text color={isFocused ? '#f1c40f' : 'white'} bold={isFocused}>
								{spread.name}
							</Text>
							<Text dimColor>
								({spread.cardCount} card{spread.cardCount > 1 ? 's' : ''})
							</Text>
							{isFocused && (
								<Text color="cyan" italic>
									{' '}
									— {spread.description}
								</Text>
							)}
						</Box>
					);
				})}
			</Box>
			<Box marginTop={1}>
				<Text dimColor>↑↓ navigate · Enter select</Text>
			</Box>
		</Box>
	);
}
