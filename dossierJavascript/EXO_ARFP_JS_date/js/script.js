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

    let jour = date.getDate();
    let mois = date.getMonth();


    switch (valeurDate) {
        case       
})












