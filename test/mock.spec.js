import MockFirebase from '../_mocks_/firebase-mock.js'

global.firebase = MockFirebase();

import { registroUsuarioNuevo } from "../src/controller/controllerFirebase.js";

describe('registroUsuarioNuevo', () => {
  it('debería ser una funcion', () => {
    expect(typeof registroUsuarioNuevo).toBe('function')
  });


  it('debería registrar nuevo usuario', () => {
    return registroUsuarioNuevo('ivanao@gmail.com', '123456789')
      .then((user) => {
        expect(user.email).toBe('ivanao@gmail.com')
      })
  });
})
