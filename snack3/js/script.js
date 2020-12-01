//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var first = 2;
var second = 8;
var teams = ["Real Madrid", "Manchester City", "Juventus", "Inter", "Atalanta", "Tottenham", "Ajax", "Chelsea", "Bayern Monaco", "Barcelona"];
console.log(teams);

var teams2 = teamsInArray (first, second, teams);
console.log(teams2);

function teamsInArray (num1, num2, array) {
    var newArray = [];
    var i = num1;
    while (i <= num2) {
        newArray.push(array[i]);
        i++;
    }
    return newArray;
}
