import type { SpreadDefinition } from '../types.js';

export const spreads: Record<string, SpreadDefinition> = {
	single: {
		type: 'single',
		name: 'Single Card',
		description: 'A quick daily pull or simple answer',
		cardCount: 1,
		positions: [{index: 0, label: 'The Card', description: 'Your message'}],
	},
	'three-card': {
		type: 'three-card',
		name: 'Three Card',
		description: 'Past, Present, and Future',
		cardCount: 3,
		positions: [
			{index: 0, label: 'The Past', description: 'What has led to this moment'},
			{
				index: 1,
				label: 'The Present',
				description: 'Where you are right now',
			},
			{
				index: 2,
				label: 'The Future',
				description: 'What is coming into being',
			},
		],
	},
	'celtic-cross': {
		type: 'celtic-cross',
		name: 'Celtic Cross',
		description: 'A deep 10-card reading',
		cardCount: 10,
		positions: [
			{
				index: 0,
				label: 'Present',
				description: 'The current situation',
			},
			{
				index: 1,
				label: 'Challenge',
				description: 'The immediate obstacle',
			},
			{
				index: 2,
				label: 'Foundation',
				description: 'The root cause or basis',
			},
			{
				index: 3,
				label: 'Recent Past',
				description: 'What is passing away',
			},
			{
				index: 4,
				label: 'Crown',
				description: 'The best possible outcome',
			},
			{
				index: 5,
				label: 'Near Future',
				description: 'What is approaching',
			},
			{
				index: 6,
				label: 'Self',
				description: 'Your attitude and role',
			},
			{
				index: 7,
				label: 'Environment',
				description: 'External influences',
			},
			{
				index: 8,
				label: 'Hopes & Fears',
				description: 'Your inner desires and anxieties',
			},
			{
				index: 9,
				label: 'Outcome',
				description: 'The final result',
			},
		],
	},
	'yes-no': {
		type: 'yes-no',
		name: 'Yes or No',
		description: 'A single card for a binary answer',
		cardCount: 1,
		positions: [
			{index: 0, label: 'The Answer', description: 'Yes or No'},
		],
	},
};
