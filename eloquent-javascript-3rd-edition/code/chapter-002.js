// 2.1 - Looping a Triangle
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 1st June 2021

let secret = "";
while (secret.length < 7){
    secret += "#";
    console.log(secret);
}

/* ######################################################## */

// 2.2 - FizzBuzz
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 1st June 2021

let number = 1;
while (number <= 100){
	if (number % 3 == 0 && number % 5 == 0){
        console.log(number + "FizzBuzz");
    }
  	else if (number % 3 == 0){
      console.log(number + "Fizz");
	}
  	else if (number % 5 == 0){
      console.log(number + "Buzz");
	}
  	else {
    console.log(number);
    }
	number += 1;
}

/* ######################################################## */

// 2.3 - Chessboard
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 1st June 2021

let space = " ", hash= "#", line = "\n";
let size = 8;
let xadrez = "";
let linhaPar = "";
let linhaImpar = "";

for (let i = 0; i < size; i++){
    if (i % 2 == 0){
        linhaPar = linhaPar + space;
        linhaImpar = linhaImpar + hash;
    } else {
        linhaPar = linhaPar + hash;
        linhaImpar = linhaImpar + space;
    }
}

for (let i = 0; i < size; i++){
    if (i % 2 == 1){
        xadrez = xadrez + linhaPar + line;
    } else {
        xadrez = xadrez + linhaImpar + line;
    }
}
console.log(xadrez);