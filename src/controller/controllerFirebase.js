
export const registroUsuarioNuevo = (email, contraseña) =>
  firebase.auth().createUserWithEmailAndPassword(email, contraseña)



export const ingresarUsuarioExistente = (email, contraseña) => 
  firebase.auth().signInWithEmailAndPassword(email, contraseña)



<<<<<<< HEAD
// export const ingresoDatos = () => {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       console.log('sesion iniciado');
//       var displayName = user.displayName;
//       var email = user.email;
//       console.log(email);
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//     } else {
//       // User is signed out.
//       console.log('no existe usuario');
//     }
//   });

// }
=======
export const ingresoDatos = () =>  {
  return firebase.auth().onAuthStateChanged;
  }
/*     if (user) {
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
 */

>>>>>>> 6b8fdb75fb8f8bbf2873c09f55073fff400ba2b9

export const cerrarSession = () => firebase.auth().signOut()

export const iniciarSessionFaceBook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}


// new firebase.auth.FacebookAuthProvider() me retorna un objeto con el id del provedor que es facebook 
export const iniciarSesionGmail = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
export const userData = () => firebase.auth().currentUser;


// firebase.auth().currentUser me retorna un objeto con todo la informacio que ha ingresado

export const addPublication = (publication) => {
  firebase.firestore().collection('publication').add({
    publication : publication

  })

}