import { editPostSubmit, countLikes, deletedPostSubmit, commentPostSubmit } from './view-controller.js'

const commenTemplate = (id, index) => {
const divContentComment = document.createElement('div');
divContentComment.innerHTML = `  <input name="text" rows="8" cols="50" id="input-comment" placeholder="Comentario"></input>
<button  id="btn-comment-post-${index}"> Comentar </button>  
`;

const btnComment = divContentComment.querySelector(`#btn-comment-post-${index}`)
btnComment.addEventListener('click',()=>{
  commentPostSubmit(id,index)
})
 

return divContentComment;
}

export default (post, index, userId) => {

    const divPostContent = document.createElement('div');
    if (userId === post.userId && (post.privacy === 'private' || post.privacy === 'public')) {
        divPostContent.innerHTML = ` 
      <p> ${post.user}  <span id="btn-deleted-${index}"> &#x1D5EB  </span> </p>
      <p> ${post.privacy === 'private' ? `${post.post} &#128274  <span id="btn-edit-${index}"> &#x1F58A  </span> ` :
        `${post.post} &#128101 <span id="btn-edit-${index}"> &#x1F58A  </span>`} </p>
      <div  >${post.likes} <span id="count-likes-${index}"> 	&#x1F49A </span> 
      <span id = "btn-coment-${index}"> 	&#x1F4AC  </span>   <div id="comment-content-${index}" ></div> </div>
    
      `;
      
    divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
      countLikes(post.id, post.likes, 1)
    })
    divPostContent.querySelector(`#btn-edit-${index}`).addEventListener('click', () => {
      editPostSubmit(post.post, post.id)
    })

    divPostContent.querySelector(`#btn-deleted-${index}`).addEventListener('click', () => {
      deletedPostSubmit(post.id)
    })
    divPostContent.querySelector(`#btn-coment-${index}`).addEventListener('click', () => {
      const divComment =  divPostContent.querySelector(`#comment-content-${index}`)
      divComment.appendChild(commenTemplate(post.id, index))
     
    })
    

  } else {
    if (userId != post.userId && post.privacy === 'public') {
      divPostContent.innerHTML = `
      <p> ${post.user} </p>
      <p> ${post.post} &#128101 </p>
  
      <div >${post.likes} <span id="count-likes-${index}"> 	&#x1F49A </span> 
      <span > 	&#x1F4AC  </span> </div>
       `


      divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
        countLikes(post.id, post.likes, 1)
      })
    }
  }

  return divPostContent;
}