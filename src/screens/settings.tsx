import { Box, Text, useInput } from 'ink';
import type { AppSettings } from '../types.js';

type SettingsProps = {
	settings: AppSettings;
	onUpdate: (settings: AppSettings) => void;
	onBack: () => void;
};

export default function Settings({settings, onUpdate, onBack}: SettingsProps) {
	useInput((input, key) => {
		if (key.escape) {
			onBack();
			return;
		}

		if (key.return || input === ' ') {
			onUpdate({...settings, allowReversed: !settings.allowReversed});
		}
	});

	return (
		<Box flexDirection="column" padding={1} flexGrow={1} justifyContent="center">
			<Text color="#9b59b6" bold>
				Settings
			</Text>
			<Box marginTop={1} gap={1}>
				<Text color="#f1c40f">▸</Text>
				<Text>
					Reversed cards:{' '}
				</Text>
				<Text color={settings.allowReversed ? 'green' : 'red'} bold>
					{settings.allowReversed ? 'ON' : 'OFF'}
				</Text>
			</Box>
			<Box marginTop={1}>
				<Text dimColor>
					Enter/Space: toggle · esc: back
				</Text>
			</Box>
		</Box>
	);
}
