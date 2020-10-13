const BASE_URL = 'https://5f7ded1b834b5c0016b06ccf.mockapi.io'

function requestApi(path, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${BASE_URL}${path}`);

    xhr.addEventListener('load', function() {
        const answer = xhr.responseText;

        const products = JSON.parse(answer);
        cb(products);
    });

    xhr.send();
}




