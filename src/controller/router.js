import { components } from '../view/obj.js'
import  { userData, onUsuarioLoggeado }from '../controller/controllerFirebase.js'

export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
  divContainer.innerHTML = '';
  switch (router) {
    case '#/registro': {
      divContainer.appendChild(components.form())     
    }
    break;
      case '#/home': {
        if (userData()) {
          divContainer.appendChild(components.welcome())  
        } else {
          changeView('#/registro')
        }
     }
     break;
    default:
      divContainer.appendChild( components.login() )
      break;
  }
}



export const initRouter = () => {
  window.addEventListener('load', changeView(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
  onUsuarioLoggeado(() => changeView('#/home'))
}