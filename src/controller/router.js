import { components } from '../view/index.js'
import  { userData, onUsuarioLoggeado }from '../controller/controller-Firebase.js'

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
          divContainer.appendChild(components.home())  
        } /* else {
          changeView('#/home')
        } */
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