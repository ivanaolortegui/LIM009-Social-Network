
export default (comment) => {
    const divContentComment = document.createElement('div');
    divContentComment.innerHTML = `<div class=" comments" <p > ${comment.postComent}</p> </div>`
    return divContentComment;
}