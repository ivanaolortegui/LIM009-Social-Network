import { components } from '../view/obj.js'
export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
 // const viewForm = document.querySelector('#pag-one');
  divContainer.innerHTML = '';
  switch (router) {
    case '#/registro': {
      divContainer.appendChild(components.form())
    }
    case '#/ingresar': { console.log('jj') }
      break;
    default:
      divContainer.appendChild( components.login() )
      break;
  }
  console.log(router);
}