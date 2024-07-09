const boutonAfficherDateduJour = document.getElementById('btn1');
const valeurDate1 = document.getElementById('date1');
const valeurTime1 = document.getElementById('time1');
const boutonCalculerIntervalle = document.getElementById('btn2');
const valeurDate2 = document.getElementById('date2');
const valeurTime2 = document.getElementById('time2');

let date;

boutonAfficherDateduJour.addEventListener('click', function () {

    date = new Date();

    // let date1 = date.toLocaleDateString();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('fr-FR', options);

    let time1 = date.toLocaleTimeString();

    let date2 = date.toISOString(); // "2024-07-01T10:24:25.375Z"
    date2 = date2.split('T'); // séparer la date en 2, le T sera le séparateur
    // le split crée un tableau : ['2024-07-01', '10:24:25.375Z']
    date2 = date2[0]; // on récupère la 1ère entrée du tableau      

    document.getElementById('date1').value = date2;
    document.getElementById('time1').value = time1;

    const resultat1 = document.getElementById('resultat1');

    resultat1.innerHTML = `Aujourd'hui nous sommes le <span class="toto">${formattedDate}</span>, 
    l'heure courante est <span class="toto">${time1}</span>.`
})

boutonCalculerIntervalle.addEventListener('click', function () {

    let date1 = new Date(valeurDate1.value + 'T' + time1.value);

    let date2 = new Date(valeurDate2.value);

    // let dateFr2 = date2.toLocaleDateString();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('fr-FR', options);

    let heureFr2 = date2.toLocaleTimeString();

    console.log(date1, date2)

    let intervalMillisecondes = date2.getTime() - date1.getTime();

    let intervalJours = (Math.abs(intervalMillisecondes / 1000 / 60 / 60 / 24)); //math.abs renvoie la valeur d'un nombre sans son signe si il est négatif              
    console.log(intervalJours);

    let intervalHeures = ((intervalJours - Math.floor(intervalJours)) * 24);
    console.log(intervalHeures);

    let intervalMinutes = ((intervalHeures - Math.floor(intervalHeures)) * 60);
    console.log(intervalMinutes);

    intervalJours = Math.floor(intervalJours);

    intervalHeures = Math.floor(intervalHeures);

    intervalMinutes = Math.floor(intervalMinutes);

    const resultat2 = document.getElementById('resultat2');

    if ((date2.getTime() - date1.getTime()) < 0) {
        resultat2.innerHTML = `Il y a <span class="toto">${intervalJours}</span>
        jours, <span class="toto">${intervalHeures}</span> heures et 
        <span class="toto">${intervalMinutes}</span> minutes, nous étions
        le <span class="toto">${formattedDate}</span> à 
        <span class="toto">${heureFr2}</span>.`
    }
    else {
        resultat2.innerHTML = `Dans <span class="toto">${intervalJours}</span>
        jours, <span class="toto">${intervalHeures}</span> heures et 
        <span class="toto">${intervalMinutes}</span> minutes nous serons
        le <span class="toto">${formattedDate}</span> à 
        <span class="toto">${heureFr2}</span>.`
    }
})

/********************************* Pour changer un format Date******* 

// let date = new Date('2023-09-28');
// let options = { year: 'numeric', month: 'long', day: 'numeric' };
// let formattedDate = date.toLocaleDateString('fr-FR', options);
// console.log(formattedDate); // "28 septembre 2023"

/********************************************************************/