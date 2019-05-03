import { components } from '../view/obj.js'
export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
  divContainer.innerHTML = '';
  switch (router) {
    case '#/registro': {
      divContainer.appendChild(components.form())     
    }
    break;
      case '#/home': {
        divContainer.appendChild(components.welcome())  
     }
     break;
    default:
      divContainer.appendChild( components.login() )
      break;
  }
}