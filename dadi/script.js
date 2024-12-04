// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1 - Creea un array con i numeri da 1 a 6
// 2 - Genero un numero random dal computer
// 3 - Genero un numero random dal utente
// 4 - Stabilisco un vincitore in base al punteggio piu alto



const numbCpu = Math.floor((Math.random() * 6) + 1);

console.log(numbCpu)

const numbUtente = Math.floor((Math.random() * 6) + 1) ;

console.log( numbUtente)

if ( numbCpu > numbUtente) {
    alert(`ha vinto il CPU con il numero ${numbCpu} 😎`)
}
else if ( numbUtente > numbCpu) {
    alert(`Ha vinto il utente con il numero ${numbUtente} 😎`)
}
else {
    alert(`CPU con il numero ${numbCpu} e pari al numero ${numbUtente} del utente 😁`)
}