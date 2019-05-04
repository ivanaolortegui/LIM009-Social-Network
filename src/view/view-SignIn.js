
import { iniciarSessionFaceBook, ingresarUsuarioExistente, iniciarSesionGmail } from '../controller/controllerFirebase.js'

export const loginConFbOnClick = () => {
  iniciarSessionFaceBook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch(err => {
      console.log(err);
    });
}

export const loginConGmailOnClick = () => {
  iniciarSesionGmail().then(() => {   
    window.location.hash = '#/home';
  }).catch(err => {
    console.log(err);
  });

}

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
  <input class="style-input" id="password-login" type="password" placeholder="Ingrese contraseña">
  <br>
  <a href="#/ingresar"><button class="button-registry" id="ingresar"> Log In </button></a>
  <p>¿No tienes una cuenta?<a href="#/registro">  Regístrate.</a></p>
  <h4>O inicia sesión con...</h4>
  <button class="button-none" id="Facebook"><img class="icon-facebook" src="./img/facebook.png"></button>
  <button class="button-none" id="Gmail"><img class="icon-gmail" src="./img/gmail.png"></button>
  <div id="container">
  </div>
</section>`;
  body.innerHTML = template;

  const btnLogIn = body.querySelector('#ingresar')
  btnLogIn.addEventListener('click', () => {
    const emailUser = body.querySelector('#email-login').value;
    const passwordUser = body.querySelector('#password-login').value;
    ingresarUsuarioExistente(emailUser, passwordUser).then(() => {
      window.location.hash = '#/home';
    }).catch(err => {
      console.log(err);
    });
  })
 
   const btnGmail = body.querySelector('#Gmail');
   btnGmail.addEventListener('click', loginConGmailOnClick)

  const btnFacebook = body.querySelector('#Facebook');
  btnFacebook.addEventListener('click', loginConFbOnClick);
  return body
}

