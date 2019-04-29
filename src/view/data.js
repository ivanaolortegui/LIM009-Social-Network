export const registroUsuarioNuevo = (email, contraseña) => {
  firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function (bien) {
    console.log(email, contraseña);
  })
    // Handle Errors here.
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}


export const ingresarUsuarioExistente = (email, contraseña) => {
  firebase.auth().signInWithEmailAndPassword(email, contraseña).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}


export const ingresoDatos = () => {
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

export const cerrarSession = () => {
  firebase.auth().signOut().then(function () {
    console.log('Signed Out');
  }, function (error) {
    console.error('Sign Out Error', error);
  });
}

export const iniciarSessionFaceBook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
  firebase.auth().signInWithPopup(provider)
    .then(datosUsuario => {
      console.log(datosUsuario.user.displayName);
      console.log(datosUsuario.user.photoURL);
    }).catch(err => {
      console.log(err);
    })

}