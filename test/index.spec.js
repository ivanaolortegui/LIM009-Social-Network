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


import { registroUsuarioNuevo, ingresarUsuarioExistente, iniciarSessionFaceBook, cerrarSession, iniciarSesionGmail, serData, onUsuarioLoggeado, addPublication} from "../src/controller/controllerFirebase.js";

describe('registroUsuarioNuevo', () => {
  it('debería ser una funcion', () => {
    expect(typeof registroUsuarioNuevo).toBe('function') 
  });


  it('debería registrar nuevo usuario', () => {
    return registroUsuarioNuevo('ivanao@gmail.com','123456789')
    .then((user)=> { 
      expect(user.email).toBe('ivanao@gmail.com')  
    })    
  });
})

describe('ingresarUsuarioExistente', () => {
  it('debería registrar nuevo usuario', () => {
    return ingresarUsuarioExistente('ivanao@gmail.com','123456789')
    .then((user)=> { 
      expect(user.email).toBe('ivanao@gmail.com')  
    })    
  });
})


describe('cerrarSession', () => {
  it('debería cerrar sesion', () => {
    return cerrarSession()
    .then((user)=> { 
      expect(user).toBe(undefined)  
    })    
  });
})

describe('iniciarSessionFaceBook', () => {
  it('debería registrar con facebook', () => {
    return iniciarSessionFaceBook()
    .then((user)=> { 
      expect(user.isAnonymous).toBe(false)  
    })    
  });
})

describe('iniciarSesionGmail', () => {
  it('debería registrar con gmail', () => {
    return iniciarSesionGmail()
    .then((user)=> { 
      expect(user.isAnonymous).toBe(false)  
    })    
  });
})

describe('onUsuarioLoggeado', () => {
  it('debería devolver el usuario logueado', () => {
    return onUsuarioLoggeado((user)=> {
      expect(user).toBe('false')  
    })
  
  });
 
})



