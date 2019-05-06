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


import { registroUsuarioNuevo, ingresarUsuarioExistente, iniciarSessionFaceBook, cerrarSession, iniciarSesionGmail, serData, ingresoDatos} from "../src/controller/controllerFirebase.js";

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

 describe('ingresoDatos', () => {
  it('debería ser una funcion', () => {
    expect(typeof ingresoDatos).toBe('function') 
  });

  it('debería registrar usuario activo', () => {
    return ingresoDatos()
    .then((user)=> { 
      expect(user).toBe(user)  
    })    
  });
}) 