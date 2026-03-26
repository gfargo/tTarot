#!/usr/bin/env node
import meow from 'meow';
import { render } from 'ink';
import App from './app.js';
import { printDailyCard } from './daily.js';

const cli = meow(
	`
	Usage
	  $ ttarot

	Options
	  --daily, -d  Show your card of the day and exit

	Examples
	  $ ttarot
	  $ ttarot --daily
`,
	{
		importMeta: import.meta,
		flags: {
			daily: {
				type: 'boolean',
				shortFlag: 'd',
			},
		},
	},
);

if (cli.flags.daily) {
	printDailyCard();
} else {
	render(<App />, {
		exitOnCtrlC: true,
	});
}
