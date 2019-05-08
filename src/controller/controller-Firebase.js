
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



/* export const post = () => {
  return firebase.firestore().collection('post').get()
} */
// toda la funcion addpublication me retorna una premesa y por eso en el otro lado se le hace un then si fue exitosa

export const onUsuarioLoggeado = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)
    }
  })
}

export const addPost = (post) => {
  //inicializamos firestore y llammos a la funcion colectioncon el nombre de la coleccion llamada usuario y con aDD agregamos 
  // los campos post 
 firebase.firestore().collection('post').add({
   post : post
 })
}

export const getPost = (callback) =>
  firebase.firestore().collection('post')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.docs.forEach((post)=> {
        data.push({ post: post.data().post })
      });
      callback(data);
    }); 


  /*   const getColection = () => {
      firebase.firestore().collection('post').onSnapshot((querySnapshot) => {
        divPost.innerHTML = '';
        querySnapshot.docs.forEach((post)=> {
          let newDiv = document.createElement('div');
          newDiv.innerHTML += post.data().post; 
          divPost.appendChild(newDiv);
          
        });
      })
    } */