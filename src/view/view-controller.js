import { ingresarUsuarioExistente, iniciarSessionFaceBook, iniciarSesionGmail } from '../controller/controllerFirebase.js'

export const loginOnClick = () => {
  const emailUser = document.querySelector('#email-login').value;
  const passwordUser = document.querySelector('#password-login').value;
  ingresarUsuarioExistente(emailUser, passwordUser).then(() => {
    window.location.hash = '#/home';
  }).catch(err => {
    console.log(err);
  });
}

export const loginConFbOnClick = () => {
  iniciarSessionFaceBook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch(err => {
      console.log(err);
    });
}

export const loginConGmailOnClick = () => {
  iniciarSesionGmail().then(() => {
    window.location.hash = '#/home';
  }).catch(err => {
    console.log(err);
  });
}