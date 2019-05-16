import { userData } from '../controller/controller-Firebase.js'
import { addPostSubmit } from './view-controller.js'

import itemPost from './post.js'


export const home = (post) => {
  const pageMain = document.createElement('div');
  const user = userData();
  /* let us;
  onUsuarioLoggeado((user) => console.log(user))
  console.log(us); */

  
  const template = `
    <nav class="menu">
    <ul>
    <a class="menu-items" href=""><h4>&#x1F464 ${user.displayName ? `${user.displayName}` :
      `${user.email}`}</h4></a>
    <a class="menu-items" href="#/home"><h4>PureLife</h4></a>
    <a class="menu-items" href="#/signOut"><h4>cerrar sesion</h4></a>
    <a class="menu-menu" href=""><h1>&#9776</h1></a>
    </ul>
    </nav>
    <article class="block-profile">
    <img class="profile-logo" src="${user.photoURL ? `${user.photoURL}` :
      `./img/avatar.png`}">
    <h3 class="text">Bienvenido ${user.displayName ? `${user.displayName}` :
      `${user.email}`} </h3>
    </article>
    <div class="block-home">
    <textarea name="textarea" rows="8" cols="50" id="input-post" placeholder="¿Qué estas pensando?"></textarea>
    <select id="privacy-select"> 
    <option value="public" > Público &#128101 </option>
    <option value="private">Privado &#128274</option> 
    </select> 
    <button class="button" id="btn-add-post"> compartir </button>
    <button class="hidden" id="btn-edit-post"> Editar </button>  
    </div>
    <div class="block-home" id= "post-content">
    </div>`;

  pageMain.innerHTML = template;
   const userName = user.displayName ? user.displayName : user.email;
  const userId = user.uid;
  let numberLike = 0;
  const privacySelect = pageMain.querySelector('#privacy-select');
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  const divPost = pageMain.querySelector('#post-content');
  post.forEach((post, index) => {
    divPost.appendChild(itemPost(post, index, userId))
  });
  btnAddPost.addEventListener('click', () => {
    const privacySelectValue = privacySelect.value
    addPostSubmit(userId, userName, privacySelectValue, numberLike)
  }); 
  return pageMain;
}