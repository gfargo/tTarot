import { useState, useCallback } from 'react';
import { Box, Text, useApp, useInput } from 'ink';
import { DeckProvider, createTarotDeck } from 'ink-playing-cards';
import Header from './components/header.js';
import Viewport from './components/viewport.js';
import Welcome from './screens/welcome.js';
import SpreadSelect from './screens/spread-select.js';
import QuestionInput from './components/question-input.js';
import ReadingScreen from './screens/reading.js';
import Summary from './screens/summary.js';
import Dictionary from './screens/dictionary.js';
import Settings from './screens/settings.js';
import type { Screen, SpreadType, Reading, AppSettings } from './types.js';

function AppInner() {
	const {exit} = useApp();
	const [screen, setScreen] = useState<Screen>('welcome');
	const [spreadType, setSpreadType] = useState<SpreadType>('three-card');
	const [question, setQuestion] = useState<string | undefined>();
	const [reading, setReading] = useState<Reading | undefined>();
	const [settings, setSettings] = useState<AppSettings>({allowReversed: true});

	// Global quit handler
	useInput(
		(input, key) => {
			if (input === 'q' && screen !== 'question') {
				exit();
			}

			if (key.escape && screen !== 'question' && screen !== 'reading' && screen !== 'settings' && screen !== 'dictionary') {
				if (screen === 'welcome') {
					exit();
				} else {
					setScreen('welcome');
				}
			}
		},
	);

	const handleSpreadSelect = useCallback((type: SpreadType) => {
		setSpreadType(type);
		setScreen('question');
	}, []);

	const handleQuestionSubmit = useCallback((q: string) => {
		setQuestion(q);
		setScreen('reading');
	}, []);

	const handleQuestionSkip = useCallback(() => {
		setQuestion(undefined);
		setScreen('reading');
	}, []);

	const handleReadingComplete = useCallback((r: Reading) => {
		setReading(r);
		setScreen('summary');
	}, []);

	const handleSummaryDone = useCallback(() => {
		setScreen('welcome');
	}, []);

	const screenTitles: Record<Screen, string> = {
		welcome: '',
		'spread-select': 'Choose a Spread',
		question: 'Your Question',
		reading: 'Reading',
		summary: 'Summary',
		dictionary: 'Tarot Dictionary',
		settings: 'Settings',
	};

	return (
		<Box flexDirection="column">
			<Header title={screenTitles[screen]} />
			<Viewport>
				{screen === 'welcome' && (
					<>
						<Welcome
							onStart={() => {
								setScreen('spread-select');
							}}
						/>
						<Box paddingX={2} gap={3}>
							<Box>
								<Text dimColor>{'['}</Text>
								<Text color="cyan">d</Text>
								<Text dimColor>{'] Dictionary'}</Text>
							</Box>
							<Box>
								<Text dimColor>{'['}</Text>
								<Text color="cyan">s</Text>
								<Text dimColor>{'] Settings'}</Text>
							</Box>
						</Box>
						<WelcomeNav
							onDictionary={() => {
								setScreen('dictionary');
							}}
							onSettings={() => {
								setScreen('settings');
							}}
						/>
					</>
				)}
				{screen === 'spread-select' && (
					<SpreadSelect onSelect={handleSpreadSelect} />
				)}
				{screen === 'question' && (
					<QuestionInput
						onSubmit={handleQuestionSubmit}
						onSkip={handleQuestionSkip}
					/>
				)}
				{screen === 'reading' && (
					<ReadingScreen
						spreadType={spreadType}
						question={question}
						allowReversed={settings.allowReversed}
						onComplete={handleReadingComplete}
					/>
				)}
				{screen === 'summary' && reading && (
					<Summary reading={reading} onDone={handleSummaryDone} />
				)}
				{screen === 'dictionary' && (
					<Dictionary
						onBack={() => {
							setScreen('welcome');
						}}
					/>
				)}
				{screen === 'settings' && (
					<Settings
						settings={settings}
						onUpdate={setSettings}
						onBack={() => {
							setScreen('welcome');
						}}
					/>
				)}
			</Viewport>
		</Box>
	);
}

// Separate component so useInput doesn't conflict
function WelcomeNav({
	onDictionary,
	onSettings,
}: {
	onDictionary: () => void;
	onSettings: () => void;
}) {
	useInput(input => {
		if (input === 'd') {
			onDictionary();
		} else if (input === 's') {
			onSettings();
		}
	});

	return null;
}

export default function App() {
	return (
		<DeckProvider initialCards={createTarotDeck()}>
			<AppInner />
		</DeckProvider>
	);
}
