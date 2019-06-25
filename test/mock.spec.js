import MockFirebase from '../_mocks_/firebase-mock.js'


global.firebase = MockFirebase();


import { singUp, addPost, getPublicPost, getPost, putImageInStorage } from "../src/controller/controller-Firebase.js";

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

describe('addPost', () => {
  it('deberías agregar un post',() => {
    return addPost('Hoy recicle una botella', '12345', 'chiquinquira@gmail.com', 'public', 1)
    .then((data)=> {  
        expect(data).toBe('El post fue agregado')
    })
  });
 

})

describe('putImageInStorage', () => {
  it('debería ser una funcion', () => {
    expect(typeof putImageInStorage).toBe('function')
  });


  it('Debería', (done) => {
    return putImageInStorage('fondo.png').then((data) => {
      expect(data).toBe('https://firebasestorage.googleapis.com/fondo.png')
     done()
    })
  })
})  