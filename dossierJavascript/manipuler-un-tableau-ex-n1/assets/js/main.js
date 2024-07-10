let ajouterLigne = document.getElementById('#btn1');
ajouterLigne.addEventListener('click', function () {
     let newLength = tabNom.push(prenom.value + " " + nom.valeur);
     console.log(newLength);

})

let tabNom = ["Mike Dev", "John Makenzie", "Léa Grande"];
let maliste = document.querySelector('.liste');


for (const element of tabNom) {

    let monItem = document.createElement("li");
    monItem.textContent = element;
    maliste.appendChild(monItem);
}

function genererTableau() {
    let myTable = document.querySelector('#listNom');// cible grace au selecteur dans le document et le mets dans la variable "myTable"
    let myBody = myTable.createTBody();// crée un TBody dans myTable et le stocke dans ma variable "myBody"
    
    myBody.setAttribute('id', 'bodyNom');
    
    for (let i = 0; i < tabNom.length; i++) {
        let myRow = myBody.insertRow();//insère une ligne dans "myBody" et declare et le stocke dans la variable "myRow"
        console.log(myBody);
        console.log(myRow);
        let cellNom = myRow.insertCell();//insère une cellule dans "myRow" et declare et le stocke dans la variable "cellNom"
        let montabNomPrenom = tabNom[i].split(' ');//recupere toutes les valeurs de tabnom et fait un split pour le mettre dans la variable montabNomPrenom
        cellNom.textContent = montabNomPrenom[1];//recupere la deuxieme valeur du tableau et attribue son texte dans la cellule cellNom
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
        cellSupprimer.setAttribute('id', 'btnx' + i);//attribue un id un bouton + un index a la cellule "cellSupprimer"
        //maintenant je dois cibler le tr pour qu'en appuyant sur x j'efface le tr
        cellSupprimer.addEventListener('click', function () { //ajoute un event a la cellule cellSupprimer en cliquant sur la cellule
            supprimer(cellSupprimer)                          //fait la fonction supprimer sur "la même cellule" (cellsupprimer)
        })
                
        function supprimer(cellule) {         //fonction supprime une cellule (donc mettre entre parenthèse le nom de la cellule) 
            cellule.closest('tr').remove()    // de droite a gauche: efface.le tr le plus proche de la cellule 
        }   
    }
}

genererTableau();

    

