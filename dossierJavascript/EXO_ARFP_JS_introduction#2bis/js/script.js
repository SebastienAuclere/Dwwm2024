let nbTaillePolice = document.querySelector("#police");
let monBtnAugmente = document.querySelector('#augmente');
let monBtnDiminue = document.querySelector('#diminue');
let minPolice = 8;
let maxPolice = 48;

function actualiserTaillePolice() {
    //Le if verifie si le nombre saisie (nbTaillePolice.value) est inferieur au minPolice
    //Ou si le nombre saisie (nbTaillePolice.value) est superieur a maxPolice
    //(Ce qui indiquerait que la saisie n'est pas bonne)
    if (Number(nbTaillePolice.value) < minPolice ||
        Number(nbTaillePolice.value) > maxPolice) {
        //Si la saisie n'est pas bonne, on met la saisie à 16px
        nbTaillePolice.value = 16;
    }
    //Pour finir on change la taille de la police pour le body à la taille de la police saisie
    document.body.style.fontSize = nbTaillePolice.value + "px";
}

//Number("16")
//Retourne le nombre 16

monBtnAugmente.addEventListener('click', function () {
    nbTaillePolice.value++;
    actualiserTaillePolice();
})

monBtnDiminue.addEventListener('click', function () {
    nbTaillePolice.value--;
    actualiserTaillePolice();
})

nbTaillePolice.addEventListener('change', function () {
    actualiserTaillePolice();
})
