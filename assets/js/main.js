// ===============================
// SWITCH LOGIN / REGISTER
// ===============================

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

if (showRegister && showLogin) {
    showRegister.addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    });

    showLogin.addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });
}


// ===============================
// FUNZIONE ERRORE GENERICO
// ===============================

function showError(message){
    let box = document.getElementById("jserror");
    if (!box) {
        box = document.createElement("div");
        box.id = "jserror";
        box.className = "alert alert-danger mt-2";
        document.querySelector(".card").prepend(box);
    }
    box.textContent = message;
}


// ===============================
// RIPULISCI VALIDAZIONE
// ===============================

function clearValidation(input) {
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");

    const box = document.getElementById("jserror");
    if (box) box.remove();
}


// ===============================
// VALIDAZIONE LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e){
        const email = document.getElementById("loginEmail");
        const password = document.getElementById("loginPassword");

        let valid = true;

        if(!email.value.includes("@")) {
            email.classList.add("is-invalid");
            showError("Please enter a valid email.");
            valid = false;
        } else {
            email.classList.add("is-valid");
        }

        if(password.value.length < 6) {
            password.classList.add("is-invalid");
            showError("Password must be at least 6 characters.");
            valid = false;
        } else {
            password.classList.add("is-valid");
        }

        if (!valid) e.preventDefault();
    });
}


// ===============================
// VALIDAZIONE REGISTER
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e){
        const name = document.getElementById("regName");
        const email = document.getElementById("regEmail");
        const password = document.getElementById("regPassword");

        let valid = true;

        if(name.value.trim().length < 3) {
            name.classList.add("is-invalid");
            showError("Name must be at least 3 characters.");
            valid = false;
        } else {
            name.classList.add("is-valid");
        }

        if(!email.value.includes("@")) {
            email.classList.add("is-invalid");
            showError("Please enter a valid email.");
            valid = false;
        } else {
            email.classList.add("is-valid");
        }

        if(password.value.trim().length < 6) {
            password.classList.add("is-invalid");
            showError("Password must be at least 6 characters.");
            valid = false;
        } else {
            password.classList.add("is-valid");
        }

        if (!valid) e.preventDefault();
    });
}


// ===============================
// RIMOZIONE ERRORI LIVE
// ===============================

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        clearValidation(input);
    });
});


// ===============================
// TEMA SCURO / CHIARO
// ===============================

// ===============================
// APPLICA SEMPRE IL TEMA SALVATO
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}

// ===============================
// GESTIONE BOTTONE (SE ESISTE)
// ===============================

const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Aggiorna icona e testo in base al tema attivo
function updateThemeButton() {
    if (!themeBtn) return; // Se il bottone non esiste, esci

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("bi-moon", "bi-sun");
    } else {
        themeIcon.classList.replace("bi-sun", "bi-moon");
    }
}

// Aggiorna subito il bottone quando la pagina carica
updateThemeButton();

// Listener del bottone
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeButton();
    });
}

//Stagger automatico about-text

const paragraph = document.querySelectorAll('.stagger');

paragraph.forEach((p, h2, index) => {
    p.style.animationDelay = '$ {0.8 + index + 0.15}s';
    p.classList.add('fade-in-left');
});



