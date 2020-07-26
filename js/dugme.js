
vrh = document.getElementById("vrh"); 

// Dugme se prikazuje, posle 20px.
window.onscroll = function() {pomeranje()}; 

function pomeranje() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        vrh.style.display = "block";
    } else {
        vrh.style.display = "none";
    }
}

// Klikom na dugme, vraća se na početak stranice.
function scrollFunction() {
    document.documentElement.scrollTop = 0; //  Ostali pretraživači
    document.body.scrollTop = 0; // Safari
}
