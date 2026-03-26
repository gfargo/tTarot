import type { TarotCardProps } from 'ink-playing-cards';

export type Screen =
	| 'welcome'
	| 'spread-select'
	| 'question'
	| 'reading'
	| 'summary'
	| 'dictionary'
	| 'settings';

export type SpreadType = 'single' | 'three-card' | 'celtic-cross' | 'yes-no';

export type SpreadPosition = {
	index: number;
	label: string;
	description: string;
};

export type SpreadDefinition = {
	type: SpreadType;
	name: string;
	description: string;
	cardCount: number;
	positions: SpreadPosition[];
};

export type DrawnCard = {
	position: SpreadPosition;
	card: TarotCardProps;
	reversed: boolean;
	revealed: boolean;
};

export type Reading = {
	spread: SpreadType;
	question?: string;
	cards: DrawnCard[];
};

export type AppSettings = {
	allowReversed: boolean;
};
