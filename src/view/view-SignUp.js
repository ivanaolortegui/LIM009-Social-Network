import { signInOnSubmit, facebookSubmit } from './view-controller.js'

export default () => {
    const body = document.createElement('div');
  const template = `<header>
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
  <p>¿No tienes una cuenta? <button id="registry">Regístrate.</button></p>
  <h4>O inicia sesión con...</h4>
  <button id="Facebook"><img class="icon-facebook" src="./img/facebook.png"></button>
  <div id="container">
  </div>
</section>`;
body.innerHTML = template;
const btnRegistro = body.querySelector('#registry');
btnRegistro.addEventListener('click',signInOnSubmit);
const btnFacebook = body.querySelector('#Facebook');
btnFacebook.addEventListener('click', facebookSubmit);
return body 
}

