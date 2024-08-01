let response = await fetch('./tournoi/football.json');
const table = await response.json();

const equipes = document.getElementById("pEquipes")
equipes.textContent = nbreEquipes() + " équipes";

function nbreEquipes() {
    let equipe = 0;
    for (let team of table) {
        if (team.team1[0] === team.team1[1]) 
            equipe++               
    }
    return equipe
}  

const matchs = document.getElementById("pMatch")
matchs.textContent = nbreMatchJoues();

function nbreMatchJoues() {
    return (table.length)*2 + " matchs joués"
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
    td4.textContent = gagnant1(equipe);
    tr.appendChild(td4);    

    const td5 = document.createElement("td");
    let score2 = equipe.score;
    score2 = score[1];    
    td5.textContent = score2;
    tr.appendChild(td5);

    const td6 = document.createElement("td");
    td6.textContent = gagnant2(equipe);
    tr.appendChild(td6)    
    document.getElementById("donneeTableau").appendChild(tr);
}

function gagnant1(_equipe) {
           
        let resultat = _equipe.score;        
        let resultat1 = resultat[0];
        resultat1 = resultat1.split('-');
        let resultatEquipe1 = +resultat1[0]        
        let resultatEquipe2 = +resultat1[1]
        
        if (resultatEquipe1 > resultatEquipe2) {                        
            return " " + _equipe.team1           
        }
        else if (resultatEquipe2 > resultatEquipe1) {
            return " " + _equipe.team2
        }        
        else {
            return "égalité"
        }       
    }    


function gagnant2(_equipe) {
    for (const equipe of table) {
        let resultat = _equipe.score;
        console.log(resultat)
        let resultat2 = resultat[1];
        resultat2 = resultat2.split('-');
        let resultatEquipe1 = +resultat2[0]
        let resultatEquipe2 = +resultat2[1]

        if (resultatEquipe1 > resultatEquipe2) {

            return " " + _equipe.team1
        }
        else if (resultatEquipe2 > resultatEquipe1) {

            return " " + _equipe.team2
        }
        else {
            return "égalité"
        }
    }
}

function deplacerDansTableau() {
    
}












