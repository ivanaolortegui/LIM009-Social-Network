
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

export const onUsuarioLoggeado = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // TODO: localStorage.setItem might throw an exception if the user has blocked local storage.
      // Usar try..catch
      callback(user)
    }
  })
}

export const addPost = (post, userId, user,privacySelectValue) => {
  //inicializamos firestore y llammos a la funcion colectioncon el nombre de la coleccion llamada usuario y con aDD agregamos 
  // los campos post 
 firebase.firestore().collection('post').add({
   userId :userId,
   user : user,
   post : post,
   privacy : privacySelectValue
 })
}

export const getPost = (callback) =>
  firebase.firestore().collection('post')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.docs.forEach((post)=> {
        data.push({ id:post.id, post: post.data().post, user: post.data().user,  userId: post.data().userId})
      });   
      callback(data);
    }); 

export const deletePost = () =>
  firebase.firestore().collection('post').doc(id).delete()
  .then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

 // firebase.auth().currentUser me retorna un objeto con todo la informacio que ha ingresado

/* export const post = () => {
  return firebase.firestore().collection('post').get()
} */
// toda la funcion addpublication me retorna una premesa y por eso en el otro lado se le hace un then si fue exitosa