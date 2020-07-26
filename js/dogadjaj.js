
//Validacija kontakt forme.
// IME i PREZIME
//name="ime" required - automatska validacija

function validacija() {
    var x = document.forms["kontaktForma"]["ime"].value;
    var y = document.forms["kontaktForma"]["prezime"].value;
    if (x == "") {
        alert("Unesite ime!");
        return false;
    }
    else
    if(y == "") {
        alert("Unesite prezime!");
        return false;
    }
    alert("Uspešno ste poslali!");
}

//////////////////////////////////////////////////////////////////////////////////

//Dohvatanje elementa.
let posalji = document.getElementById("reset");

//Osluškivač.
posalji.addEventListener('click', () => {
    alert("Uspešno ste resetovali podatke!")
}); //Metod.
//1. parametar
//2.  funkcija koja treba da se realizuje

