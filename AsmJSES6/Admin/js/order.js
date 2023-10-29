fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const productContainer = document.querySelector('.order-list');

        data.forEach(product => {
            const productItem = document.createElement('div'); // Change <li> to <div>
            productItem.classList.add('product-item'); // Add a class for styling

            productItem.innerHTML = `
                <div>
                ${product.id}
                </div>
                    <div class="product-image">
                        <p>${product.customer_name}</p>
                    </div>
                    <div class="customer-details">
                        <p class="product-name">${product.customer_address}</p>
                        <p class="product-price">${product.customer_email}</p>
                        <p class="product-price">${product.customer_phone_number}</p>
                    </div>
                    <div className="customer-date" style="width:15%">${product.created_date}</div>
                    <div className="customer-status">${product.status}</div>
                    
                `;

            productContainer.appendChild(productItem);
        });
    })
    .catch(error => {
        console.error('Error loading data from JSON Server: ', error);
    });
