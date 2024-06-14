let checkOut = JSON.parse(localStorage.getItem('checkout')) || [];

function displayCart() {
    let cartTable = document.querySelector("[table]");
    cartTable.innerHTML = `
        <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
        </tr>`;

    checkOut.forEach((product, index) => {
        let cartRow = `
        <tr>
            <td><img src="${product.img_url}" alt="${product.productName}" style="width: 50px;"></td>
            <td>${product.productName}</td>
            <td>${product.category}</td>
            <td>${product.amount}</td>
            <td>1</td>
            <td>${product.amount}</td>
            <td><button class="delete-button btn btn-danger" onclick="deleteProd(${index})">Delete</button></td>
        </tr>`;
        cartTable.innerHTML += cartRow;
    });
}

function deleteProd(index) {
    checkOut.splice(index, 1);
    localStorage.setItem('checkout', JSON.stringify(checkOut));
    displayCart();
    alert('Product successfully deleted');
}

function purchase() {
    if (checkOut.length === 0) {
        console.error('Please add an item, your cart is empty.');
        alert('Your cart is empty, please add an item before proceeding with your purchase');
        return;
    } else {
        checkOut = [];
        localStorage.removeItem('checkout');
        displayCart();
        alert('Successfully purchased. Thank you for your purchase!');
    }
}

document.addEventListener('DOMContentLoaded', displayCart);

let spinnerWrapper = document.querySelector('.spinner-wrapper');

setTimeout(() =>{
spinnerWrapper.style.opacity = '0'; 
}, 200);
