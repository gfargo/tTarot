import { useState } from 'react';
import { Box, Text, useInput } from 'ink';

type QuestionInputProps = {
	onSubmit: (question: string) => void;
	onSkip: () => void;
};

export default function QuestionInput({onSubmit, onSkip}: QuestionInputProps) {
	const [question, setQuestion] = useState('');

	useInput((input, key) => {
		if (key.return) {
			if (question.trim()) {
				onSubmit(question.trim());
			} else {
				onSkip();
			}

			return;
		}

		if (key.backspace || key.delete) {
			setQuestion(prev => prev.slice(0, -1));
			return;
		}

		if (key.escape) {
			onSkip();
			return;
		}

		if (!key.ctrl && !key.meta && input) {
			setQuestion(prev => prev + input);
		}
	});

	return (
		<Box flexDirection="column" padding={1} flexGrow={1} justifyContent="center">
			<Text color="#9b59b6" bold>
				Focus your intention...
			</Text>
			<Box marginTop={1}>
				<Text dimColor>
					Type a question, or press Enter to hold it in your mind.
				</Text>
			</Box>
			<Box marginTop={1}>
				<Text color="#f1c40f">{'> '}</Text>
				<Text>{question}</Text>
				<Text color="#f1c40f">▌</Text>
			</Box>
		</Box>
	);
}
