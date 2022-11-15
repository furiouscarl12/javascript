'use strict';


function rroll(sides){
    return Math.floor(Math.random() * sides + 1);
}

function addtolist(num, listname){
    let ul = document.getElementById(listname);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}

let die = 0;
const maxnum = prompt('give me the max number');

while (die != maxnum){
    die = rroll(maxnum);
    addtolist(die, 'list');
}