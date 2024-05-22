document.addEventListener('DOMContentLoaded', function () {
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("signIn");
    let nameInput = document.getElementById("nameInput");
    let title = document.getElementById("title");

    signIn.onclick = function () {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
    }

    signUp.onclick = function () {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('password').value;

        if (emailInput !== "" && passwordInput !== "") {
            window.location.href = "https://ingeniebroslp.my.canva.site/ing-lp";
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});
