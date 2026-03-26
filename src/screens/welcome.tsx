import { Box, Text, useInput } from 'ink';

const TITLE_ART = `
  ╔╦╗┌─┐┬─┐┌─┐┌┬┐
   ║ ├─┤├┬┘│ │ │ 
   ╩ ┴ ┴┴└─└─┘ ┴ 
`;

type WelcomeProps = {
	onStart: () => void;
};

export default function Welcome({onStart}: WelcomeProps) {
	useInput((_input, key) => {
		if (key.return) {
			onStart();
		}
	});

	return (
		<Box
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			flexGrow={1}
		>
			<Text color="#f1c40f">{TITLE_ART}</Text>
			<Box marginTop={1}>
				<Text color="#9b59b6" italic>
					The cards await your question...
				</Text>
			</Box>
			<Box marginTop={2}>
				<Text dimColor>Press </Text>
				<Text color="cyan" bold>
					Enter
				</Text>
				<Text dimColor> to begin</Text>
			</Box>
		</Box>
	);
}
