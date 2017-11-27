require('../sass/style.scss');
const productsList = require('./get_products');

const url = 'https://www.everyonedoesit.ca/products.json';
const howManyProducts = 20;

productsList.getProducts(url, howManyProducts);

setTimeout(() => {
    const images = Array.from(document.querySelectorAll('.product-image'));
    
    images.map(image => {
        image.addEventListener('mouseover', () => {
            image.className = 'product-image product-image_large';
        });

        image.addEventListener('mouseout', () => {
            image.className = 'product-image product-image_small';
        });
    });
}, 1000);