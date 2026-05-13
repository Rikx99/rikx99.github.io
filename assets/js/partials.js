document.addEventListener("DOMContentLoaded", () => {

    // Carica HEADER
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Inizializza la navbar DOPO il caricamento
            initNavbarScripts();
        });

    // Carica FOOTER
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
