# Proyecto de Login

Este es un proyecto de una interfaz de Login y Registro utilizando HTML, CSS y JavaScript.

## Descripción

Este proyecto proporciona una interfaz de usuario para el login y el registro de usuarios. La interfaz está diseñada con CSS para darle un estilo atractivo y funcional, y utiliza JavaScript para manejar la lógica de cambio entre las vistas de Login y Registro.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: Contiene la estructura HTML de la interfaz de usuario.
- `style.css`: Contiene los estilos CSS para la interfaz de usuario.
- `script.js`: Contiene el código JavaScript para la funcionalidad de cambio entre Login y Registro.

## Cómo usar

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.

### HTML

El archivo `index.html` contiene la estructura básica del formulario de login y registro. Aquí hay un breve resumen de su contenido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <div class="form-content">
            <h1 id="title">Login</h1>
            <form>
                <div class="input-group">
                    <div class="input-field" id="nameInput">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Nombre">
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Correo">
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Contraseña">
                    </div>
                    <p>Olvidaste tu Contraseña?? <a href="#">Click Aquí</a></p>
                </div>
                <div class="btn-field">
                    <button id="signUp" type="button">Registro</button>
                    <button id="signIn" type="button" class="disable">Login</button>
                </div>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

CSS
El archivo style.css contiene los estilos que se aplican a la interfaz. Aquí hay un breve resumen de su contenido:

* {
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
    text-decoration: none;
}

.container {
    width: 100%;
    height: 100vh;
    background-image: url(images/fondoIng.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-content {
    width: 100%;
    max-width: 450px;
    background-color: #EBDEA9;
    padding: 50px 60px 70px;
    text-align: center;
    border-radius: 25px;
}

.form-content h1 {
    font-size: 30px;
    margin-bottom: 60px;
    color: tomato;
    position: relative;
}

.form-content h1::after {
    content: '';
    width: 30px;
    height: 4px;
    border-radius: 3px;
    background: #EC605E;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
}

.input-field {
    background-color: cornsilk;
    margin: 15px 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    transition: max-height 0.5s;
    overflow: hidden;
}

input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    padding: 18px 15px;
    color: black;
}

input::placeholder {
    color: black;
}

.input-field i {
    margin-left: 15px;
    color: #EC605E;
}

form p {
    color: #FFFFFF;
    text-align: left;
    font-size: 13px;
}

form p a {
    color: #EC605E;
    margin-left: 5px;
}

.btn-field {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.btn-field button {
    flex-basis: 48%;
    font-size: 16px;
    background-color: #EC605E;
    color: #FFFFFF;
    height: 40px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: background 1s;
}

.input-group {
    height: 250px;
}

En un archivo README.md, generalmente no se incluyen el CSS y JavaScript completos, sino que se hace una referencia a ellos y se da una breve descripción de lo que hacen. Sin embargo, si prefieres incluirlos para mayor claridad, puedes hacerlo. Aquí tienes una versión que incluye el CSS y JavaScript completos dentro del README.md.

markdown
Copy code
# Proyecto de Login

Este es un proyecto de una interfaz de Login y Registro utilizando HTML, CSS y JavaScript.

## Descripción

Este proyecto proporciona una interfaz de usuario para el login y el registro de usuarios. La interfaz está diseñada con CSS para darle un estilo atractivo y funcional, y utiliza JavaScript para manejar la lógica de cambio entre las vistas de Login y Registro.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: Contiene la estructura HTML de la interfaz de usuario.
- `style.css`: Contiene los estilos CSS para la interfaz de usuario.
- `script.js`: Contiene el código JavaScript para la funcionalidad de cambio entre Login y Registro.

## Cómo usar

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.

### HTML

El archivo `index.html` contiene la estructura básica del formulario de login y registro:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <div class="form-content">
            <h1 id="title">Login</h1>
            <form>
                <div class="input-group">
                    <div class="input-field" id="nameInput">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Nombre">
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Correo">
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Contraseña">
                    </div>
                    <p>Olvidaste tu Contraseña?? <a href="#">Click Aquí</a></p>
                </div>
                <div class="btn-field">
                    <button id="signUp" type="button">Registro</button>
                    <button id="signIn" type="button" class="disable">Login</button>
                </div>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
CSS
El archivo style.css contiene los estilos que se aplican a la interfaz:

css
Copy code
* {
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
    text-decoration: none;
}

.container {
    width: 100%;
    height: 100vh;
    background-image: url(images/fondoIng.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-content {
    width: 100%;
    max-width: 450px;
    background-color: #EBDEA9;
    padding: 50px 60px 70px;
    text-align: center;
    border-radius: 25px;
}

.form-content h1 {
    font-size: 30px;
    margin-bottom: 60px;
    color: tomato;
    position: relative;
}

.form-content h1::after {
    content: '';
    width: 30px;
    height: 4px;
    border-radius: 3px;
    background: #EC605E;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
}

.input-field {
    background-color: cornsilk;
    margin: 15px 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    transition: max-height 0.5s;
    overflow: hidden;
}

input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    padding: 18px 15px;
    color: black;
}

input::placeholder {
    color: black;
}

.input-field i {
    margin-left: 15px;
    color: #EC605E;
}

form p {
    color: #FFFFFF;
    text-align: left;
    font-size: 13px;
}

form p a {
    color: #EC605E;
    margin-left: 5px;
}

.btn-field {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.btn-field button {
    flex-basis: 48%;
    font-size: 16px;
    background-color: #EC605E;
    color: #FFFFFF;
    height: 40px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: background 1s;
}

.input-group {
    height: 250px;
}

.btn-field button.disable {
    background-color: honeydew;
    color: black;
}
JavaScript
El archivo script.js contiene la lógica para cambiar entre las vistas de Login y Registro:
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

.btn-field button.disable {
    background-color: honeydew;
    color: black;
}

