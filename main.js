/*
Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/
var livello = parseInt(prompt('scegli il livello di difficolta! [0][1][2]'));

var limit;

switch (livello) {
    case 1:
        limit = 80;
        //80 numeri
        break;
    case 2:
        limit = 50;
        //50 numeri
        break;

    default:
        limit = 100;
        //100 numero
        break;
}

var bombe = [];

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while (bombe.length < 16) {

    var numero = randomNumbers(1, limit);

    if (!bombe.includes(numero)) {
        bombe.push(numero);
    }
}
console.log(bombe);

var arrayiUtente = [];

for (var i = 1; i <= (limit - 16); i++) {

    var numeroUtente = parseInt(prompt('Inserisci numero compreso tra 1 e ' + limit))

    while (numeroUtente < 1 || numeroUtente > limit || isNaN(numeroUtente)) {
        alert('devi inserire un numero tra 1 e ' + limit)
        numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + limit))
    }
    if (!arrayiUtente.includes(numeroUtente)) {
        if (bombe.includes(numeroUtente)) {
            alert('Sei su una mina ' + ' punteggio: ' + arrayiUtente.length)
            break;
        }
        arrayiUtente.push(numeroUtente);
        console.log(arrayiUtente);
    } else {
        alert('hai già inserito il numero' + arrayiUtente);
        i--;
    }
    console.log(i);
}
if (arrayiUtente.length === (limit - 16)) {
    alert('Hai vinto, punti totali ' + arrayiUtente.length);
}