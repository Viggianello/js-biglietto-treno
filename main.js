// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// chiedere all utente la sua età
var eta = prompt('Qual è la sua età:', '30');
// chiedere all utente il numero di km che vuole percorrere
var km = prompt('Quanti chilometri vuole percorrere:' ,'20');
// costo biglietto
var biglietto = (km * 0.21);
// applicare sconto in base all età e output
var biglietto_scontato_minorenni = ((biglietto / 100) * 20);

var biglietto_scontato_anziani = ((biglietto / 100 )* 40);

console.log (eta);
console.log (km);
console.log (biglietto);
console.log (biglietto_scontato_minorenn);
console.log (biglietto_scontato_anziani);


// document.getElementById('stampacolore').innerHTML='Ecco il tuo colore preferito:
