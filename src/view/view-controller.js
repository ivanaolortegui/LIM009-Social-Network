import { 
  singUp,
  signIn,
  signInWithFacebook,
  signInWithGmail,
  signOut,
  addPost
} from '../controller/controller-Firebase.js'

export const loginSubmit = () => {
  const emailUser = document.querySelector('#email-login').value;
  const passwordUser = document.querySelector('#password-login').value;
  signIn(emailUser, passwordUser).then(() => {
    window.location.hash = '#/home';
  }).catch(err => console.log(err));
}

export const loginWithFacebookSubmit = () => {
  signInWithFacebook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch(err => {
      console.log(err);
    });
}

export const loginWithGmailSubmit = () => {
  signInWithGmail().then(() => {
    window.location.hash = '#/home';
  }).catch(err => {
    console.log(err);
  });
}

export const logupSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#contraseña').value;
  singUp(email, password).then(() => window.location.hash = '#/home')
    .catch((err) => console.log(err))
}

export const logOutSubmit = () => {
  signOut()
    .then(() => {
      window.location.hash = '#/';
    }).catch(() => {
      console.error('Sign Out Error', error);
    });
}

export const addPostSubmit = () => {
  const input = document.querySelector('#input-post').value;
  addPost(input);

}