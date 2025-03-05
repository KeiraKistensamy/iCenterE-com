let wrapper = document.querySelector("[products]");
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(productsToRender) {
    wrapper.innerHTML = '';
    productsToRender.forEach((product) => {
        let productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML = `
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">R ${product.amount}</p>
            </div>
        `;
        productCard.addEventListener("click", () => showProductDetails(product));
        wrapper.appendChild(productCard);
    });
}

function showProductDetails(product) {
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    let productDetails = document.createElement('div');
    productDetails.classList.add('modal-content'); 

    productDetails.innerHTML = `
        <div class="card">
            <img src="${product.img_url}" class="modal-img" alt="${product.productName}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">R ${product.amount}</p>
                <p class="card-text">${product.description}</p>
                <button class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                <button class="btn btn-secondary" onclick='closeProductDetails()'>Close</button>
            </div>
        </div>
    `;

    modalContainer.appendChild(productDetails);
    document.body.appendChild(modalContainer);
}


function closeProductDetails() {
    document.querySelector('.modal-container').remove();
}

function addToCart(product) {
    let checkOut = JSON.parse(localStorage.getItem('checkout')) || [];
    checkOut.push(product);
    localStorage.setItem('checkout', JSON.stringify(checkOut));
    document.querySelector('[counter]').textContent = checkOut.length;
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    
    // Hide the spinner after rendering
    let spinner = document.querySelector(".spinner");
    if (spinner) {
        spinner.style.display = "none";
    }
});

