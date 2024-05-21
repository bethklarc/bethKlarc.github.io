let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let form = document.querySelector("form");
let emailInput = form.querySelector('input[type="email"]');
let passwordInput = form.querySelector('input[type="password"]');

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

// Añadir evento de clic al botón de Login
signIn.addEventListener("click", function() {
    // Verificar si los campos están llenos
    if (emailInput.value !== "" && passwordInput.value !== "") {
        // Redirigir a la URL especificada
        window.location.href = "https://ingeniebroslp.my.canva.site/ing-lp";
    } else {
        // Mostrar un mensaje de advertencia si los campos no están llenos
        alert("Por favor, complete todos los campos.");
    }
});
