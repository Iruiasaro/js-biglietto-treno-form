//inserimento mainForm
var mainForm = document.getElementById("mainForm");

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //creazione delle variabili 
  var nomeUtenteElement = document.getElementById("nomeUtente");

  var kmDaFareElement = document.getElementById("kmDaFare");

  var ageElement = document.getElementById("age");

  var nomeUtente = nomeUtenteElement.value;

  var kmDaFare = kmDaFareElement.value;

  var age = ageElement.value;

  var scontistica = "";

  //condizione if per applicazione scontistica
  if (age == "adulto") {
    scontistica = "Nessuna scontistica applicata";
  } else if (age == "minorenne") {
    scontistica = "Sconto minorenne -20%";
  } else {
    scontistica = "Sconto over65 -40% "
  }

  //funzione per calcolo prezzo biglietto 
  function ticketPrice(myAge, kmDaFare) {
    if (myAge == "over65") {
      return ((0.21 * kmDaFare) - ((0.21 * kmDaFare) * 0.40)).toFixed(2)
    }
    if (myAge == "adulto") {
      return (0.21 * kmDaFare).toFixed(2)
    }
    if (myAge == "minorenne") {
      return ((0.21 * kmDaFare) - ((0.21 * kmDaFare) * 0.20)).toFixed(2)
    }
  }

  //creazione funzione per calcolo numero random 9000 - 100000
  function randomCp() {
    return Math.ceil(Math.random() * 10000) + 90000
  }

  //creazione funzione per numero random da 1 a 30
  function randomCarrozza() {
    return Math.ceil(Math.random() * 30)
  }

  //stampa su html
  document.getElementById("passengerName").innerHTML = nomeUtente;

  document.getElementById("carrozzaName").innerHTML = randomCarrozza();

  document.getElementById("scontistica").innerHTML = scontistica;

  document.getElementById("CpCod").innerHTML = randomCp();

  document.getElementById("ticketPrice").innerHTML = (ticketPrice(age, kmDaFare));
})

//funzione di reset DA PERFEZIONARE
mainForm.addEventListener("reset", function () {
})