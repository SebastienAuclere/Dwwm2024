const boutonAfficherDateduJour = document.getElementById('btn1');
const valeurDate = document.getElementById('date');
const valeurHeure = document.getElementById('time');
const boutonCalculerIntervalle = document.getElementById('btn2');
const valeurDate2 = document.getElementById('date2');
const valeurHeure2 = document.getElementById('time2');

// let intervalJours = ;
// let intervalHeures = ;
// let intervalMinutes = ;

console.log(boutonAfficherDateduJour, valeurDate);

let date;


boutonAfficherDateduJour.addEventListener('click', function () {



    date = new Date();

    let dateFr = date.toLocaleDateString();

    let heureFr = date.toLocaleTimeString();

    let dateFr2 = date.toISOString(); // "2024-07-01T10:24:25.375Z"
    dateFr2 = dateFr2.split('T'); // séparer la date en 2, le T sera le séparateur
    // le split crée un tableau : ['2024-07-01', '10:24:25.375Z']
    dateFr2 = dateFr2[0]; // on récupère la 1ère entrée du tableau
    console.log(dateFr2);

    // console.log(valeurDate.type)
    // console.log(date)
    // console.log(dateFr)
    // console.log(heureFr)

    document.getElementById('date').value = dateFr2;
    document.getElementById('time').value = heureFr;


    const resultat = document.getElementById('resultat');

    // console.log(resultat);

    resultat.innerHTML = `Aujourd'hui nous sommes le <span class="toto">${dateFr}</span>, 
    l'heure courante est <span class="toto">${heureFr}</span>.`

}

)

boutonCalculerIntervalle.addEventListener('click', function () {

    date = new Date(valeurDate.value);

    let dateFr = date.toLocaleDateString();

    let date2 = new Date(valeurDate2.value);

    let dateFr2 = date2.toLocaleDateString();

    let heureFr2 = date2.toLocaleTimeString();

    let intervalJours = date2.getTime() - date.getTime();
    intervalJours = Math.abs(intervalJours / 1000 / 60 / 60 / 24); //math.abs renvoie la valeur d'un nombre sans son signe si il est négatif
    
    let intervalHeures = Math.abs(((intervalJours / 1000 / 60 /60) - Math.round(intervalJours / 1000 / 60 / 60)));     

    let intervalMinutes = Math.abs(((intervalJours / 1000 / 60) - Math.round(intervalJours / 1000 / 60)));
    
    intervalJours = Math.round(intervalJours);
    intervalHeures = Math.round(intervalHeures);
    intervalMinutes = Math.round(intervalMinutes);

    

    // interval / 1000 / 60 / 60 = heures;
    // interval / 1000 / 60 = minutes;
    
    
    // function msToTime(duration) {
    //     var milliseconds = Math.floor((duration % 1000) / 100),
    //         seconds = Math.floor((duration / 1000) % 60),
    //         minutes = Math.floor((duration / (1000 * 60)) % 60),
    //         hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    //     hours = (hours < 10) ? "0" + hours : hours;
    //     minutes = (minutes < 10) ? "0" + minutes : minutes;
    //     seconds = (seconds < 10) ? "0" + seconds : seconds;

    //     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    // }
    // console.log(msToTime(300000))
    

    const resultat2 = document.getElementById('resultat2');

    console.log(resultat2);

    if ((date2.getTime() - date.getTime()) < 0 ) {        
        resultat2.innerHTML = `Il y a <span class="toto">${intervalJours}</span>
     jours, <span class="toto">${intervalHeures}</span> heures et 
     <span class="toto">${intervalMinutes}</span> minutes, nous étions
      le <span class="toto">${dateFr2}</span> à 
      <span class="toto">${heureFr2}</span>.`
    }
    else {
        resultat2.innerHTML = `Dans <span class="toto">${intervalJours}</span>
     jours, <span class="toto">${intervalHeures}</span> heures et 
     <span class="toto">${intervalMinutes}</span> nous serons
      le <span class="toto">${dateFr2}</span> à 
      <span class="toto">${heureFr2}</span>.`        
    }  
})



