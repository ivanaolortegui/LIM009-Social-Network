//import sing from '../controller/controller-btn.js'
import {registroUsuarioNuevo} from '../controller/controllerFirebase.js'


export default () => {
const divSignUp = document.createElement('div');
  const templateImput = ` <header>
  <img class="logo" src="./img/logo.png">
  <p><img class="titulo" src="./img/titulo.png"></p>
  </header>
  <section class="block-two" id="pag-one"></section>
  <input class="style-input" id="email" type="email" placeholder="ingresa tu email">
     <br>
     <input class="style-input" id="contraseña" type="password" placeholder="Ingrese contraseña">
     <br>
     <button class="button-registry" id="registrar"> Registrar </button> 
     `;

     divSignUp.innerHTML = templateImput;   
     const btn = divSignUp.querySelector('#registrar');
    btn.addEventListener('click',() => {
      const email = divSignUp.querySelector('#email').value;
      const password = divSignUp.querySelector('#contraseña').value;
     registroUsuarioNuevo(email,password).then(()=> window.location.hash = '#/home')
     .catch((err) => console.log(err))

     console.log('holamm')
    })
        
  return divSignUp;
}