import { components } from '../view/index.js'
import { logOutSubmit } from '../view/view-controller.js'
import { userData, onUsuarioLoggeado, getPrivatePost, getPublicPost } from '../controller/controller-Firebase.js'

// Función para el cambio de rutas 
export const changeView = (router) => {
  const divContainer = document.getElementById('all-page');
  divContainer.innerHTML = ''; // ANtes de hacr cualquier cambio te limpies
  switch (router) {
    case '#/signIn': {
      if (!userData()) {
        divContainer.appendChild(components.SignInView())
      } else {
        window.location.hash = '#/home'
      }
    }
      break;
    case '#/signUp': {
      divContainer.appendChild(components.signUpView())
    }
      break;
    case '#/home': {
      onUsuarioLoggeado((user) => {
        if (user) {
          getPrivatePost(userData().uid, (postPrivateArray) => {            
            getPublicPost((postPublic) => {          
              let posts = [
                ...postPrivateArray,
                ...postPublic
              ];       
              posts = posts.sort()/* ((a,b) =>{
                b.date.seconds- a.date.seconds;
                
              }) */
              divContainer.innerHTML = '';
              divContainer.appendChild(components.home(posts))
            })
          })
        }
      })
    }
      break;
    case '#/signOut': {
      logOutSubmit()
    }
      break;
    default:
      if (userData()) {
        window.location.hash = '#/home'
      } else {
        window.location.hash = '#/signIn'
      }
      break;
  }
}

// función para la inicialización de rutas 
export const initRouter = () => {
  window.addEventListener('load', () => {
    changeView(window.location.hash)
  })
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
}