import {
  loginSubmit,
  loginWithGmailSubmit, 
  loginWithFacebookSubmit
} from './view-controller.js'

export default () => {
  const body = document.createElement('div');
  const template = `
  <div class = "block-container flex-collumn">
    <header>
      <img class="logo" src="./img/fond.png" alt="logo-principal">
    </header>
    <section class="block-login flex-collumn">
     <img class="titulo" src="./img/logo-hoja.png">
      <h4 class="text" >Bienvenida a PureLife, la red donde reciclar es divertido.</h4>
      <p class="error-message" id="error-message"></p>
      <input class="login-input" id="email-login" type="email" placeholder="   &#9993    Email">
      <input class="login-input" id="password-login" type="password" placeholder="   &#128274     Password">
      <button class="button" id="log-in"> Log In </button>
      <article class= "social flex-collumn ">
        <h4 class="text">O inicia sesión con...</h4>
        <div>
        <a id="Facebook"><img class="icon-social" src="./img/facebook.png"></a>
        <a" id="Gmail"><img class="icon-social" src="./img/gmail.png"></a>
        </div>
      </article>
      <h4 class="text" >¿No tienes una cuenta?<a href="#/signUp"> Regístrate.</a></h4>
    </section>
    </div>
  `;
  body.innerHTML = template;

  const btnLogIn = body.querySelector('#log-in')
  btnLogIn.addEventListener('click', loginSubmit);

  const btnGmail = body.querySelector('#Gmail');
  btnGmail.addEventListener('click', loginWithGmailSubmit)

  const btnFacebook = body.querySelector('#Facebook');
  btnFacebook.addEventListener('click', loginWithFacebookSubmit);

  return body;
}

