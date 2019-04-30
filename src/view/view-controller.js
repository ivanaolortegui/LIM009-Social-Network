import { registroUsuarioNuevo, iniciarSessionFaceBook } from '../controller/controllerFirebase.js'


export const signInOnSubmit = () => {
  const pageMain = document.querySelector('#pag-one');
  const templateImput = ` <input class="style-input" id="email-login" type="email" placeholder="ingresa tu email">
   <br>
   <input class="style-input" id="contraseña-login" type="password" placeholder="Ingrese contraseña">
   <br>
   <button class="button-registry" id="registrar"> Registrar </button>
   `;
  pageMain.innerHTML = templateImput;
  const btnRegistrar = document.querySelector('#registrar');
  btnRegistrar.addEventListener('click', () => {
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#contraseña-login').value;
    registroUsuarioNuevo(email, password);
  })

}

export const facebookSubmit = () => {
  iniciarSessionFaceBook();
}
