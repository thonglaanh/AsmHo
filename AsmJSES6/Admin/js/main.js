document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.querySelector('.product-list');
    const addProductForm = document.querySelector('.add-product-form form');

    // Function to display a product
    function displayProduct(product) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <div>${product.id}</div>
            <div class="product-image">
                <img width="76px" height="76px" src="${product.image}" alt="">
            </div>
            <div class="product-details">
                <p class="product-name">${product.name}</p>
                <p class="product-price">${product.price}</p>
            </div>
            <input type="button" value="Xóa" class="btn delete-product" data-product-id="${product.id}" style="align-items: center;">
        `;
        productContainer.appendChild(productItem);
    }

    // Function to add a product using Fetch
    function addProduct(productData) {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Sản phẩm đã được thêm thành công:', data);
                displayProduct(data); // Add the newly created product to the list
            })
            .catch(error => {
                console.error('Lỗi khi thêm sản phẩm:', error);
            });
    }

    // Add a product when the form is submitted
    if (addProductForm) {
        addProductForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const productName = document.getElementById('product-name').value;
            const productDescription = document.getElementById('product-description').value;
            const productPrice = document.getElementById('product-price').value;
            const productImage = document.getElementById('product-image').value;

            const productData = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage,
            };

            addProduct(productData);
        });
    }

    // Fetch existing products and display them on page load
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                displayProduct(product);
            });
        })
        .catch(error => {
            console.error('Lỗi khi tải dữ liệu từ JSON Server: ', error);
        });
    // ...
    productContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-product')) {
            const productId = event.target.getAttribute('data-product-id');
            deleteProduct(productId);
        }
    });
    // ...

});

// Function to delete a product using Fetch
function deleteProduct(productId) {
    fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
    })
        .then(() => {
            console.log('Sản phẩm đã được xóa thành công.');
            // Remove the product from the UI
            const productItem = document.querySelector(`.product-item[data-product-id="${productId}"]`);
            if (productItem) {
                productItem.remove();
            }
        })
        .catch(error => {
            console.error('Lỗi khi xóa sản phẩm:', error);
        });
}
