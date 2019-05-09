import { components } from '../view/index.js'
import {logOutSubmit} from '../view/view-controller.js'
import  { userData, getPost, onUsuarioLoggeado }from '../controller/controller-Firebase.js'

export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
  divContainer.innerHTML = '';
  switch (router) {
    case '#/signUp': {
      divContainer.appendChild(components.signUpView())     
    }
    break;
      case '#/home': {
        if (userData()) {
          getPost((post) => {
            divContainer.innerHTML = '';
            divContainer.appendChild(components.home(post))  
          })  
        }  else {
          window.location.hash = '#/'
          // changeView('#/')
        }  
     }
     break;
     case '#/signOut': {
      logOutSubmit()
    }
     break;
    default:
      divContainer.appendChild( components.SignInView())
      break;
  }
}



export const initRouter = () => {
  window.addEventListener('load', changeView(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
  onUsuarioLoggeado(() => changeView('#/home'))
}