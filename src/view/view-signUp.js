import  {cerrarSession}from '../controller/controllerFirebase.js'

export const cerrarSesion = () => {
  cerrarSession()
  .then(() => {
    window.location.hash = '#/';
  }, function (error) {
    console.error('Sign Out Error', error);
  });
}

export const welcome = () => {
  const pageMain = document.createElement('div');
  const user =firebase.auth().currentUser;
  console.log(user);
  let template;
  if(user.displayName && user.photoURL){
     template = `<h3>Bienvenido ${user.displayName} </h3>
    <img class="profile-logo" src="${user.photoURL}">
    <button class="button-registry" id="cerrar-sesion"> Cerrar Sesion </button>
    `;
  } else {
    template = `<h3>Bienvenido ${user.email} </h3>
    <img class="profile-logo" src="./img/avatar.png">
    <button class="button-registry" id="cerrar-sesion"> Cerrar Sesion </button>
    `;
  }  
  pageMain.innerHTML = template;
  const btnCerrar = pageMain.querySelector('#cerrar-sesion');
  btnCerrar.addEventListener('click', cerrarSesion)
  return pageMain;
}