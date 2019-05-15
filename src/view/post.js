import { editPostSubmit, countLikes } from './view-controller.js'

export default (post, index, userId) => {
  let divPostContent = document.createElement('div');
  if (userId === post.userId) {
    if (post.privacy === 'private' || post.privacy === 'public') {
      divPostContent.innerHTML = `
        <p id="btn-edit-${index}"> &#x1F58A </p>
        <p> ${post.user} </p>
        <p> ${post.privacy === 'private' ? `${post.post} &#128274 ` : `${post.post} &#128101 `} </p>
        <div id="count-likes-${index}">${post.likes} 	&#x1F49A  </div>`;

      divPostContent.querySelector(`#count-likes-${index}`).addEventListener('click', () => {
        countLikes(post.id, post.likes, 1)
      })
      divPostContent.querySelector(`#btn-edit-${index}`).addEventListener('click', () => {
        editPostSubmit(post.post, post.id)
      })
    }
  } else {
    if (userId != post.userId && post.privacy === 'public') {
      divPostContent.innerHTML = `<p> ${post.user} </p>
      <p> ${post.post} &#128101   </p>`;
      divPostContent.innerHTML += ` <div id="count-likes-${index}"> ${post.likes} &#x1F49A </div>`
    }
  }
  return divPostContent;
}
