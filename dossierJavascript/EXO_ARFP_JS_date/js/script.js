const boutonCalculer = document.getElementById('btn1');
const valeurDate = document.getElementById('date');
const annees = document.getElementById('annees');

console.log(boutonCalculer, valeurDate);


boutonCalculer.addEventListener('click', function () {

    let date = new Date(valeurDate.value);

    let dateFr = date.toLocaleDateString();

    let heureFr = date.toLocaleTimeString();

    console.log(valeurDate.type)
    console.log(date)
    console.log(dateFr)
    console.log(heureFr)

    const resultat = document.getElementById('resultat');

    console.log(resultat);

    resultat.textContent = `Vous êtes né le ${dateFr} à ${heureFr}.`

    let dateAujourdhui = new Date();

    let anneesEcoulees = (dateAujourdhui.getFullYear() - date.getFullYear())

    console.log(anneesEcoulees)

    annees.textContent = `Il s'est écoulé ${anneesEcoulees} années depuis votre naissance.`

    let astro = document.getElementById('astro');

    let jour = date.getDate();
    let mois = date.getMonth();
    console.log(jour, mois);

    if ((date.getDate() >= 20 && date.getMonth() == 0) ||
        (date.getDate() <= 18 && date.getMonth() == 1)) {
        astro.textContent = `Verseau.`
    }
    else if ((date.getDate() >= 19 && date.getMonth() == 1) ||
        (date.getDate() <= 20 && date.getMonth() == 2)) {
        astro.textContent = `Poisson.`
    }
    else if ((date.getDate() >= 21 && date.getMonth() == 2) ||
        (date.getDate() <= 19 && date.getMonth() == 3)) {
        astro.textContent = `Bélier.`
    }
    else if ((date.getDate() >= 20 && date.getMonth() == 3) ||
        (date.getDate() <= 20 && date.getMonth() == 4)) {
        astro.textContent = `Taureau.`
    }
    else if ((date.getDate() >= 21 && date.getMonth() == 4) ||
        (date.getDate() <= 20 && date.getMonth() == 5)) {
        astro.textContent = `Gémeaux.`
    }
    else if ((date.getDate() >= 21 && date.getMonth() == 5) ||
        (date.getDate() <= 22 && date.getMonth() == 6)) {
        astro.textContent = `Cancer.`
    }
    else if ((date.getDate() >= 23 && date.getMonth() == 6) ||
        (date.getDate() <= 22 && date.getMonth() == 7)) {
        astro.textContent = `Lion.`
    }
    else if ((date.getDate() >= 23 && date.getMonth() == 7) ||
        (date.getDate() <= 22 && date.getMonth() == 8)) {
        astro.textContent = `Vierge.`
    }
    else if ((date.getDate() >= 23 && date.getMonth() == 8) ||
        (date.getDate() <= 22 && date.getMonth() == 9)) {
        astro.textContent = `Balance.`
    }
    else if ((date.getDate() >= 23 && date.getMonth() == 9) ||
        (date.getDate() <= 21 && date.getMonth() == 10)) {
        astro.textContent = `Scorpion.`
    }
    else if ((date.getDate() >= 22 && date.getMonth() == 10) ||
        (date.getDate() <= 21 && date.getMonth() == 11)) {
        astro.textContent = `Sagittaire.`
    }
    else if ((date.getDate() >= 22 && date.getMonth() == 11) ||
        (date.getDate() <= 19 && date.getMonth() == 0)) {
        astro.textContent = `Capricorne.`
    }
    else {
        alert('ca marche pas');
    }

}

)












