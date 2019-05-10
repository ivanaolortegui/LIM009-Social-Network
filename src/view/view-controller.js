import { 
  singUp,
  signIn,
  signInWithFacebook,
  signInWithGmail,
  signOut,
  editPost,
  addPost
} from '../controller/controller-Firebase.js'




const showErrorMessage = (error) =>{
  const errorMessage = document.querySelector('#error-message');
  errorMessage.innerHTML = error.message;

}

export const loginSubmit = () => {
  const emailUser = document.querySelector('#email-login').value;
  const passwordUser = document.querySelector('#password-login').value;
  signIn(emailUser, passwordUser).then(() => {
    window.location.hash = '#/home';
  }).catch(error => showErrorMessage(error));
}

export const loginWithFacebookSubmit = () => {
  signInWithFacebook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch(error => {
      showErrorMessage(error);
    });
}

export const loginWithGmailSubmit = () => {
  signInWithGmail().then(() => {
    window.location.hash = '#/home';
  }).catch(error => {
    showErrorMessage(error);
  });
}

export const logupSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#contraseña').value;
  singUp(email, password).then(() => window.location.hash = '#/home')
    .catch((error) => showErrorMessage(error))
}

export const logOutSubmit = () => {
  signOut()
    .then(() => {
      window.location.hash = '#/signIn';
    }).catch(() => {
      console.error('Sign Out Error', error);
    });
}

export const addPostSubmit = (userId, user, privacySelectValue) => {
  const input = document.querySelector('#input-post').value;
  
  addPost(input,userId,user,privacySelectValue);
 
}



export const editPostOnclick = (textPost, id) => {
  document.querySelector('#input-post').value = textPost;
   const btnAddPost = document.querySelector('#btn-add-post');
   btnAddPost .innerHTML= 'editar'
  btnAddPost.addEventListener('click', () => { 
    editPost(id, textPost)
  }); 
}

 

