const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


import {
  singUp,
  signIn,
  signInWithFacebook,
  signOut,
  signInWithGmail,
  userData,
  onUsuarioLoggeado,
  ingresoDatos
} from "../src/controller/controller-Firebase.js";

describe('singUp', () => {
  it('debería ser una funcion', () => {
    expect(typeof singUp).toBe('function')
  });


  it('debería registrar nuevo usuario', () => {
    return singUp('ivanao@gmail.com', '123456789')
      .then((user) => {
        expect(user.email).toBe('ivanao@gmail.com')
      })
  });
})

describe('signIn', () => {
  it('debería registrar nuevo usuario', () => {
    return signIn('ivanao@gmail.com', '123456789')
      .then((user) => {
        expect(user.email).toBe('ivanao@gmail.com')
      })
  });
})


describe('signOut', () => {
  it('debería cerrar sesion', () => {
    return signOut()
      .then((user) => {
        expect(user).toBe(undefined)
      })
  });
})

describe('signInWithFacebook', () => {
  it('debería registrar con facebook', () => {
    return signInWithFacebook()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})

describe('signInWithGmail', () => {
  it('debería registrar con gmail', () => {
    return signInWithGmail()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})

describe('onUsuarioLoggeado', () => {
  it('debería devolver el usuario logueado', (done) => {
    const callback = (user) => {
      expect(user.isAnonymous).toBe(false)
      done()
    }
    onUsuarioLoggeado(callback)
    expect(firebase.auth().currentUser.isAnonymous).toBe(false)
    // iniciarSesionGmail() 
    firebase.auth().signInWithEmailAndPassword('chiquinquira@gmail.com', '123456789')
  });

})

describe('userData', () => {
  it('debería mostrar user activo', () => {
    const user = userData()
    expect(user.email).toBe('chiquinquira@gmail.com')




  });
})


