import MockFirebase from '../_mocks_/firebase-mock.js'

global.firebase = MockFirebase();

import { singUp } from "../src/controller/controller-Firebase.js";

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
