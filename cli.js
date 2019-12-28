#!/usr/bin/env node
'use strict';
const meow = require('meow');
const blackjack = require('.');

const cli = meow(`
	Usage
	  $ blackjack [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ blackjack
	  unicorns & rainbows
	  $ blackjack ponies
	  ponies & rainbows
`);

console.log(blackjack(cli.input[0] || 'unicorns'));
