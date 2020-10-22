function closePopUp() {
    const popUp = document.querySelector('.pop-up');

    popUp.classList.remove('show');
}

function createCommentElement(comment) {
    const containerCommentElement = document.createElement('div');
    containerCommentElement.classList.add('.comments');
    const childsCommentsContainer = `
        <div class="pop-up__rating">
            <img class="pop-up__rating__img" src="${comment.avatar}" >
            <div class="pop-up__rating__comment">
                <p class="pop-up__rating__comment__name">${comment.name}</p>
                <p class="pop-up__rating__comment__info">${comment.text}</p>
            </div>
        </div>
    `
    containerCommentElement.innerHTML = childsCommentsContainer;

    return containerCommentElement
}

function createElementsofContainer(comments) {
    const popUpContainer = document.querySelector('.pop-up__container');
    popUpContainer.innerHTML = '';   

    //popula o modal com os comentarios
    comments.forEach(function(comment) {
        const commentElement = createCommentElement(comment)
        popUpContainer.appendChild(commentElement);
    });
}

function showComments(comments) {
    createElementsofContainer(comments);
    hideLoader();
    const popUp = document.querySelector('.pop-up');
    popUp.classList.add('show');
}

function openPopUp(id){
    showLoader();

    // requisicao pra pegar a lista de comentarios do produto clicado usando o id
    requestApi(`/products/${id}/comments`, showComments)
}