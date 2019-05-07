import { userData, onUsuarioLoggeado } from '../controller/controller-Firebase.js'
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
    <button class="button" id="log-out"> Cerrar Sesion </button>
    `;
  } else {
    template = `<h3 class="text">Bienvenido ${user.email} </h3>
    <img class="profile-logo" src="./img/avatar.png">

    <div>
    <input type="text" id="input-post">
    <button class="button" id="btn-post"> compartir </button>
    </div>
    <button class="button" id="log-out"> Cerrar Sesion </button>
    `;
  }
  pageMain.innerHTML = template;
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  btnAddPost.addEventListener('click', addPostSubmit);
  const btnCerrar = pageMain.querySelector('#log-out');
  btnCerrar.addEventListener('click', logOutSubmit)
  return pageMain;
}