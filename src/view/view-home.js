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
    template = `
    <nav>Cerrar Sesion</nav>
    <h3 class="text">Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">

    <div>
    <textarea name="textarea" rows="10" cols="50" id="input-post"></textarea>
    <button class="button" id="btn-add-post"> compartir </button>  
    </div>
    <div id= post-content>
    </div>
    <button class="button" id="log-out"> Cerrar Sesion </button>
    `;
  } else {
    template = `
    <nav class="menu">
    <ul>
    <a class="menu-items" href=""><h4>${user.email}</h4></a>
    <a class="menu-items" href="#/home"><h4>PureLife</h4></a>
    <a class="menu-items" href="#/"><h4>cerrar sesion</h4></a>
    </ul>
    </nav>
    <img class="profile-logo" src="./img/avatar.png">
    <h3 class="text">Bienvenido ${user.email} </h3>
    <div>
    <textarea name="textarea" rows="10" cols="40" id="input-post"></textarea>
    <button class="button" id="btn-add-post"> compartir </button>
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
  
  const contentPost = (data) => {
    let h3 = document.createElement('h3');
    h3.textContent = data; 
    divPost.appendChild(h3);
  }
  
  post().then((snapshot) => {
    snapshot.docs.forEach((post)=> contentPost(post.data().post));
    });
   
  btnCerrar.addEventListener('click', logOutSubmit)
  /* const post = firebase.firestore().collection('post').get().then((snapshot) => {
   snapshot.docs.forEach((post)=> { console.log(post.data().post);
   });
    
  }) */
  return pageMain;
}