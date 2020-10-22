function showLoader() {
    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.add('show');
}

function hideLoader() {
    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.remove('show');
}