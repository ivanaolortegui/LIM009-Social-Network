import { userData } from '../controller/controller-Firebase.js'
import { addPostSubmit } from './view-controller.js'

import itemPost from './post.js'
 // Funcion para exportar contenido del home
export  default(post) => {
  const pageMain = document.createElement('div');
  const user = userData();
  const template = `
  
  <header class = "header">
    <input type="checkbox" class ="hidden " id="btn-menu">
    <label class="cursor" for="btn-menu"> &#9776 </label>
      <nav class="menu-menu">
        <ul class="menu">
          <li class="menu-items"> <a class="menu-items"  > <h4  >  ${user.displayName ? `${user.displayName}` : `${user.email}`} </h4></a> </li>
          <li class="menu-items"><a class="menu-items" href="#/home"> <h4> <img class="icon-menu" src="./img/recycle.png"> PureLife </h4> </a> </li>
          <li class="menu-items"><a class="menu-items" href="#/signOut"><h4> <img class="icon-menu" src="./img/logout.png"> cerrar sesion </h4> </a> </li>
        </ul>
      </nav>
      </header>
     
    <section class = "container flex-collumn">
    <div class="content-profile ">
    <img class=" hidden show" src="./img/planeta.jpeg">
    <article class="block-profile show">
      <img class="profile-logo" src="${user.photoURL ? `${user.photoURL}` : `./img/avatar.png`}">
      <h3>   ${user.displayName ? `${user.displayName}` : `${user.email}`} </h3>
    </article>
    </div>
     <div class="block-post " >
      <form class="form-post line-black">
      <textarea class="share-post line-black" name="textarea" rows="8" cols="50" id="input-post" placeholder="¿Qué estas pensando?"></textarea>
      <div class="container-btn">
      <label for="file"> <img  src="./img/camara.png"> </label>
      <input type="file" class="hidden" type="file" id="file" name="file" 
      accept="image/png, image/jpeg" multiple>
      <div class="flex-collumn">
        <select  id="privacy-select">
          <option value="public" > Público &#128101 </option>
          <option value="private">Privado &#128274</option>
        </select>
    
        <button class="button" type="button" id="btn-add-post"> Compartir  </button>
        </div>
        </div>
      </form>
      
    <div id= "post-content"></div>
    </div>
  
  </section>
  `;

  pageMain.innerHTML = template;
  const imageFile = pageMain.querySelector('#file');
  const userName = user.displayName ? user.displayName : user.email;
  const userId = user.uid;
  let numberLike = 0;
  const privacySelect = pageMain.querySelector('#privacy-select');
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  const divPost = pageMain.querySelector('#post-content');
  post.forEach((post, index) => {
    divPost.appendChild(itemPost(post, index, userId))
  })

  btnAddPost.addEventListener('click', (e) => {
    e.preventDefault()
    const privacySelectValue = privacySelect.value
    const imageFileValue = imageFile.files[0];
    addPostSubmit(userId, userName, privacySelectValue, numberLike, imageFileValue)
  });
  return pageMain;
}