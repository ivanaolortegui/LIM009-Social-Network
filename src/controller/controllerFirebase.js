
export const registroUsuarioNuevo = (email, contraseña) =>
  firebase.auth().createUserWithEmailAndPassword(email, contraseña)


export const ingresarUsuarioExistente = (email, contraseña) => 
  firebase.auth().signInWithEmailAndPassword(email, contraseña)


export const ingresoDatos = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('sesion iniciado');
      var displayName = user.displayName;
      var email = user.email;
      console.log(email);
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
  firebase.auth().signOut().then(reponse => {
    console.log('Signed Out');
    window.location.hash = '#/';
  }, function (error) {
    console.error('Sign Out Error', error);
  });
}

export const iniciarSessionFaceBook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
  firebase.auth().signInWithPopup(provider)
    .then(datosUsuario => {
      window.location.hash = '#/home';
    }).catch(err => {
      console.log(err);
    })
}