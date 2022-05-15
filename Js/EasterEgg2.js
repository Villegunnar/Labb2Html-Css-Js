let x = ["V", "I", "K", "T", "O", "R"];
let combination = [];
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyV") {
        combination = [];
        document.getElementById("easterEgg2").innerText = "";
        addText("V");
        document.getElementById("easterEgg2").style.display = "block";
    } else if (event.code === "KeyI") {
        addText("I");
    } else if (event.code === "KeyK") {
        addText("K");
    } else if (event.code === "KeyT") {
        addText("T");
    } else if (event.code === "KeyO") {
        addText("O");
    } else if (event.code === "KeyR") {
        addText("R");
    } else {
        clear();
    }
    console.log(combination);

    if (combination.join("") === "VIKTOR") {
        window.setTimeout("alert('Du gissade rätt!')", 200);
        window.setTimeout("document.getElementById('easterEgg2').innerText='';", 200
        );
        window.setTimeout("document.getElementById('easterEgg2').style.display='none';", 200
        );
    }
    for (let i = 0; i < combination.length; i++) {
        if (combination[i] !== x[i]) {
            clear();
        }
    }
});
function clear() {
    combination = [];
    document.getElementById("easterEgg2").innerText = "";
    document.getElementById("easterEgg2").style.display = "none";

}
function addText(Bokstav) {
    combination.push(Bokstav);
    document.getElementById("easterEgg2").innerText += Bokstav;
}