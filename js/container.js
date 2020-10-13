function containerProductElements (products) {
    const containerProducts = document.querySelector('.container-product');

    // interar para popular o container de produtos
    products.forEach(function(product) {
        //criar elemento html de link
        const linkProduct = document.createElement("a");
        // criar tag img html
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
        containerProducts.appendChild(linkProduct);

        linkProduct.addEventListener('click', function() {
            openPopUp(product.id);
        })

        // adiciona evento de click em cada produto mandando o id
    });
}

