/* SETTINGS */
const MIN_VAL = 0;     //permet de creer en dur ces deux variables et de rendre moins accessibles ces donnees 
const MAX_VAL = 120;   //a partir du fichier html (alex)



const monBtnValide = document.getElementById('btn1');  //recupère l'id du bouton 1 et le stocke dans une variable
monBtnValide.addEventListener('click', function () {   //se sert de la variable pour creer un event au click et applique la function
    const retourChampPrenom = verifPrenom();
    const retourChampAge = verifAge();
    const resultat = document.getElementById('resultat');
    const majorite = document.getElementById('majorite');
    const retraite = document.getElementById('retraite');

    console.log(retourChampPrenom, retourChampAge)

    if (retourChampPrenom != null && retourChampAge != null) {
        resultat.innerHTML = `Bonjour <span class='toto'>${retourChampPrenom}</span>, votre âge est : <span class='toto'>${retourChampAge}</span> an(s)`;
        if (retourChampAge >= 18) {
            majorite.innerHTML = "Vous êtes <span class='toto'>majeur</span>"; //span change la couleur dans le javascript
                                                                                     //directement   
        }
        else {
            majorite.innerHTML = "Vous êtes <span class='toto'>mineur</span>";
        }
    }
    else {
        resultat.textContent = "Compléter/corriger le formulaire"; //textContent change le texte dans le p du html
    }

    if (retourChampAge < 64) {
        const differenceAge = (64 - retourChampAge);
        retraite.innerHTML = `Il vous reste <span class='toto'>${differenceAge}</span> année(s) avant la retraite.`
    }
    else if (retourChampAge > 64) {
        const ageSuperieur = (retourChampAge - 64);
        retraite.innerHTML = `Vous êtes à la retraite depuis <span class='toto'>${ageSuperieur}</span> année(s).`
    }
    else {
        retraite.textContent = "Vous prenez votre retraite cette année ! "
    }
}
)

function verifPrenom() {
    const x = document.getElementById("prenom"); //on recupere l id prenom et on le stock dans x 
    if (x.value == "") {  //on fait la condition par rapport a la valeur de x et on compare si le champ n'est pas vide
        return null;      //ca retourne null si c vide 
    }
    else {
        return x.value;  // ca retourne la valeur de x , donc son contenu et on peut donc se servir de la valeur dans le champ x
    }

}

function verifAge() {
    const z = document.getElementById("age"); //dans z on met l'age du p avec l'id age 
    if (Number.isInteger(Number(z.value)) &&  // on teste si z est un integer
        Number(z.value) > MIN_VAL &&          // ne pas oublier a mettre number pour z, est il sup a min val  
        Number(z.value) <= MAX_VAL) {         // pareil pour max val  
        console.log("test:" + z.value);       //ceci est une chaine de caractere que l'on verifie
        return z.value;                       // retour de la valeur de z
    } else {
        // console.log("test:" + z.value); // console log permet de verifier avec f12 dans la console et de tester les etats
        //directement dans la console du navigateur
        return null;
    }
}

// document.getElementById("resultat");


