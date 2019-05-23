import  {initRouter }from '../view-controller/router.js'
 export const configFirebase = () => {
    let config = {
      apiKey: "AIzaSyBrEkqM2kN4YhK8ALD4rGDziPene6zeWhQ",
      authDomain: "red-social-ecologica.firebaseapp.com",
      databaseURL: "https://red-social-ecologica.firebaseio.com",
      projectId: "red-social-ecologica",
      storageBucket: "red-social-ecologica.appspot.com",
      messagingSenderId: "246884214989"
    }
    firebase.initializeApp(config);
    initRouter();
  }