// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

// 0 - Faccio una lista con tutti  e-mail

const listMail = ["franco@gmail.com", "mirko@yahoo.com", "shara@gmail.it", "stefanel@yahoo.com"]

console.log(listMail)
// 1 - Chiedo al utente la sua email

const mailUtente = prompt(`Inserisci la tua email`)

// 2 - Controllo che sia nella lista che puo accerede
// 3 - stampo un messaggio sull esito del controllo

let isUtenteMailList = false;

  for ( i = 0; i < listMail.length; i++) {
    
   if (listMail[i] === mailUtente) {
    isUtenteMailList = true;
    }
}

if (isUtenteMailList) {
    alert(`puoi entrare 👍`)
}
else {
    alert(`Non puoi entrare 😢`)
}
