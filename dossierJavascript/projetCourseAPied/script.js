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

for (const coureur of resultats) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = coureur.pays;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    let nomDuCoureur = coureur.nom;
    nomDuCoureur = nomDuCoureur.split(' ');
    nomDuCoureur = nomDuCoureur[0];
    td2.textContent = nomDuCoureur;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    let prenomDuCoureur = coureur.nom;
    prenomDuCoureur = prenomDuCoureur.split(' ');
    prenomDuCoureur = prenomDuCoureur[1];
    td3.textContent = prenomDuCoureur;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.textContent = (coureur.temps / 60).toFixed(0) + "min" + (coureur.temps % 60 ) + "s";
    tr.appendChild(td4);
    document.querySelector("tbody").appendChild(tr);

    


    

}