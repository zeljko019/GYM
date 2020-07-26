//Kreiranje objekta datum
let d = new Date();

//Vraćanje dana u nedelji 0 - 6
let dan = d.getDay();

//Vraćanje datuma
let datum = d.getDate();

//Vraćanje meseca u godini
let mesec = d.getMonth() +1; //+1 jer računa mesec o 0.

//Vraćanje godine
let godina = d.getFullYear();

//Vraćanje sati
let sati = d.getHours();

let minuti = d.getMinutes();

//Ispis
let datumIspis = ` ${datum}.${mesec}.${godina} `;
console.log(datumIspis);

//Ispis teksta na stranici
let pDatum = document.getElementById("datum"); //Dohvata p.
pDatum.innerHTML = datumIspis;

//Ispis sati u alertu.
let vremesati = `${sati}:${minuti}`;

//Ispis godine, autorska prava
let datumpravaispis = `${"©"} ${"2020"} - ${godina}, ${"TERETANA"}`;
let datumprava = document.getElementById("datumprava");
datumprava.innerHTML = datumpravaispis;

function Vremefunkcija(){
    var vreme = new Date();
    var s = vreme.getHours();
    var m = vreme.getMinutes();

    return([s, m ].join(':'))
}

function Jutro(){
    return("Dobro jutro, trenutno vreme iznosi:")
}

function Dan(){
    return("Dobar dan, trenutno vreme iznosi:")
}

function Veče(){
    return("Dobro veče, trenutno vreme iznosi:")
}

//Alert prozor
if(sati>4 && sati<9)
{
    alert([Jutro(), Vremefunkcija()].join("\n"));
}
else
    if(sati>=9 && sati<19)
    {
        //alert(Vremefunkcija()); //Ispisuje samo vreme
       
        alert([Dan(), Vremefunkcija()].join("\n"));
    }
    else
        alert([Veče(), Vremefunkcija()].join("\n"));

