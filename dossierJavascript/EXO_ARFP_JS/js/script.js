let compteur = 0;

let monBtnCompteur = document.querySelector('#plus');
monBtnCompteur.addEventListener('click', function () {
    compteur += 1;
});

let monBtnReinitialiser = document.querySelector('#remisAZero');
monBtnReinitialiser.addEventListener('click', function () {
    compteur = 0;
});

