
function funkcija() {
    var x = document.getElementById("meni");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        document.getElementById("meni").style.visibility = "visible";

    } else {
        x.style.visibility = "hidden";
    }
}

