let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mouche1.jpg") {
        myImage.setAttribute("src", "images/mouche2.jpg");
    } else {
        myImage.setAttribute("src", "images/mouche1.jpg");
    }
});