function openProducts() {
    // requisicao pra pegar a lista de produtos
    requestApi('/products', showProducts);
    
}

function showProducts(products) {
    containerProductElements(products);
    
    const productsContainer = document.querySelector('.container-product');
}

function openPopUp(id){
    // requisicao pra pegar a lista de comentarios do produto clicado usando o id
    requestApi(`/products/${id}/comments`, showComments)
    
}

function showComments(comments) {
    createElementsofContainer(comments);

    const popUp = document.querySelector('.pop-up');
}



function closePopUp() {
    const popUp = document.querySelector('.pop-up');

    popUp.classList.add('hide');
}
