'use strict';

let numbers = [];
for(let i = 0; i < 5; i++){
    numbers.push(prompt('give me a number'));
}

for(let i = 4; i >= 0; i--){
    console.log(numbers[i]);
}