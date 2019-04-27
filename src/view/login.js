//import {  } from './getValue';

import { registroUsuarioNuevo, ingresarUsuarioExistente, ingresoDatos, cerrarSession, iniciarSessionFaceBook } from './data.js';

const keyFirebase = () => {
  let config = {
    apiKey: "AIzaSyBrEkqM2kN4YhK8ALD4rGDziPene6zeWhQ",
    authDomain: "red-social-ecologica.firebaseapp.com",
    databaseURL: "https://red-social-ecologica.firebaseio.com",
    projectId: "red-social-ecologica",
    storageBucket: "red-social-ecologica.appspot.com",
    messagingSenderId: "246884214989"
  }
  firebase.initializeApp(config);
}
keyFirebase();

const buttonSesion = document.getElementById("button-sesion");

buttonSesion.addEventListener("click", () => {
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;
  registroUsuarioNuevo(inputEmail, inputPassword)
});


const pagOne = document.getElementById("pag-one");


/* let dataBase = firebase.database();
let userConect = null; */
const registro = document.getElementById('registro');
/* registro.addEventListener('click', () => {
  pagOne.innerHTML = ' ';
  pagOne.innerHTML += `
  <section>
  <p>Correo Electronico:</p><input type="email" id="email" placeholder="Ingrese email">
  <p>Crea tu contraseña:</p><input type="password" id="password" placeholder="Ingrese contraseña">
  <br>
  <br>
  <button id="button-sesion">REGISTRARME</button>
  </section>
  `;
}); */




/* var app = firebase.initializeApp(config);
 var auth = app.auth();
 var ui = new firebaseui.auth.AuthUI(auth);
 */

const btnIngresar = document.getElementById('ingresar');
btnIngresar.addEventListener('click', () => {
  const email = document.getElementById('email-login').value;
  const contraseña = document.getElementById('contraseña-login').value;
  ingresarUsuarioExistente(email, contraseña);
});

ingresoDatos();

/*
const agregarDataBase = (uid, email) => {
  let conectador = userConect.push({
    uid : uid,
    email : email
  });
}
*/
const aparece = () => {
  const container = document.getElementById('container');
  container.innerHTML = `<p>Bienvenido!</p>
<button id= "cerrar"> cerrar sesión  </button>`;
};
aparece();

const btnCerrar = document.getElementById('cerrar');
btnCerrar.addEventListener('click', () => {
  cerrarSession();
})

const btnFb =  document.getElementById('Facebook');
btnFb.addEventListener('click', () => {
<<<<<<< HEAD
  var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
    .then(datosUsuario =>{
        console.log(datosUsuario.user.displayName);
        console.log(datosUsuario.user.photoURL);
        }).catch(err =>{
        console.log(err);
    })

}); 
=======
  iniciarSessionFaceBook();
});  
>>>>>>> 8d5f7b0da5b88d5021f57f7a198d7b4f5945e383
