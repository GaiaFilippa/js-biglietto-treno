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

let ratePerKm = (0.21);

// Validazione dell'imput
// Inserisci numeri con la virgola!!
let isRouteKmANumber = !isNaN(routeKm);
let isAgeANumber = !isNaN(age);

if (isRouteKmANumber && isAgeANumber) {
    routeKm = parseFloat(routeKm);
    age = parseInt(age);
} else {
    console.log("Gli input inseriti non sono validi, riesegui il programma!");
}


// Calcolo costo percorso
let ticketPrice = routeKm * ratePerKm;
console.log(ticketPrice);

// Calcolo costo percorso con 20% di sconto minorenni
let priceWith20PercentsDiscount = ticketPrice / 100 * 80;

// Calcolo costo percorso con 40% di sconto over 65
let priceWith40PercentsDiscount = ticketPrice / 100 * 60;

//Risultato costo finale
if (age < 18) {
    console.log(priceWith20PercentsDiscount);
    document.getElementById("tot-ticket-price").innerHTML = priceWith20PercentsDiscount.toFixed(2); 
} else if (age > 65) {
    console.log(priceWith40PercentsDiscount);
    document.getElementById("tot-ticket-price").innerHTML = priceWith40PercentsDiscount.toFixed(2); 
} else {
    console.log(ticketPrice);
    document.getElementById("tot-ticket-price").innerHTML = ticketPrice.toFixed(2); 
}

// Visualizza sulla pagina