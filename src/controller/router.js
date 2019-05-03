import { components } from '../view/obj.js'
import {iniciarSessionFaceBook} from './controllerFirebase.js'
import btn from './controller-btn.js'

export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
 // const viewForm = document.querySelector('#pag-one');
  divContainer.innerHTML = '';
  switch (router) {
    case '#/registro': {
      divContainer.appendChild(components.form())     
    }
    break;
    case '#/registrar': {
       btn();
    }
      break;
      case '#/home': {
        divContainer.appendChild(components.welcome())  
     }
     break;
    /*  case '#/facebook': {
      iniciarSessionFaceBook()
     // divContainer.appendChild(components.welcome())  
   } */
   break;
    default:
      divContainer.appendChild( components.login() )
      break;
  }
}