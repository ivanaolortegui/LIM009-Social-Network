import {
  singUp,
  signIn,
  signInWithFacebook,
  signInWithGmail,
  signOut,
  editPost,
  addPost,
  editLike,
  deletedPost,
  addCommentPost,
  putImageInStorage,
  getImageUrl
} from '../controller/controller-Firebase.js'


const showErrorMessage = (error) => {
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

export const addPostSubmit = (userId, user, privacySelectValue, numberLike, imageFileValue) => {
  const input = document.querySelector('#input-post').value;
  if (imageFileValue === undefined) {
    addPost(input, userId, user, privacySelectValue, numberLike, '');
  } else {
    getImageUrl(putImageInStorage(imageFileValue)).then((url) => {
      console.log(url);
      addPost(input, userId, user, privacySelectValue, numberLike, url);
    })
  }
}


export const editPostSubmit = (id, index) => {
  const btnEditPost = document.querySelector(`#btn-edit-post-${index}`)
  btnEditPost.addEventListener('click', () => {
    const postEdited = document.querySelector(`#input-edit-${index}`).value
    const valueSelect = document.querySelector('#privacy-select-edit').value
    editPost(id, postEdited, valueSelect)
  });
}



export const countLikes = (id, totaLike, newLike) => {
  editLike(id, totaLike, newLike)
}

export const deletedPostSubmit = (id) => {
  deletedPost(id)
}

export const commentPostSubmit = (id, index,) => {
  const inputValue = document.getElementById(`input-comment-${index}`);
  addCommentPost(id, inputValue.value)
  inputValue.value = '';
}