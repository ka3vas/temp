function getProducts (url, howManyProducts) {
    fetch(url)
     .then((res) => res.json())
     .then((productList) => {
        
        // Create container for all listed products
        let div = document.createElement('div');
        div.className = 'products';
        document.body.insertAdjacentElement("beforeend", div);

        productList.products
         .slice(0, howManyProducts)
         .map(element => {
            
            // Create container div for product
            let productItemDiv = document.createElement('div');
            productItemDiv.className = 'product';
            
            // Add four images
            element.images.slice(0,3).map((img, index) => {
                let productImg = document.createElement('img');  
                productImg.className = 'product-image product-image_small';
                productImg.src = img.src;

                productItemDiv.insertAdjacentElement("beforeend", productImg);
            });

            let descriptionContainer = document.createElement('div');
            let productHtml = element.body_html;
            descriptionContainer.innerHTML = productHtml;

            productItemDiv.insertAdjacentElement("beforeend", descriptionContainer);

            div.appendChild(productItemDiv); 
         }); 
     })
}

module.exports = {getProducts};