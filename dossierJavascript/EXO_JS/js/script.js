function afficherDate() {
    let maDate = new Date();
    let annee = maDate.getFullYear();
    let mois = maDate.getMonth() + 1;
    let date = maDate.getDate();

    date = (date < 10) ? '0' + date : date;
    mois = (mois < 10) ? '0' + mois : mois;

    let chaineDate = date + '/' + mois + '/' + annee;
    //chaineDate = maDate.toLocalDateString();
    return chaineDate;
}

function afficherHeure() {
    let maDate = new Date();
    let heure = maDate.getHours();
    let minute = maDate.getMinutes();
    let seconde = maDate.getSeconds();

    heure = (heure < 10) ? '0' + heure : heure;
    minute = (minute < 10) ? '0' + minute : minute;
    seconde = (seconde < 10) ? '0' + seconde : seconde;


    let chaineheure = heure + ':' + minute + ':' + seconde;
    document.getElementById("txtheure").value = chaineheure;
    //chaineDate = maDate.toLocaleDateString();

}

let monBtnDate = document.querySelector('#btndate');
monBtnDate.addEventListener('click', function () {

    document.getElementById('txtdate').value = afficherDate();

});

let monBtnHeure = document.querySelector('#btnheure');
monBtnHeure.addEventListener('click', function () {

    setInterval(afficherHeure, 1000);

});









