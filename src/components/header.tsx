import { Box, Text } from 'ink';

type HeaderProps = {
	title?: string;
};

export default function Header({title}: HeaderProps) {
	return (
		<Box
			borderStyle="round"
			borderColor="#9b59b6"
			paddingX={1}
			justifyContent="space-between"
		>
			<Text color="#f1c40f" bold>
				🔮 tTarot
			</Text>
			{title && <Text color="#9b59b6">{title}</Text>}
			<Text dimColor>q: quit · esc: back</Text>
		</Box>
	);
}
