//*****************************
//exemple tableau en mode ecriture manuelle :
//
// var resultats = [{ 'nom': 'Grande Léo', 'pays': 'France', 'temps': 1742 }, { 'nom': 'Makenzie Roy', 'pays': 'Belgique', 'temps': 1621 }];
// console.log(JSON.stringify(resultats));
//
//*****************************
//
// chemin du json : 
//dans GitHub aller sur la branche develop / DWWM_2312 / web - frontend /03 - js /06 - fetch - api / js / main.js
// et recopier les deux lignes suivantes ou il faut les modifier pour les inclures dans le code comme ci dessous
//let response = await fetch('./data/zipcodes.json');
//this.cities = await response.json();
//
//*****************************

let response = await fetch('./resultat10000metres.json');
const resultats = await response.json();

const tableau = document.getElementById("tableau")

const participants = document.getElementById("participants");
participants.textContent = nbreParticipants();

function nbreParticipants() {
    return resultats.length + " participants"
}

const gagnant = document.getElementById("gagnant");
gagnant.textContent = nomCompletGagnant();

function nomCompletGagnant() {

    let gagnantCourse = null;
    for (let participant of resultats) {
        if (gagnantCourse === null || gagnantCourse.temps < participant.temps) {
            gagnantCourse = participant;
        }
    }
    //Boucle 0, gagnantCourse = null;
    //Boucle 1, null.temps est pas possible, donc on attribut temporaireement un participant en tant que gagnant
    //Boucle 2, on peu enfin comparer le temps entre les participants

    return "Gagnant : " + gagnantCourse.nom.split(' ')[1] + ' ' + gagnantCourse.nom.split(' ')[0]
}

resultats.sort((a, b) => a.temps - b.tempps);

for (let participant of resultats) {
    // return minutes + "min" + secondes + "s"
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = participant.pays;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    let nomCoureur = participant.nom;
    nomCoureur = nomCoureur.split(' ');
    nomCoureur = nomCoureur[0];
    td2.textContent = nomCoureur;     
    tr.appendChild(td2);
    
    const td3 = document.createElement("td");
    let prenomCoureur = participant.nom;
    prenomCoureur = prenomCoureur.split(' ');
    prenomCoureur = prenomCoureur[1];
    td3.textContent = prenomCoureur;
    tr.appendChild(td3);    
    
    const td4 = document.createElement("td");
    td4.textContent = resultatConversionMinSec(participant.temps)
    tr.appendChild(td4);
    tableau.appendChild(tr);

}

function convertMin(temps) {
     return Math.floor(temps / 60)      
} 

function convertSec(temps) {
    return temps%60
}

function resultatConversionMinSec(temps) {
    return convertMin(temps) + "min" + convertSec(temps) + "s"
}

// // if (!this.form.checkbox.checked) {
// document.getElementById("fname").value = document.getElementById("fname").value.delete
// // }


function cacherLigne() {
    if
}
    document.getElementById('demo').style.display = 'none'

