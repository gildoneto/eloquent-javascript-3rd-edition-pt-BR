// 2.1 - LOOPING A TRIANGLE
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 1st June 2021

let secret = "";
while (secret.length < 7){
    secret += "#";
    console.log(secret);
}

/* ######################################################## */

// 2.2 - FizzBuzz - Eloquent JavaScript
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

// 2.3 - CHESSBOARD - Eloquent JavaScript
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

/* ######################################################## */

// 3.1 - MINIMUM
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 15 July 2021

const min = (num1, num2) => {
    return Math.min(num1, num2)
}

console.log(min(0, 10));
console.log(min(0, -10));

/* ######################################################## */

// 3.2 - RECURSION
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 15 July 2021


/* ######################################################## */

// 3.3 - BEAN COUNTING
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 15 July 2021

/* ######################################################## */

// 4.1 - THE SUM OF A RANGE
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 4.2 - REVERSING AN ARRAY
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 4.3 - A LIST
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 4.4 - DEEP COMPARISON
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 5.1 - FLATTENING
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 5.2 - YOUR OWN LOOP

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021


/* ######################################################## */

// 5.3 - EVERYTHING

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 5.4 - DOMINANT WRITING DIRECTION

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 6.1 - A VECTOR TYPE

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 6.2 - GROUPS

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 6.3 - ITERABLE GROUPS

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 6.4 - BORROWING A METHOD

// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 7.1 - ##############
// Chapter 00
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 7.2 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 7.3 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 8.1 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 8.2 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 24 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 25 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 26 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 27 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 28 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 29 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 30 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 31 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 32 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 33 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 34 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 35 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 36 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 37 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 38 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 39 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 40 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 41 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 42 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 43 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 44 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 45 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 46 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 47 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 48 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 49 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// 50 - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

/* ######################################################## */

// XX - #######
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on XX XXXXX 2021

