// let response = await fetch('./resultat10000metres.json');
// const resultats = await response.json();

// for (const coureur of resultats) {
//     const tr = document.createElement("tr");

//     const td1 = document.createElement("td");
//     td1.textContent = coureur.pays;
//     tr.appendChild(td1);

//     const td2 = document.createElement("td");
//     let nomDuCoureur = coureur.nom;
//     nomDuCoureur = nomDuCoureur.split(' ');
//     nomDuCoureur = nomDuCoureur[0];
//     td2.textContent = nomDuCoureur;
//     tr.appendChild(td2);

//     const td3 = document.createElement("td");
//     let prenomDuCoureur = coureur.nom;
//     prenomDuCoureur = prenomDuCoureur.split(' ');
//     prenomDuCoureur = prenomDuCoureur[1];
//     td3.textContent = prenomDuCoureur;
//     tr.appendChild(td3);

//     const td4 = document.createElement("td");
//     td4.textContent = (coureur.temps / 60).toFixed(0) + "min" + (coureur.temps % 60) + "s";
//     tr.appendChild(td4);
//     document.querySelector("tbody").appendChild(tr);

let tabNom = ["Mike Dev", "John Makenzie", "Léa Grande"];
let maliste = document.querySelector('.liste');
let monTableau = document.querySelector('.table1');

for (const element of tabNom) {

    let monItem = document.createElement("li");
    monItem.textContent = element;
    maliste.appendChild(monItem);
}     

function remplirChamp() {          

    for (const element2 of tabNom) {
        
        let champ = document.createElement("td");
        // element2 = element2.split(' ');
        // element2 = element2[1];
        champ.textContent = element2;        
        monTableau.appendChild(champ);
    }
    let tr = document.createElement("tr");
    tr.appendChild(td);
    const tbody = document.createElement("tbody");
    tbody.appendChild(tr);     
}
    
