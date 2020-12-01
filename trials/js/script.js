// Snack Rifatto con ES6

//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

let number1 = 3;
let number2 = 13;

const alphabet = ["a", "b", "z", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alphabet[2] = "c";
console.log(alphabet);
var alphabet2 = lettersInArray(alphabet, number1, number2);
console.log(alphabet2);


function lettersInArray  (array, num1, num2) {
    let newArray = [];
    for (let i = num1; i <= num2; i++) {
        newArray.push(array[i]);
    }
    return newArray
}

let word = `${alphabet[2]}${alphabet[8]}${alphabet[0]}${alphabet[14]}`;
console.log(`Parola concatenata: ${word}.`);
