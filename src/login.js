
(function() {
  let config = {
    apiKey: "AIzaSyBrEkqM2kN4YhK8ALD4rGDziPene6zeWhQ",
    authDomain: "red-social-ecologica.firebaseapp.com",
    databaseURL: "https://red-social-ecologica.firebaseio.com",
    projectId: "red-social-ecologica",
    storageBucket: "red-social-ecologica.appspot.com",
    messagingSenderId: "246884214989"
  }
 firebase.initializeApp(config);   
})();
let dataBase = firebase.database();
let userConect= null;
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


const buttonSesion = document.getElementById("button-sesion");
const pagOne = document.getElementById("pag-one");

buttonSesion.addEventListener("click", () => {
   const inputEmail = document.getElementById("email").value;
   const inputPassword = document.getElementById("password").value;
   firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword)
   .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
});

  

/* var app = firebase.initializeApp(config);
 var auth = app.auth();
 var ui = new firebaseui.auth.AuthUI(auth);
 */
   
const btnIngresar = document.getElementById('ingresar');
btnIngresar.addEventListener('click', () => {
  const email = document.getElementById('email-login').value;
  const contraseña = document.getElementById('contraseña-login').value;
  firebase.auth().signInWithEmailAndPassword(email, contraseña, ).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
})


const ingresoDatos = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('sesion iniciado');
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      userConect = dataBase.ref("/user");
      agregarDataBase(uid, email)
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario');

      // ...
    }
  });

}
ingresoDatos();

const agregarDataBase = (uid, email) => {
  let conectador = userConect.push({
    uid : uid,
    email : email
  });
}

const aparece = () => {
  const container = document.getElementById('container');
  container.innerHTML = `<p>Bienvenido!</p>
<button id= "cerrar"> cerrar sesión  </button>`;
};
aparece();

const btnCerrar = document.getElementById('cerrar');
btnCerrar.addEventListener('click', () => {
  firebase.auth().signOut().then(function () {
    console.log('Signed Out');
  }, function (error) {
    console.error('Sign Out Error', error);
  });
})

const btnFb =  document.getElementById('Facebook');
btnFb.addEventListener('click', () => {
  var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
    .then(datosUsuario =>{
        console.log(datosUsuario.user.displayName);
        }).catch(err =>{
        console.log(err);
    })

}); 