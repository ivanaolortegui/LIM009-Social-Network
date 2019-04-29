
export const allPageOne = () => {
  const allPage = document.createElement("div");
  const pageOne = `<header>
    <img class="logo" src="./img/logo.png">
    <p><img class="titulo" src="./img/titulo.png"></p>
    </header>
    <section class="block-two" id="pag-one">
    <h4>Bienvenida a PureLife, la red donde reciclar es divertido.</h4>
    <input class="style-input" id="email-login" type="email" placeholder="ingresa tu email">
    <br>
    <input class="style-input" id="contraseña-login" type="password" placeholder="Ingrese contraseña">
    <br>
    <button class="button-registry" id="ingresar"> Log In </button>
    <p>¿No tienes una cuenta? <button id="registro">Regístrate.</button></p>
    <h4>O inicia sesión con...</h4>
    <button class="button1" id="Facebook"><img class="icon-facebook" src="./img/facebook.png"></button>
    <button class="button1" id="Gmail"><img class="icon-gmail" src="./img/gmail.png"></button>
    <div id="container">
    </div>
  </section>`;

  allPage.innerHTML = pageOne;

  const buttonregistry = allPage.querySelector('#registro')

  buttonregistry.addEventListener('click');
  return allPage
};
//     pagOne.innerHTML = ' ';
//     pagOne.innerHTML += `
//     <section class="block-two">
//     <h3>Empieza registrandote aquí:</h3>
//     <p class="text">Correo Electronico:</p><input type="email" class="style-input" id="email" placeholder="Ingrese email">
//     <p class="text">Crea tu contraseña:</p><input type="password" class="style-input" id="password" placeholder="Ingrese contraseña">
//     <br>
//     <button class="button-registry" id="button-sesion">REGISTRARME</button>
//     </section>
//     `;
//   });
// };
// });
// import { registroUsuarioNuevo } from './data.js'

// const pagOne = document.getElementById("pag-one");
// const registro = allPage.querySlector('button');

// export const pintRegistro = () => {

//     registro.addEventListener('click', () => {
//         pagOne.innerHTML = ' ';
//         pagOne.innerHTML += `
//   <section class="block-two">
//   <h3>Empieza registrandote aquí:</h3>
//   <p class="text">Correo Electronico:</p><input type="email" class="style-input" id="email" placeholder="Ingrese email">
//   <p class="text">Crea tu contraseña:</p><input type="password" class="style-input" id="password" placeholder="Ingrese contraseña">
//   <br>
//   <button class="button-registry" id="button-sesion">REGISTRARME</button>

//   </section>
//   `;
//     });

//         const buttonSesion = document.getElementById("button-sesion")
//         const inputEmail = document.getElementById("email")
//         const inputPassword = document.getElementById("password")

//         buttonSesion.addEventListener('click', function () {
//             registroUsuarioNuevo(inputEmail.value, inputPassword.value)
//             pagOne.innerHTML = ' ';
//             pagOne.innerHTML += 'Bienvenida ' + inputEmail.value;
//             // window.location.reload();
//         })

//     });