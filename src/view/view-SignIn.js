
import { changeView } from '../controller/router.js'
import { iniciarSessionFaceBook } from '../controller/controllerFirebase.js'
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
  <a href="#/ingresar"><button class="button-registry" id="ingresar"> Log In </button></a>
  <p>¿No tienes una cuenta?<a href="#/registro">  Regístrate.</a></p>
  <h4>O inicia sesión con...</h4>
  <button id="Facebook"><img class="icon-facebook" src="./img/facebook.png"></button>
  <div id="container">
  </div>
</section>`;
  body.innerHTML = template;
  window.addEventListener('hashchange', () => changeView(window.location.hash));
  const btnFacebook = body.querySelector('#Facebook');
  btnFacebook.addEventListener('click', () => {
    iniciarSessionFaceBook();
  });
  return body
}

