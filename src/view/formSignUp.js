export default () => {
const divSignUp = document.createElement('div');
  const templateImput = ` <header>
  <img class="logo" src="./img/logo.png">
  <p><img class="titulo" src="./img/titulo.png"></p>
  </header>
  <section class="block-two" id="pag-one"></section><input class="style-input" id="email-login" type="email" placeholder="ingresa tu email">
     <br>
     <input class="style-input" id="contraseña-login" type="password" placeholder="Ingrese contraseña">
     <br>
     <button class="button-registry" id="registrar"> Registrar </button>
     `;

     divSignUp.innerHTML = templateImput;
  return divSignUp;
}