let response = await fetch('./tournoi/football.json');
const table = await response.json();

console.log(table)

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

// for (const equipe of table) {
//     const tr = document.
// }

// for (const eleve of table) {
//     const tr = document.createElement("tr");

//     const td1 = document.createElement("td");
//     let nomDeEleve = eleve.fullname;
//     nomDeEleve = nomDeEleve.split(' ');
//     nomDeEleve = nomDeEleve[0]
//     td1.textContent = nomDeEleve;
//     tr.appendChild(td1);











