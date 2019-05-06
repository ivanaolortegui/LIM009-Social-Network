
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
  const template = `<div class="block-container">
  <header class="text" >
  <img class="logo" src="./img/logo.png" alt="logo-principal">
  </header>
  <section class="text" id="pag-one">
  <p><img class="titulo" src="./img/titulo.png"></p>
  <h4 class="text" >Bienvenida a PureLife, la red donde reciclar es divertido.</h4>
  <input class="login" id="email-login" type="email" placeholder="Email">
  <input class="login" id="password-login" type="password" placeholder="Password">
  <a href="#/ingresar"><button class="button" id="ingresar"> Log In </button></a>
  <article>
  <h4 class="text">O inicia sesión con...</h4>
  <a id="Facebook"><img class="icon-social" src="./img/facebook.png"></a>
  <a" id="Gmail"><img class="icon-social" src="./img/gmail.png"></a>
  </article>
  <p class="text" >¿No tienes una cuenta?<a href="#/registro">  Regístrate.</a></p>
  </section>
  </div>`;
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

