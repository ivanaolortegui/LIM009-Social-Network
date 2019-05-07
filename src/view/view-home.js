import { userData,
  post, onUsuarioLoggeado } from '../controller/controller-Firebase.js'
import {
  logOutSubmit,
  addPostSubmit
} from './view-controller.js'

export const home = () => {
  const pageMain = document.createElement('div');
  const user = userData();
  /* let us;
  onUsuarioLoggeado((user) => console.log(user))
  console.log(us); */

  let template;
  if (user.displayName && user.photoURL) {
    template = `<h3 class="text">Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">

    <div>
    <input type="text" id="input-post">
    <button class="button" id="btn-add-post"> compartir </button>  
    </div>
    <div id= post-content>
    </div>
    <button class="button" id="log-out"> Cerrar Sesion </button>
    `;
  } else {
    template = `<h3 class="text">Bienvenido ${user.email} </h3>
    <img class="profile-logo" src="./img/avatar.png">

    <div>
    <input type="text" id="input-post">
    <button class="button" id="btn-post"> compartir </button>
    </div>
    <div id= post-content>
    </div>
    <button class="button" id="log-out"> Cerrar Sesion </button>
    `;
  }
  pageMain.innerHTML = template;
  const divPost = pageMain.querySelector('#post-content');
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  btnAddPost.addEventListener('click', addPostSubmit);
  const btnCerrar = pageMain.querySelector('#log-out');
  
  let h3 = document.createElement('h3')
  post().then((snapshot) => {
    snapshot.docs.forEach((post)=> h3.textContent += post.data().post);
    });
   
  
  divPost.appendChild(h3);



  btnCerrar.addEventListener('click', logOutSubmit)
  /* const post = firebase.firestore().collection('post').get().then((snapshot) => {
   snapshot.docs.forEach((post)=> { console.log(post.data().post);
   });
    
  }) */
  return pageMain;
}