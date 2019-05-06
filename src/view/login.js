//import {changeView} from '../controller/router.js'
import {configFirebase} from '../controller/config-firebase.js'
/* 
 const configFirebase = () => {
  let config = {
    apiKey: "AIzaSyBrEkqM2kN4YhK8ALD4rGDziPene6zeWhQ",
    authDomain: "red-social-ecologica.firebaseapp.com",
    databaseURL: "https://red-social-ecologica.firebaseio.com",
    projectId: "red-social-ecologica",
    storageBucket: "red-social-ecologica.appspot.com",
    messagingSenderId: "246884214989"
  }
  firebase.initializeApp(config);
} */
window.onload = configFirebase();
/* window.addEventListener('hashchange', () => changeView(window.location.hash));
changeView(window.location.hash); */
//const allPage = document.getElementById('all-page')
// allPage.appendChild();

