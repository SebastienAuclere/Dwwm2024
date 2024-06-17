const resultat = document.querySelector('#resultat');
// const retourChampDate = verifierDate();
const btnCalculer = document.querySelector("#btn1");
btnCalculer.addEventListener('click', function () {
    resultat.innerHTML = "Vous êtes né le " + verifierDate();
})

function verifierDate() {
    const x = document.querySelector('#date')
    console.log(x);
    if (x.value == "") {
        return null;
    }
    else {
        return x.value
    }    
}

function decouperDate() {
    const chaineCar = document.querySelector(verifierDate);
     

}