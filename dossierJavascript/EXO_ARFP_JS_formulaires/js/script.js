/* SETTINGS */
const MIN_VAL = 0;
const MAX_VAL = 120;



const monBtnValide = document.querySelector('#btn1');




monBtnValide.addEventListener('click', function () {
    const retourChampPrenom = verifPrenom();
    const retourChampAge = verifAge();
    const resultat = document.querySelector('#resultat');
    const majorite = document.querySelector('#majorite');
    const retraite = document.querySelector('#retraite');

    console.log(retourChampPrenom, retourChampAge)

    if (retourChampPrenom != null && retourChampAge != null) {
        resultat.textContent = "Bonjour " + retourChampPrenom + ", votre âge est : " + retourChampAge + " an(s).";
        if (retourChampAge >= 18) {
            majorite.textContent = "Vous êtes majeur";
        }
        else {
            majorite.textContent = "Vous êtes mineur";
        }
    }
    else {
        resultat.textContent = "Compléter/corriger le formulaire";
    }

    if (retourChampAge < 64) {
        const differenceAge = (64 - retourChampAge);
        retraite.textContent = "Il vous reste " + differenceAge + " année(s) avant la retraite."
    }
    else if (retourChampAge > 64) {
        const ageSuperieur = (retourChampAge - 64);
        retraite.textContent = "Vous êtes à la retraite depuis " + ageSuperieur + " année(s)."
    }
    else {
        retraite.textContent = "Vous prenez votre retraite cette année ! "
    }
}
)

function verifPrenom() {
    const x = document.querySelector("#prenom");
    if (x.value == "") {
        return null;
    }
    else {
        return x.value;
    }

}

function verifAge() {
    const z = document.querySelector("#age");
    if (Number.isInteger(Number(z.value)) && Number(z.value) > MIN_VAL && Number(z.value) <= MAX_VAL) {
        console.log("test:" + z.value);
        return z.value;
    } else {
       // console.log("test:" + z.value);
        return null;
    }
}


