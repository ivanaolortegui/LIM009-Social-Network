import  {cerrarSession, userData, addPublication}from '../controller/controllerFirebase.js'

export const cerrarSesion = () => {
  cerrarSession()
  .then(() => {
    window.location.hash = '#/';
  }) .catch(() => {
    console.error('Sign Out Error', error);
  });
}

export const welcome = () => {
  const pageMain = document.createElement('div');
/*   const user =firebase.auth().currentUser;
  console.log(user); */

const user = userData();
  
  let template;
  if(user.displayName && user.photoURL){
     template = `<h3 class="text">Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">

    <div>
    <input type="text" id="input-post">
    <button class="button" id="btn-post"> compartir </button>  
    </div>
    <button class="button" id="cerrar-sesion"> Cerrar Sesion </button>
    `;
  } else {
    template = `<h3 class="text">Bienvenido ${user.email} </h3>
    <img class="profile-logo" src="./img/avatar.png">

    <div>
    <input type="text" id="input-post">
    <button class="button" id="btn-post"> compartir </button>
    </div>
    <button class="button" id="cerrar-sesion"> Cerrar Sesion </button>
    `;
  }  
  pageMain.innerHTML = template;
  const btnAddPost = pageMain.querySelector('#btn-post');
  btnAddPost.addEventListener('click',()=> {
    const input = pageMain.querySelector('#input-post').value;
    addPublication(input);

  })
  const btnCerrar = pageMain.querySelector('#cerrar-sesion');
  btnCerrar.addEventListener('click', cerrarSesion)
  return pageMain;
}