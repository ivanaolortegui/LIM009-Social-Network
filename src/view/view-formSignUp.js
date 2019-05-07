
import {registroUsuarioNuevo} from '../controller/controllerFirebase.js'


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
  <button class="button" id="registrar"> Registrar </button>
  </section>
  </div>
     `;

     divSignUp.innerHTML = templateImput;   
     const btn = divSignUp.querySelector('#registrar');
    btn.addEventListener('click',() => {
      const email = divSignUp.querySelector('#email').value;
      const password = divSignUp.querySelector('#contraseña').value;
     registroUsuarioNuevo(email,password).then(()=> window.location.hash = '#/home')
     .catch((err) => console.log(err))
    })
        
  return divSignUp;
}