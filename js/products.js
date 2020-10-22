function openProducts() {
    showLoader();
    // requisicao pra pegar a lista de produtos
    requestApi('/products', showProducts);
}

function addOpenCommentEvent(product, linkProduct) {
    // adiciona evento de click em cada produto mandando o id
    linkProduct.addEventListener('click', function() {
        openPopUp(product.id);
    });
}

function createProduct(product) {
    const linkProduct = document.createElement("a");
    const childsProductElements = `
        <img class="product-link__img" src="${product.image}" >
        <div class="product-link__info"> 
            <p>${product.name}</p>
        </div>
    `
    //adicionar class nos elementos
    linkProduct.classList.add('product-link');
    //mostrar elementos no container
    linkProduct.innerHTML = childsProductElements;
    addOpenCommentEvent(product, linkProduct);

    return linkProduct
}

function appendProducts(products) {
    const containerProducts = document.querySelector('.container-product');

    // interar para popular o container de produtos
    products.forEach(function(product) {
        const productElement = createProduct(product)
        containerProducts.appendChild(productElement); 
    });
}

function showProducts(products) {
    appendProducts(products);
    hideLoader();

    const containerBtn = document.querySelector('.start-elments-container');
    containerBtn.style.display = "none";
}