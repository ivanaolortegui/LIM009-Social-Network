import { editPostSubmit, countLikes, deletedPostSubmit, commentPostSubmit, } from './view-controller.js'
import { getComentPost } from '../controller/controller-Firebase.js'
import commenTemplates from './comments.js'


export default (post, index, userId) => {
  const divPostContent = document.createElement('div');
  if (post.post != '' || post.image != '') {
    divPostContent.innerHTML = ` 
    <section class=" content-post">
    <div class="line-black">
    <div class="line-black post-color">
    <p class=" post-post "> Publicado por ${post.user}  ${userId === post.userId ?
        `<span id="btn-deleted-${index}"> &#x1D5EB </span>` : ''} </p>
      </div>


    <div id="post-text-${index}" class="post-post line-black"> <p>${post.post} 
    </p> 
      ${post.image === '' ? '' : `<img class="profile-logo" src="${post.image}" ></img>`} 
      </div>
     
    <div  class="line-black post-post post-edit" > ${userId === post.userId ? ` 
    <img id="btn-edit-${index}" class="icon-post" src="./img/edit.png"> ` : '' } <span >${post.likes}</span>   <img id="count-likes-${index}"class="icon-post" src="./img/like.png">  
    </div>
    </div>

    <div  id="comments-content-${index}"></div>
      <input class= "imput-comment" type="search" name="text" rows="8" cols="50" id="input-comment-${index}"
  placeholder="Escribe un comentario..." autofocus=""> 
  </section> 
    `
;
    divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
      countLikes(post.id, post.likes, 1)
    })

    if (divPostContent.querySelector(`#btn-edit-${index}`) != null) {
      divPostContent.querySelector(`#btn-edit-${index}`).addEventListener('click', () => {
        divPostContent.querySelector(`#post-text-${index}`).innerHTML = ''
        divPostContent.querySelector(`#post-text-${index}`).innerHTML = `
           <input class ="login-input"id="input-edit-${index}"class="input"name='coment'></input>        
           <select  id="privacy-select-edit">
              <option value="public" > Público &#128101 </option>
              <option value="private">Privado &#128274</option>
            </select>
           
          <button type="button" class="button"  id="btn-edit-post-${index}"> Editar </button>`
        divPostContent.querySelector(`#input-edit-${index}`).value = post.post
        editPostSubmit(post.id, index)
      })
    }
    if (divPostContent.querySelector(`#btn-deleted-${index}`) != null) {
      divPostContent.querySelector(`#btn-deleted-${index}`).addEventListener('click', () => {
        deletedPostSubmit(post.id)
      })
    }
     const btnComment = divPostContent.querySelector(`#input-comment-${index}`)
    btnComment.addEventListener('search', () => {  
      commentPostSubmit(post.id, index)
    }) 
    const divComments = divPostContent.querySelector(`#comments-content-${index}`)
    getComentPost(post.id, (comments) => {
      divComments.innerHTML = '';
      comments.forEach(comment => {
        divComments.appendChild(commenTemplates(comment))
      });
    })
  } else {
    divPostContent.innerHTML = '';
  }

  return divPostContent;
}