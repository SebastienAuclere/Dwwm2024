let tabNom = ["Mike Dev", "John Makenzie", "Léa Grande"];
let maliste = document.querySelector('.liste');
let myBody = document.querySelector('#bodyNom');
let ajouterLigne = document.getElementById("btn1");

ajouterLigne.addEventListener('click', function () {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    ajouterUneLigne(nom, prenom, tabNom.length);
    tabNom.push(prenom + ' ' + nom)
})

for (const element of tabNom) {
    let monItem = document.createElement("li");
    monItem.textContent = element;
    maliste.appendChild(monItem);
}

function supprimer(cellule) {         //fonction supprime une cellule (donc mettre entre parenthèse le nom de la cellule) 
    cellule.closest('tr').remove()    // de droite a gauche: efface.le tr le plus proche de la cellule 
}

// nomComplet = 'Mike DEV"
function emailSplit(nom, prenom) {
    return prenom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "."
            + nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@example.com";
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
