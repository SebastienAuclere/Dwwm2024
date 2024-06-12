let taillePolice = 16;
let monBtnAugmente = document.querySelector('#augmente');
monBtnAugmente.addEventListener('click', function () {
    taillePolice += 1;
    document.body.style.fontSize = taillePolice + "px";
})

let compteur = 16;
let counterLabel = document.querySelector('#counter-label');
let monBtnCompteur = document.querySelector('#augmente');
monBtnCompteur.addEventListener('click', function () {
    compteur += 1;
    counterLabel.innerHTML = compteur;
})

monBtnAugmente = document.querySelector('#augmente');
monBtnAugmente.addEventListener('click', function () {
    if (taillePolice == 49) {
        taillePolice = 16;
        compteur = 16;
    }
    document.body.style.fontSize = taillePolice + "px";
    counterLabel.innerHTML = compteur;
})

taillePolice = 16;
monBtnAugmente = document.querySelector('#diminue');
monBtnAugmente.addEventListener('click', function () {
    taillePolice -= 1;
    document.body.style.fontSize = taillePolice + "px";
})

compteur = 16;
counterLabel = document.querySelector('#counter-label');
monBtnCompteur = document.querySelector('#diminue');
monBtnCompteur.addEventListener('click', function () {
    compteur -= 1;
    counterLabel.innerHTML = compteur;
})

monBtnAugmente = document.querySelector('#diminue');
monBtnAugmente.addEventListener('click', function () {
    if (taillePolice == 8) {
        taillePolice = 16;
        compteur = 16;
    }
    document.body.style.fontSize = taillePolice + "px";
    counterLabel.innerHTML = compteur;
})    