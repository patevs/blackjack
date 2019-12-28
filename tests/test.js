/**
 *  * test.js
 */

var assert = require('assert');
import test from 'ava';
import blackjack from '..';

test('title', t => {
	t.throws(() => {
		blackjack(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(blackjack('unicorns'), 'unicorns & rainbows');
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

// EOF //
