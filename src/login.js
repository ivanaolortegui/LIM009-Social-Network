const buttonSesion = document.getElementById("button-sesion");
const registro = document.getElementById("registro");
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

(function () {
/* var app = firebase.initializeApp(config);
 var auth = app.auth();
 var ui = new firebaseui.auth.AuthUI(auth);
 */
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
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
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'index.html',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  ui.start('#firebaseui-auth-container', uiConfig);
})()

registro.addEventListener("click", () => {
  pagOne.innerHTML = ' ';
  pagOne.innerHTML += `
  <section>
  <p>Nombres:</p><input type="text"placeholder="Nombres y Apellidos">
  <p>Correo Electronico:</p><input type="email" id="email" placeholder="Ingrese email">
  <p>Crea tu contraseña:</p><input type="password" id="password" placeholder="Ingrese contraseña">
  <br>
  <br>
  <button>REGISTRARME</button>
  </section>
  `
})