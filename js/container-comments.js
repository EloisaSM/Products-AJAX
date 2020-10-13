function createElementsofContainer(comments) {
    const popUp = document.querySelector('.pop-up');
    

    //popula o modal com os comentarios
    comments.forEach(function(comment) {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('.comment-container');
        const childsCommentsContainer = `
        <div class="pop-up__rating">
            <img class="pop-up__rating__img" src="${comment.avatar}" >
            <div class="pop-up__rating__comment">
                <p>${comment.name}</p>
                <p>${comment.text}</p>
            </div>
        </div>
    `
    commentContainer.innerHTML = childsCommentsContainer;
    popUp.appendChild(commentContainer);
    });

}