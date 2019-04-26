let appFirebase = {};
(function () {
  let config = {
    apiKey: "AIzaSyBrEkqM2kN4YhK8ALD4rGDziPene6zeWhQ",
    authDomain: "red-social-ecologica.firebaseapp.com",
    databaseURL: "https://red-social-ecologica.firebaseio.com",
    projectId: "red-social-ecologica",
    storageBucket: "red-social-ecologica.appspot.com",
    messagingSenderId: "246884214989"
  };
  firebase.initializeApp(config); // conectarme con la cong
  appFirebase = firebase
  // var app = firebase.initializeApp(config);
  //var auth = appFirebase.auth();
  //var ui = new firebaseui.auth.AuthUI(auth);  
})();

const btnRegistrar = document.getElementById('registrar');
btnRegistrar.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;
  /* firebase.auth().createUserWithEmailAndPassword(email, contraseña)

  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);

    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  }); */
  let constraseñaData = firebase.database().ref();
  console.log(constraseñaData);
  constraseñaData.on("value", function(snapshot) {
   console.log(snapshot.child('convalidaciones').val().push({
    contrasena : contraseña
  }));
  
    console.log(snapshot.child('convalidaciones').val());
    
 }, function (error) {
    console.log("Error: " + error.code);
 });
  
  
})


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
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario');

      // ...
    }
  });

}

ingresoDatos();

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
    .then(function(datosUsuario){
        console.log(datosUsuario)
    }).catch(function(err){
        console.log(err)
    })

})
/* const verificar = () => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function () {
    console.log('enviando correo');   
    // Email sent.
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
} */
 // var ui = new firebaseui.auth.AuthUI(firebase.auth());
/* var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'index.html',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
})()
*/