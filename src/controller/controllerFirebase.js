
export const registroUsuarioNuevo = (email, contraseña) =>
  firebase.auth().createUserWithEmailAndPassword(email, contraseña)


export const ingresarUsuarioExistente = (email, contraseña) => 
  firebase.auth().signInWithEmailAndPassword(email, contraseña)



/* export const ingresoDatos = () =>  {
  return new Promise((resolve, reject) =>  {
  firebase.auth().onAuthStateChanged((user) => {
     if(user)  {
       return resolve(user);
     }
     else  {
      return reject('error')
     }
   })
  })
}; */


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
// toda la funcion addpublication me retorna una premesa y por eso en el otro lado se le hace un then si fue exitosa

export const onUsuarioLoggeado = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)
    }
  })
}