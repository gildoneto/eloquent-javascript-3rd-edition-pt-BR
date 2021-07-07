// 01 - LOOPING A TRIANGLE - Eloquent JavaScript
// the code below was written by @gildoneto - 01/06/2021

let secret = "";
while (secret.length < 7){
    secret += "#";
    console.log(secret);
}

/* ######################################################## */

// 02 - FizzBuzz - Eloquent JavaScript
// the code below was written by @gildoneto - 01/06/2021

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

// 03 - CHESSBOARD - Eloquent JavaScript
// the code below was written by @gildoneto - 01/06/2021

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

/* ######################################################## */

// 04 - THE SUM OF A RANGE - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 05 - REVERSING AN ARRAY - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 06 - A LIST - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 07 - DEEP COMPARISON - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 08 - ####### - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 09 - ####### - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021


/* ######################################################## */

// 10 - ####### - Eloquent JavaScript
// the code below was written by @gildoneto - ##/06/2021