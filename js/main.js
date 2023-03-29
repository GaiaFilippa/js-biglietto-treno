/*
Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni, calcola il prezzo totale del viaggio.
Secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

//Acquisizione dell'imput
let routeKm = prompt("Inserisci il numero di chilometri del tuo percorso: ");
let age = prompt("Inserisci l'età del passeggero: ");

let ratePerKm = (0,21);

// Validazione dell'imput
// Inserisci numeri con la virgola!!
let isRouteKmANumber = !isNaN(routeKm);
let isAgeANumber = !isNaN(age);

if (isRouteKmANumber && isAgeANumber) {
    routeKm = parseInt(routeKm);
    age = parseInt(age);
} else {
    console.log("Gli input inseriti non sono validi, riesegui il programma!");
}

// Calcolo costo percorso
let multOfNumbers = routeKm * ratePerKm;
console.log(multOfNumbers);