fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.querySelector('.SanPhamMoi'); // Select the container element where products will be displayed

        data.forEach(product => {
            // Create an item to display each product
            const productItem = document.createElement('li');
            productItem.innerHTML = `
                <div class="SanPhamMoi__column">
                    <div class="SanPhamMoi__column__img">
                        <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">
                            <img style="max-width: 95%; max-height: 95%;" src="${product.image}" alt="">
                        </a>
                    </div>
                    <div class="SanPhamMoi__column__content">
                        <div class="SanPhamMoi__column__content__title">
                            <p>
                                <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">${product.name}</a>
                            </p>
                        </div>
                        <div class="SanPhamMoi__column__content__price" style="width: 100%; height: 20px;">
                            <span class="woocommerce-Price-amount amount"><bdi>${product.price}<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span>
                        </div>
                        <div class="SanPhamMoi__column__content__button" style="width: 100%; height: 40px; ">
                            <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">
                                CHI TIẾT
                            </a>
                        </div>
                    </div>
                </div>
            `;
            // Add the product to the list
            productContainer.appendChild(productItem);
        });
    })
    .catch(error => {
        console.error('Error loading data from JSON Server: ', error);
    });
document.getElementById("category-select").addEventListener("change", function () {
    // Lấy giá trị được chọn từ dropdown
    const selectedCategory = document.getElementById("category-select").value;

    // Gọi hàm để lọc sản phẩm dựa trên danh mục đã chọn
    console.log(selectedCategory);
    filterProducts(selectedCategory);
});
function filterProducts(selectedCategory) {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.querySelector('.SanPhamMoi'); // Select the container element where products will be displayed
            productContainer.innerHTML = ''; // Clear the container before displaying filtered products

            data.forEach(product => {
                if (product.cate_id == selectedCategory || selectedCategory == 'all') { // Check if the product belongs to the selected category
                    // Create an item to display the filtered product
                    const productItem = document.createElement('li');
                    productItem.innerHTML = `
                        <div class="SanPhamMoi__column">
                        <div class="SanPhamMoi__column__img">
                        <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">
                            <img style="max-width: 95%; max-height: 95%;" src="${product.image}" alt="">
                        </a>
                    </div>
                    <div class="SanPhamMoi__column__content">
                        <div class="SanPhamMoi__column__content__title">
                            <p>
                                <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">${product.name}</a>
                            </p>
                        </div>
                        <div class="SanPhamMoi__column__content__price" style="width: 100%; height: 20px;">
                            <span class="woocommerce-Price-amount amount"><bdi>${product.price}<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span>
                        </div>
                        <div class="SanPhamMoi__column__content__button" style="width: 100%; height: 40px; ">
                            <a href="./detail.html?id=${product.id}" class="product-link" data-id="${product.id}">
                                CHI TIẾT
                            </a>
                        </div>
                    </div>
                        </div>
                    `;
                    // Add the filtered product to the list
                    productContainer.appendChild(productItem);
                }
            });
        })
        .catch(error => {
            console.error('Error loading data from JSON Server: ', error);
        });
}