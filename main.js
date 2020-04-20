// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// chiedere all utente la sua età
var eta = prompt('Qual è la sua età?', '30');

// chiedere all utente il numero di km che vuole percorrere
var km = prompt('Quanti chilometri vuole percorrere?' ,'20');

// costo biglietto
var biglietto = (km * 0.21);

// 1)check dei dati inseriti 2)calcolare  per poi applicare lo sconto corretto in base all età 3)visualizzare questo output
// valutare se l'utente ha messo un valore numerico
if (isNaN(eta) == true || isNaN(km) == true) {
document.getElementById('stampa').innerHTML='perfavore non mi prenda in giro...inserisca dei valori numerici';
}

// valutare se l'utente ha messo un valore numerico non negativo
else if (eta < 0 == true || km < 0 == true) {
document.getElementById('stampa').innerHTML='perfavore non mi prenda in giro...non può aver una età o percorrere una distanza negativa';
}

// valutare se l'utente ha messo un valore numerico non negativo non decimale
else if (eta % 1 != 0 || km % 1 !=0) {
    document.getElementById('stampa').innerHTML='perfavore non mi prenda in giro...non può aver una età o percorre una distanza decimale';
}

else if (eta < 18) {
    var sconto_minorenni = ((biglietto / 100) * 20);
    var biglietto_scontato_minorenni = (biglietto - sconto_minorenni);
    // console.log ('Essendo minorenne il suo biglietto usufruisce di uno scondo del 20% venendo cosi a costare: ' + biglietto_scontato_minorenni.toFixed(2) + '€');
    document.getElementById('stampa').innerHTML='Essendo minorenne il suo biglietto usufruisce di uno sconto del 20% venendo così a costare: ' + biglietto_scontato_minorenni.toFixed(2) + '€';

} else if (eta > 65) {
    var sconto_anziani = ((biglietto / 100 ) * 40);
    var biglietto_scontato_anziani = (biglietto - sconto_anziani);
    // console.log ('Essendo over 65 di età il suo biglietto usufruisce di uno scondo del 40% venendo cosi a costare: ' + biglietto_scontato_anziani.toFixed(2) + '€');
    document.getElementById('stampa').innerHTML='Essendo over 65 di età il suo biglietto usufruisce di uno sconto del 40% venendo così a costare: ' + biglietto_scontato_anziani.toFixed(2) + '€';

}
else {
    // console.log ('Il costo del suo biglietto è: ' + biglietto + '€');
    document.getElementById('stampa').innerHTML='Il costo del suo biglietto è: ' + biglietto.toFixed(2) + '€';

}

// function is_numeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log (eta);
// console.log (km('km'));
// console.log (biglietto('€'));
// console.log (biglietto_scontato_minorenni('€'));
// console.log (biglietto_scontato_anziani('€'));
// else {
//     console.log ('Bravo!!! hai inserito dei valori numerici');
// }
// avrei potuto anche far a meno delle variabili sconto_minorenni e sconto_anziani inizializzando le variabili biglietto_scontato_anziani 60% e biglietto_scontato_minorenni 80% cosi sarebbe gia fatto il calcolo senza la sottrazione perche 60 è complementare a 40% e 80% è complementare a 20% ossia le loro somme fanno 100%
