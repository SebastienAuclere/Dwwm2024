let response = await fetch('./tournoi/football.json');
const table = await response.json();

// const equipes = document.getElementById("pEquipes")
// equipes.textContent = nbreEquipes();

// function nbreEquipes() {
//     for (let ville of table) {
        
//     }
// }

const matchs = document.getElementById("pMatch")
matchs.textContent = nbreMatchJoues();

function nbreMatchJoues() {
    return table.length + " matchs joués"
}

for (const equipe of table) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = equipe.team1;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.textContent = equipe.team2;
    tr.appendChild(td2);

    // const td3 = document.createElement("td");    
    // let score = equipe.score[0];   
    // td3.textContent = score;
    // tr.appendChild(td3);
    document.getElementById("donneeTableau")
    

}

// for (const eleve of table) {
//     const tr = document.createElement("tr");

//     const td1 = document.createElement("td");
//     let nomDeEleve = eleve.fullname;
//     nomDeEleve = nomDeEleve.split(' ');
//     nomDeEleve = nomDeEleve[0]
//     td1.textContent = nomDeEleve;
//     tr.appendChild(td1);

// tr.appendChild(td4);
// document.querySelector("tbody").appendChild(tr);











