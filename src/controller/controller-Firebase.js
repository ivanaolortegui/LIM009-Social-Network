
export const singUp = (email, contraseña) =>
  firebase.auth().createUserWithEmailAndPassword(email, contraseña)


export const signIn = (email, contraseña) => 
  firebase.auth().signInWithEmailAndPassword(email, contraseña)


export const signOut = () => firebase.auth().signOut()

export const signInWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

// new firebase.auth.FacebookAuthProvider() me retorna un objeto con el id del provedor que es facebook 
export const signInWithGmail = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const userData = () => firebase.auth().currentUser;


// firebase.auth().currentUser me retorna un objeto con todo la informacio que ha ingresado

export const addPost = (post) => {
  firebase.firestore().collection('post').add({
    post : post
  })
}

export const post = () => {
  return firebase.firestore().collection('post').get()
}
// toda la funcion addpublication me retorna una premesa y por eso en el otro lado se le hace un then si fue exitosa

export const onUsuarioLoggeado = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)
    }
  })
}