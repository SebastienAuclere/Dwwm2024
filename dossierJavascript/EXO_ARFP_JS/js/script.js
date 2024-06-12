let compteur = 0;
let counterLabel = document.querySelector('#counter-label');

let monBtnCompteur = document.querySelector('#plus');
monBtnCompteur.addEventListener('click', function () {
    compteur += 1;
    counterLabel.innerHTML = compteur
});

let monBtnReinitialiser = document.querySelector('#remisAZero');
monBtnReinitialiser.addEventListener('click', function () {
    compteur = 0;
    counterLabel.innerHTML = compteur
});


