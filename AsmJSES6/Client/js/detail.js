document.addEventListener("DOMContentLoaded", function () {
    const currentURL = window.location.href;
    const id = new URL(currentURL).search.at(-1);

    fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(productInfo => {
            // Cập nhật trang chi tiết sản phẩm với thông tin từ productInfo.
            document.getElementById("productImage").src = productInfo.image;
            document.getElementById("productName").textContent = productInfo.name;
            document.getElementById("productPrice").textContent = productInfo.price;
            document.getElementById("productDetail").textContent = productInfo.detail;
            // Cập nhật các phần khác tương tự nếu cần.

            // Khai báo biến số lượng ở đây để có thể sử dụng trong toàn bộ script
            var soluong = document.getElementById("soluong").value;
            console.log(soluong);

            function tang() {
                soluong++;
                document.getElementById("soluong").value = soluong;
                console.log(soluong);

            }

            function giam() {
                if (soluong > 1) {
                    soluong--;
                    document.getElementById("soluong").value = soluong;
                    console.log(soluong);
                }
            }

            function addToCart() {
                if (soluong < 1) {
                    alert("Vui lòng chọn ít nhất 1 sản phẩm để thêm vào giỏ hàng.");
                    return;
                }
                // Tạo đối tượng sản phẩm và thêm vào giỏ hàng, sau đó lưu giỏ hàng vào localStorage
                const productToAdd = {
                    id: id,
                    name: productInfo.name,
                    price: productInfo.price,
                    image: productInfo.image,
                    quantity: soluong,
                };

                // Lấy giỏ hàng từ localStorage (nếu tồn tại)
                let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
                cartItems.push(productToAdd);

                // Lưu giỏ hàng vào localStorage
                localStorage.setItem("cart", JSON.stringify(cartItems));

                alert(`Đã thêm ${soluong} sản phẩm vào giỏ hàng.`);
            }

            // Gán các hàm vào biến toàn cục để có thể gọi từ nút "THÊM VÀO GIỎ HÀNG"
            window.tang = tang;
            window.giam = giam;
            window.addToCart = addToCart;
        })
        .catch(error => {
            console.error('Error loading product details: ', error);
        });
});
