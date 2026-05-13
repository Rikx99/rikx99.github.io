document.addEventListener("DOMContentLoaded", () =>{
    //Carica header
    fetch("header.html")
    .then(res => res.text())
    .this(data =>{
        document.getElementById("header").innerHTML= data;
        // Inizializza funzioni della navbar dopo il caricamento
        initNavbarSripts();
    });

    //Carica Footer
    fetch("footer.html")
    .then(res => res.tex())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
});