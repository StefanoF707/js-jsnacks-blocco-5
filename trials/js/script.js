$(document).ready(
    function() {

        // SNACK

        let number1 = 3;
        let number2 = 13;

        const alphabet = ["a", "b", "z", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        alphabet[2] = "c";
        console.log(alphabet);
        var alphabet2 = lettersInArray(alphabet, number1, number2);
        console.log(alphabet2);

        let word = `${alphabet[2]}${alphabet[8]}${alphabet[0]}${alphabet[14]}`;
        console.log(`Parola concatenata: ${word}.`);

        // /SNACK


        const getRandomNumber = (min, max) => Math.floor((Math.random() * (max - min) + 1) + min);

        let player1 = getRandomNumber(0, 5);
        let player2 = getRandomNumber(0, 5);

        var winner;
        if (player1 == player2) {
            winner = "Pareggio!";
        } else if (player1 > player2) {
            winner = "Giocatore 1!";
        } else {
            winner = "Giocatore 2!";
        }

        var innerContainer = `
        <h2>Giocatore 1: ${player1}</h2>
        <h2>Giocatore 2: ${player2}</h2>
        <h2>Vincitore: ${winner}</h2>
        `;

        $(".container").html(innerContainer);

    }
);


//----------------------------------------------------

function lettersInArray  (array, num1, num2) {
    let newArray = [];
    for (let i = num1; i <= num2; i++) {
        newArray.push(array[i]);
    }
    return newArray
}
