const boutonValide = document.querySelector('#btn1');
boutonValide.addEventListener('click', function () {
    const retourChampDate = verifDate();
    const resultat = document.querySelector()
}) 

function verifDate() {
    const dateValeur = document.querySelector("#date");
    if (dateValeur.value == "") {
        return null;
    }
    else if (dateValeur.value >= Date.now) {
        return (resultat.innerHTML) = "Sélectionnez une date dans le passé s'il vous plait !!"         
    }
    else {
        return (resultat.innerHTML) = "Vous êtes né le " + dateValeur.value + "./nIl s'est écoulé "
        + (Date.now - dateValeur.value) + "depuis votre naissance";
    }
}










  