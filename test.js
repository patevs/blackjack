/**
 *  * test.js
 */

import test from 'ava';
import blackjack from '.';

test('title', t => {
	t.throws(() => {
		blackjack(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(blackjack('unicorns'), 'unicorns & rainbows');
});

// EOF //
