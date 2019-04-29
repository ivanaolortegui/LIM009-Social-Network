import { registroUsuarioNuevo } from './data.js'

const pagOne = document.getElementById("pag-one");
const registro = document.getElementById('registro');


export const pintRegistro = () => {
  registro.addEventListener('click', () => {
    pagOne.innerHTML = ' ';
    pagOne.innerHTML += `
  <section class="block-two">
  <h3>Empieza registrandote aquí:</h3>
  <p class="text">Correo Electronico:</p><input type="email" class="style-input" id="email" placeholder="Ingrese email">
  <p class="text">Crea tu contraseña:</p><input type="password" class="style-input" id="password" placeholder="Ingrese contraseña">
  <br>
  <button class="button-registry" id="button-sesion">REGISTRARME</button>
  
  </section>
  `;

    const buttonSesion = document.getElementById("button-sesion")
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")

    buttonSesion.addEventListener('click', () => {

      registroUsuarioNuevo(inputEmail.value, inputPassword.value)
      pagOne.innerHTML = ' ';
      pagOne.innerHTML += `<h3>Bienvenido ${inputEmail.value}</h3>`;
      // window.location.reload();
    })

  });
}


