//Chiediamo all'utente il numero di km che vuole percorrere;
//Chiediamo all'utente la sua età;
//In base ai numeri forniti calcoliamo il prezzo totale del viaggio;
//il prezzo del biglietto è definito in base ai km(0,20 € al km);
    // -se l'utente è minorenne va applicato uno sconto del 20%;
    // - se l'utente è un over 65 va applicato uno sconto del 40%;
// L'output del prezzo finale andrà mostrato in console con massimo due decimali (toFixed())

const userAge = parseInt ( prompt('Inserisci la tua età') );
const userKmPath = parseInt ( prompt('Inserisci i km che vuoi percorrere') );

console.log(userAge, userKmPath);

if ( isNaN(userAge) == true ) {
    console.log('La tua età non è stata accettata, ricarica la pagina e riprova');
} else if (isNaN(userKmPath) == true ) {
    console.log('Il numero di km non è stato accettato, ricarica la pagina e riprova');
} else {
    let userCost = 0.21 * userKmPath;
    console.log(userCost);

    let userTotal;
    
    if (userAge >= 65) {
        userTotal = (userCost * 60) / 100;
    } else if (userAge <= 18) {
        userTotal = (userCost * 80) / 100;
    } else {
        userTotal = userCost;
    }

    console.log(userTotal.toFixed(2) + "€");

}


