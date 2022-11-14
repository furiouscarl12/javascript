'use strict';

function makeCool(num) {
    return num.toFixed(2);
}

const dicecount = prompt('Give me number of dices');
const dicesum = prompt('What do you think is the sum of the dices?');

let summstrue = 0;
const numerofTries = 30000;

for (let i = 0; i < numerofTries; i++) {
    let sum = 0;
    for (let x = 0; x < dicecount; x++) {
        sum += Math.floor((Math.random() * 6) + 1);
    }
    if (sum == dicesum) {
        summstrue++;
    }