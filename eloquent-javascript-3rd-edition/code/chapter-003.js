// 3.1 - Minimum
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 15 July 2021

const min = (n1, n2) => {
    if (n2 > n1){
        return n1
    } else {
        return n2
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

/* ######################################################## */

// 3.2 - Recursion
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on xx July 2021

console.log(`
Não consegui entender a lógica de recursão
direito no dia 20/07/2021.
`)

/* ######################################################## */

// 3.3 - Bean Counting
// Eloquent JavaScript 3rd Edition
// Written by @gildoneto on 21 July 2021

function countBs(text){
    let result = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] == "B"){
           result++; 
        }
    }
    return result
}

function countChar(text, char){
    let result = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] == char){
           result++; 
        }
    }

    return result
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4