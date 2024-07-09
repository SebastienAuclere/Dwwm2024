let tabNom = ["Mike Dev", "John Makenzie", "Léa Grande"];
let maliste = document.querySelector('.liste');


for (const element of tabNom) {

    let monItem = document.createElement("li");
    monItem.textContent = element;
    maliste.appendChild(monItem);
}

function genererTableau() {
    let myTable = document.querySelector('#listNom');
    let myBody = myTable.createTBody();
    myBody.setAttribute('id', 'bodyNom');
    for (let i = 0; i < tabNom.length; i++) {
        let myRow = myBody.insertRow();
        let cellNom = myRow.insertCell();
        let montabNomPrenom = tabNom[i].split(' ');
        cellNom.textContent = montabNomPrenom[1];
        let cellPrenom = myRow.insertCell();
        cellPrenom.textContent = montabNomPrenom[0];
        let cellEmail = myRow.insertCell();        
        cellEmail.textContent = montabNomPrenom[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "." +
            montabNomPrenom[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@example.com";
        let cellSupprimer = myRow.insertCell();
        cellSupprimer.setAttribute("style", "text-align:center;font-weight:bold");// cette ligne permet d'ajouter un attribut et apres une 
        //virgule sa propriété ainsi qu'une valeur, attention mettre ":" pour du javascript.
        cellSupprimer.textContent = "X";
        //.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        // STOP: Ce morceau de code sert a enlever tous les caractères spéciaux et mets toutes les lettres en lowercase. 
        cellSupprimer.setAttribute('id', 'btnx' + i);
        //maintenant je dois cibler le tr pour qu'en appuyant sur x j'efface le tr
    }
}

genererTableau();

    

