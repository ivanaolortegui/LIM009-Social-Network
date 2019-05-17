import { editPostSubmit, countLikes, deletedPostSubmit } from './view-controller.js'

export default (post, index, userId) => {

  let divPostContent = document.createElement('div');
  if (userId === post.userId) {
    if (post.privacy === 'private' || post.privacy === 'public') {
      divPostContent.innerHTML = `<section>
        <p id="btn-edit-${index}"> &#x1F58A </p>
        <p> ${post.user} </p>
        <p rows="8" cols="50"> ${post.privacy === 'private' ? `${post.post} &#128274 ` : `${post.post} &#128101 `} </p>
        <button id="btn-delete" ><img class="icon-menu" src="./img/delete.png"/></button>
        <div id="count-likes-${index}">${post.likes} 	&#x1F49A  </div>
        </section>`;

      divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
        countLikes(post.id, post.likes, 1)
      })
      divPostContent.querySelector(`#btn-edit-${index}`).addEventListener('click', () => {
        editPostSubmit(post.post, post.id)
      });
   
    }

  const divPostContent = document.createElement('div');
  if (userId === post.userId && (post.privacy === 'private' || post.privacy === 'public')) {
    divPostContent.innerHTML = `
      <p> ${post.user}  <span id="btn-deleted-${index}"> &#x1D5EB  </span> </p>
      <p> ${post.privacy === 'private' ? `${post.post} &#128274  <span id="btn-edit-${index}"> &#x1F58A  </span> ` :
      `${post.post} &#128101 <span id="btn-edit-${index}"> &#x1F58A  </span>`} </p>
      <div id="count-likes-${index}">${post.likes} 	&#x1F49A  </div>`;

    divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
      countLikes(post.id, post.likes, 1)
    })
    divPostContent.querySelector(`#btn-edit-${index}`).addEventListener('click', () => {
      editPostSubmit(post.post, post.id)
    })

    divPostContent.querySelector(`#btn-deleted-${index}`).addEventListener('click', () => {
      deletedPostSubmit(post.id)
    })




  } else {
    if (userId != post.userId && post.privacy === 'public') {
      divPostContent.innerHTML = `<section>
      <p> ${post.user} </p>
      <p rows="8" cols="50"> ${post.post} &#128101   </p>
      <button id="btn-delete" ><img class="icon-menu" src="./img/delete.png"/></button>
      </section>`;
      divPostContent.innerHTML += ` <div id="count-likes-${index}"> ${post.likes} &#x1F49A </div>`

      divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
        countLikes(post.id, post.likes, 1)
      })
    }
  }

  return divPostContent;
}
