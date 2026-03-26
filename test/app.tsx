import test from 'ava';
import { render } from 'ink-testing-library';
import App from '../src/app.js';

test('renders welcome screen', t => {
	const {lastFrame} = render(<App />);
	const frame = lastFrame() ?? '';
	t.true(frame.includes('tTarot'), 'should show app title');
	t.true(frame.includes('The cards await your question'), 'should show welcome text');
	t.true(frame.includes('Enter'), 'should show enter prompt');
});
