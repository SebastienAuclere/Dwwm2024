let response = await fetch('./eval.json');
const table = await response.json();

let ajouterLigne = document.getElementById("btn1");
let myBody = document.querySelector('#bodyNom');
// let moyenne = moyenneClass()

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

    const td4 = document.createElement("td");
    let obtenu = evaluationObtenu(eleve.grade);
    td4.textContent = obtenu;
    tr.appendChild(td4);
    document.querySelector("tbody").appendChild(tr);
}



ajouterLigne.addEventListener('click', function () {
    let nomPrenom = document.getElementById("nomPrenom").value;
    console.log(nomPrenom)
    nomPrenom = nomPrenom.split(" ");
    let prenom = nomPrenom[1];
    let nom = nomPrenom[0];
    let note = document.getElementById("note").value;
    let obtenu = evaluationObtenu(note);
    console.log(nomPrenom);

    if (verifLongueur(nom) && verifLongueur(prenom) && isAlpha(nom) && isAlpha(prenom)) {
        ajouterUneLigne(nom, prenom, note, obtenu);

        const roland = {
            fullname: nomPrenom,
            grade: parseInt(note)
        }
        table.push(roland);
        console.log(table);

    }
    else {

        nbCharacterMin();
    }

    monItem.textContent = nbreEtudiants();
    monItem2.textContent = "Moyenne de la classe : " + moyenneClass();
    monItem3.textContent = auDessusMoyenne();
})


function verifLongueur(mot) { 
    if (mot.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

function isAlpha(str) {
    return /^[a-zA-Z]{2,}$/.test(str);
}

function nbCharacterMin() {
    const para = document.getElementById("ajoutpara");
    para.innerHTML = '';
    const ajout = document.createElement("p");
    ajout.textContent = "Attention : Votre nom et prenom doivent contenir 2 lettres au minimum !"
    para.appendChild(ajout);
}

function ajouterUneLigne(nom, prenom, note, obtenu) {
    let nouvelleLigne = myBody.insertRow();
    let nouvelleCellule1 = nouvelleLigne.insertCell(); // Nom
    nouvelleCellule1.textContent = nom;
    let nouvelleCellule2 = nouvelleLigne.insertCell(); // Prenom
    nouvelleCellule2.textContent = prenom;
    let nouvelleCellule3 = nouvelleLigne.insertCell(); // Note
    nouvelleCellule3.textContent = note;
    let nouvelleCellule4 = nouvelleLigne.insertCell(); // Obtenu
    nouvelleCellule4.textContent = obtenu;
}

function nbreEtudiants() {
    return "Nombre d'étudiants : " + table.length;
}

// function moyenneClass() {
//     let notes = 0
//     for (let eleve of table) {
//         notes = notes + eleve.grade
//     }
//     return (notes / table.length).toFixed(2);
// }

function moyenneClass() {
    let moyenne = 0;
    for (let i = 0; i < table.length; i++) {        
        moyenne += table[i].grade
    }
    moyenne = (moyenne / table.length).toFixed(2);
    return moyenne;
}


function auDessusMoyenne() {
    
    let i = 0;
    for (let eleve of table) {
        if (eleve.grade > moyenneClass()) {
            i++
        }
    }
    return "Nombre d'étudiants au dessus de la moyenne : " + i;
}

function evaluationObtenu(grade) {
    if (grade >= 12) {
        return "Oui";
    }
    else {
        return "Non";
    }
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

let monItem4 = document.createElement("li");
monItem4.textContent = "Note éliminatoire : 12"
maListe.appendChild(monItem4);

