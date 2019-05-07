
import { logupSubmit } from './view-controller.js'


export default () => {
  const divSignUp = document.createElement('div');
  const templateImput = `<div class='block-container'>
  <header  class="text">
  <img class="logo" src="./img/logo.png">
  </header>
  <section class="text" id="pag-one">
  <p><img class="titulo" src="./img/titulo.png"></p>
  <input class="login" id="email" type="email" placeholder="Email">
  <input class="login" id="contraseña" type="password" placeholder="Password">
  <button class="button" id="sign-up"> Registrar </button>
  </section>
  </div>
     `;

  divSignUp.innerHTML = templateImput;
  const btn = divSignUp.querySelector('#sign-up');
  btn.addEventListener('click', logupSubmit)
  return divSignUp;
}