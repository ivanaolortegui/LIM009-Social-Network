import { userData } from '../controller/controller-Firebase.js'
import {
  addPostSubmit
} from './view-controller.js'


export const home = (post) => {
  const pageMain = document.createElement('div');
  const user = userData();
  /* let us;
  onUsuarioLoggeado((user) => console.log(user))
  console.log(us); */

  let template;
  if (user.displayName && user.photoURL) {
    template = `
    <nav class="menu">
    <ul>
    <a class="menu-items" href=""><h4>${user.email}</h4></a>
    <a class="menu-items" href="#/home"><h4>PureLife</h4></a>
    <a class="menu-items" href="#/signOut"><h4>cerrar sesion</h4></a>
    <a class="menu-menu" href=""><h1>&#9776</h1></a>
    </ul>
    </nav>
    <h3 class="text">Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">

    <div>
    <textarea name="textarea" rows="10" cols="50" id="input-post"></textarea>
    <select id= "privacy-select"> 
    <option value="public" > Público</option>
    <option value="private">Privado</option> 
    <select> 
    <button class="button" id="btn-add-post"> compartir </button>  
    </div>
    <div id= "post-content">
    </div>
   
    `;
  } else {
    template = `
    <nav class="menu">
    <ul>
    <a class="menu-items" href=""><h4>${user.email} <img class="icon-menu" src="./img/sort.png"></h4></a>
    <a class="menu-items" href="#/home"><h4><img class="icon-menu" src="./img/recycle.png"> PureLife</h4></a>
    <a class="menu-items" href="#/"><h4><img class="icon-menu" src="./img/logout.png">cerrar sesion</h4></a>
    <a class="menu-menu" href=""><h1>&#9776</h1></a>
    </ul>
    </nav>
    <img class="profile-logo" src="./img/avatar.png">
    <h3 class="text">Bienvenido ${user.email} </h3>
    <div>
    <textarea name="textarea" rows="10" cols="40" id="input-post"></textarea>
    <select id= "privacy-select"> 
    <option value="public" > Público</option>
    <option value="private">Privado</option> 
    <select> 
    <button class="button" id="btn-add-post"> compartir </button>
    </div>
    <div id= "post-content">
    </div>
    `;
  }
  pageMain.innerHTML = template;
  const userName = user.email;
  const userId = user.uid;
  const privacySelect = pageMain.querySelector('#privacy-select');
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  btnAddPost.addEventListener('click', () => {
    const privacySelectValue = privacySelect.value
    addPostSubmit(userId,userName, privacySelectValue)
  });
      
    const divPost = pageMain.querySelector('#post-content');
    post.forEach((post) => {
      const pPost = document.createElement('p');
      const pUser = document.createElement('p');
      pPost.innerHTML = post.post
     pUser.innerHTML = post.user;
      divPost.appendChild(pUser);
      divPost.appendChild(pPost);   
    });  
     

  // const btnCerrar = pageMain.querySelector('#log-out');
  // btnCerrar.addEventListener('click', logOutSubmit)

  return pageMain;
}