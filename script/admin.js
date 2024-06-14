document.addEventListener('DOMContentLoaded', function() {
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const editForm = document.getElementById('editForm');
    const editId = document.getElementById('editId');
    const editName = document.getElementById('editName');
    const editCategory = document.getElementById('editCategory');
    const editDescription = document.getElementById('editDescription');
    const editPrice = document.getElementById('editPrice');
    const editImgUrl = document.getElementById('editImgUrl');
    const cancelEdit = document.getElementById('cancelEdit');
    const addProductForm = document.getElementById('addProductForm');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function saveProducts() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    function loadProducts() {
        productTable.innerHTML = '';
        products.forEach(product => {
            const row = productTable.insertRow();
            row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${product.img_url}" alt="${product.productName}" style="width: 50px; height: 50px;"></td>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td>${product.description}</td>
                <td>${product.amount}</td>
                <td>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal${product.id}">Edit</button>
                    <div class="modal fade" id="editModal${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="editForm">
                                    <label for="editName">Name:</label>
                                    <input type="text" id="editName" value="${product.productName}" required>
                                    <label for="editCategory">Category</label>
                                    <input type="text" id="editCategory" value="${product.category}" required>
                                    <label for="editDescription">Description</label>
                                    <input type="text" id="editDescription" value="${product.description}" required>
                                    <label for="editPrice">Price:</label>
                                    <input type="number" id="editPrice" value="${product.amount}" required>
                                    <label for="editImgUrl">Image URL:</label>
                                    <input type="text" id="editImgUrl" value="${product.img_url}" required>
                                    <button type="button">Save</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" send>Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
        });
    }

    function editProduct(id) {
        const product = products.find(p => p.id === id);
        if (product) {
            editId.value = product.id;
            editName.value = product.productName;
            editCategory.value = product.category;
            editDescription.value = product.description;
            editPrice.value = product.amount;
            editImgUrl.value = product.img_url;
            editForm.style.display = 'block';
        }
    }

    function deleteProduct(id) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        loadProducts();
    }

    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const id = parseInt(editId.value);
        const name = editName.value;
        const category = editCategory.value;
        const description = editDescription.value;
        const price = parseFloat(editPrice.value);
        const img_url = editImgUrl.value;
        const product = products.find(p => p.id === id);
        if (product) {
            product.productName = name;
            product.category = category;
            product.description = description;
            product.amount = price;
            product.img_url = img_url;
        }
        saveProducts();
        loadProducts();
        editForm.style.display = 'none';
    });

    cancelEdit.addEventListener('click', function() {
        editForm.style.display = 'none';
    });

    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('addName').value;
        const category = document.getElementById('addCategory').value;
        const description = document.getElementById('addDescription').value;
        const price = parseFloat(document.getElementById('addPrice').value);
        const img_url = document.getElementById('addImgUrl').value;
        const newId = products.length ? products[products.length - 1].id + 1 : 1;
        products.push({ id: newId, name, category, description, price, img_url });
        saveProducts();
        loadProducts();
        addProductForm.reset();
        const addProductModal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
        addProductModal.hide();
    });

    // Initial load
    loadProducts();

    // Expose functions to global scope
    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
});

let spinnerWrapper = document.querySelector('.spinner-wrapper');

setTimeout(() =>{
spinnerWrapper.style.opacity = '0'; 
}, 200);