'use strict';

let num = prompt('Give me a number');
let isprime = true;
if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isprime = false;
        }
    }
}
else{
    isprime = false;
}

document.querySelector('#target').innerHTML = 'This numbur is prime number = ' + isprime;