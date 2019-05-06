import  {cerrarSession, ingresoDatos, userData, addPublication}from '../controller/controllerFirebase.js'

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
  let us;
   ingresoDatos().then((user1) => {
     const us1 =user1;
     return us = us1;
    }
    ).catch((err)=> console.log(err))
console.log(us);

const user = userData();
  
  let template;
  if(user.displayName && user.photoURL){
     template = `<h3>Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">

    <div>
    <input type="text" id="input-post">
    <button class="button-registry" id="btn-post"> compartir </button>  
  </div>
    <button class="button-registry" id="cerrar-sesion"> Cerrar Sesion </button>
    `;
  } else {
    template = `<h3>Bienvenido ${user.email} </h3>
    <img class="profile-logo" src="./img/avatar.png">

    <div>
    <input type="text" id="input-post">
    <button class="button-registry" id="btn-post"> compartir </button>
  </div><
    <button class="button-registry" id="cerrar-sesion"> Cerrar Sesion </button>
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