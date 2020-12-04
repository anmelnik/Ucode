function transformation() {
    let wramp = document.getElementById("lab")
    let name = document.getElementById("hero")
    
    if(name.innerHTML === "Bruce Banner") {
        name.innerHTML = "Hulk";
        wramp.style.background = '#70964b';
        wramp.style.fontSize = '60px';
        wramp.style.letterSpacing = '2px'
    }
    else if(name.innerHTML === "Hulk") {
        name.innerHTML = "Bruce Banner";
        wramp.style.background = '#ffb300';
        wramp.style.fontSize = '130px';
        wramp.style.letteSrpacing = '6px'
    }
}