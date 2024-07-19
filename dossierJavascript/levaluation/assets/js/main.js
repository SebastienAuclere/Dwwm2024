let response = await fetch('./eval.json');
const table = await response.json();
let notes = 0
let nbreEleves = 0
let resultat = 0


table.sort((a, b) => b.grade - a.grade);

for (const eleve of table) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    let nomDeEleve = eleve.fullname;
    nomDeEleve = nomDeEleve.split(' ');
    nomDeEleve = nomDeEleve[0]
    td1.textContent = nomDeEleve;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    let prenomDeEleve = eleve.fullname;
    prenomDeEleve = prenomDeEleve.split(' ');
    prenomDeEleve = prenomDeEleve[1];
    td2.textContent = prenomDeEleve;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.textContent = eleve.grade;
    tr.appendChild(td3);
    document.querySelector("tbody").appendChild(tr);
}

function nbreEtudiants() {
    
    return "Nombre d'étudiants : " + table.length;
}

function moyenneClass() {
    for (let eleve of table) {
        notes += eleve.grade
    }
    return notes / table.length;
}



function auDessusMoyenne() {
    const moyenne = moyenneClass()
    let i = 0;
    for (let eleve of table) {        
        if (+eleve.grade > moyenne) {            
            i++
        }                
    }
    return "Nombre d'étudiants au dessus de la moyenne : " + i;
}
 


let maListe = document.getElementById("list");
let monItem = document.createElement("li");
monItem.textContent = nbreEtudiants();
maListe.appendChild(monItem);

let monItem2 = document.createElement("li");
monItem2.textContent = "Moyenne de la classe : " + moyenneClass();
maListe.appendChild(monItem2);

let monItem3 = document.createElement("li");
monItem3.textContent = auDessusMoyenne();
maListe.appendChild(monItem3);

