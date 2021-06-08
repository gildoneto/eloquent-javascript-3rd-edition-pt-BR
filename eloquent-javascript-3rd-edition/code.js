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