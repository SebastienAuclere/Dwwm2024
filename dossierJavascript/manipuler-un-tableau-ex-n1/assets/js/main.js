let tabNom = ["Mike Dev", "John Makenzie", "Léa Grande"];
let maliste = document.querySelector('.liste');
let myBody = document.querySelector('#bodyNom');
let ajouterLigne = document.getElementById("btn1");
let ajout = document.getElementById("paragrapheAjout");

ajouterLigne.addEventListener('click', function () {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    if (verifLongueur(nom) && verifLongueur(prenom) && isAlpha(nom) && isAlpha(prenom) && siMemeNomPrenom(monNom, nom, monPrenom, prenom))
    {
        ajouterUneLigne(nom, prenom, tabNom.length);
        tabNom.push(prenom + ' ' + nom);
        confirmationAjout(nom, prenom);
    }
    else
    {
        nbCharacterMin();
    }    
})

for (const element of tabNom) {
    let monItem = document.createElement("li");
    monItem.textContent = element;
    maliste.appendChild(monItem);
}

function supprimer(cellule) {         //fonction supprime une cellule (donc mettre entre parenthèse le nom de la cellule) 
    cellule.closest('tr').remove()    // de droite a gauche: efface.le tr le plus proche de la cellule 
}

function verifLongueur(mot) {
    if (mot.length < 3)
    {           
        return false;
    }
    else
    {
        return true;    
    }
}

// nomComplet = 'Mike DEV"
function emailSplit(nom, prenom) {
    return prenom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "."
            + nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@example.com";
}

function prenomNomSplit(nom, prenom) {
    return prenom + " " + nom + "  ajouté !";
}

function ajouterUneLigne(nom, prenom, i) {
    let nouvelleLigne = myBody.insertRow();
    let nouvelleCellule1 = nouvelleLigne.insertCell(); // Nom
    nouvelleCellule1.textContent = nom;
    let nouvelleCellule2 = nouvelleLigne.insertCell(); // Prenom
    nouvelleCellule2.textContent = prenom;
    let nouvelleCellule3 = nouvelleLigne.insertCell(); // Email
    nouvelleCellule3.textContent = emailSplit(nom, prenom);
    let nouvelleCellule4 = nouvelleLigne.insertCell(); // bouton Supprimer
    nouvelleCellule4.textContent = "X";
    nouvelleCellule4.setAttribute("style", "text-align:center;font-weight:bold");
    nouvelleCellule4.setAttribute("id", "btnx" + i);
    nouvelleCellule4.addEventListener("click", function () {
        supprimer(nouvelleCellule4)
    })
}

function genererTableau() {
    for (let i = 0; i < tabNom.length; i++) {
        // tabNom[i] = "Mike DEV"
        let tableau = tabNom[i].split(' '); // ['Mike', 'DEV']
        let monPrenom = tableau[0]; // "Mike"
        let monNom = tableau[1]; // "DEV"
        ajouterUneLigne(monNom, monPrenom, i);
    }
}

genererTableau();

function confirmationAjout(nom, prenom) {    
    ajout.textContent = prenomNomSplit(nom, prenom);  
}

function nbCharacterMin() {
    ajout.textContent = "Attention : Votre nom et prenom doivent contenir 2 lettres au minimum !"
}

function isAlpha(str) {
  return /^[a-zA-Z]{2,}$/.test(str);
}

function siMemeNomPrenom(monNom, nom, monPrenom, prenom) {
    if (monNom == nom && monPrenom == prenom)
    {
        console.log
        ajout.textContent = "Attention : Votre nom et prenom sont déjà dans le tableau !"   
    }
}
