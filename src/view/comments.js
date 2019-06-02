
export default (comment) => {
    const divContentComment = document.createElement('div');
    divContentComment.innerHTML = `<div  <p class="line-black comments"> ${comment.postComent}</p> </div>`
    return divContentComment;
}