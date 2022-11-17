#!/usr/bin/env node

// Dependencies
import { roll } from "../lib/roll.js"
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

// Declare sides, dices, rolls
let sides = args.sides && args.sides > 0 ? args.sides: 6;
let dices = args.dice && args.dice > 0 ? args.dice: 2;
let rolls = args.rolls && args.rolls > 0 ? args.rolls: 1;

// Output
console.log(JSON.stringify(roll(sides, dices, rolls)));

process.exit(0);
