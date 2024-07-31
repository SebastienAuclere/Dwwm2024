let response = await fetch('./tournoi/football.json');
const table = await response.json();

const equipes = document.getElementById("pEquipes")
equipes.textContent = nbreEquipes() + " équipes";

function nbreEquipes() {
    for (let i = 0; i < table.length; i++) {
            if (table.team1 = table.team1) {
                return 0
            }
            else {
                return i++
            }                
    }
}

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

    const td3 = document.createElement("td");
    let score = equipe.score;
    let score1 = score[0];
    td3.textContent = score1;
    tr.appendChild(td3);  
    
    const td4 = document.createElement("td");
    td4.textContent = gagnant();
    tr.appendChild(td4);    

    const td5 = document.createElement("td");
    let score2 = equipe.score;
    score2 = score[1];    
    td5.textContent = score2;
    tr.appendChild(td5);

    const td6 = document.createElement("td");
    td6.textContent = gagnant();
    tr.appendChild(td6)    
    document.getElementById("donneeTableau").appendChild(tr);
}

function gagnant() {
    for (const equipe of table) {
        let resultat = equipe.score;
        // resultat = resultat.split('-');
        // console.log(resultat)
        let resultat1 = resultat[0];
        // console.log(resultat[0])
        let resultat2 = resultat[1];
        // console.log(resultat[1])
        if (resultat1 > resultat2) {            
            return equipe.team1            
        }
        else if (resultat1 = resultat2) {
            return "égalité"
        }
        else {
            return equipe.team2
        }        
    }    
}














