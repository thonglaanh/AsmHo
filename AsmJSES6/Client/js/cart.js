let cartItems = JSON.parse(localStorage.getItem("cart"));
console.log(cartItems);
if (cartItems == null) cartItems = [];

function napSP() {
    var tbody = document.getElementById("datarow");
    tbody.innerText = "";
    for (var i = 0; i < cartItems.length; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        var sp = cartItems[i];
        tr.innerHTML = `
        <tr>
            <td id="hinh">
                <img width="76px" height="76px" src="${sp.image}" alt="">
            </td>
            <td id="ten" style="margin-left: 0px;">
                ${sp.name} 
            </td>
                <td id="gia">
                    ${sp.price} 
                </td>
            <td>
            <div class="addquantity" id="soluong">
                <input class="change-color" type="button" value="-" onclick="reduceSoLuong(${i})">
                <input class="shadow" style="text-align: center;" type="text" value="${sp.quantity}"
                        onchange="suaSoLuong(${i}, this.value)">
                <input class="change-color" type="button" value="+" onclick="addSoLuong(${i})">
            </div>
            </td>
            <td id="xoa">
                <input type="button" value="Xóa" style="align-items: center;" onclick="xoaSP(${i})">
            </td>
        </tr>
        `;

    }
    tinhTongTien();
    document.getElementById("tienShip").innerText = 30000;
}

function suaSoLuong(index, value) {
    cartItems[index].quantity = value;
    napSP();
}

function addSoLuong(index) {
    cartItems[index].quantity++;
    napSP();
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
function reduceSoLuong(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        napSP();
    } else {
        xoaSP(index);
        napSP();
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
function xoaSP(index) {
    cartItems.splice(index, 1);
    napSP();
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function tinhTongTien() {
    var tong = 0;
    for (var i = 0; i < cartItems.length; i++) {
        // Lấy giá sản phẩm từ cartItem và loại bỏ dấu chấm và ký tự đơn vị "₫"
        var giaStr = cartItems[i].price.replace(/\./g, '').replace('₫', '');
        // Chuyển đổi giá thành số nguyên
        var gia = parseInt(giaStr);
        var tien = gia * cartItems[i].quantity;
        tong += tien;
    }
    document.getElementById("tongTien").innerText = formatGia(tong) + "₫"; // Hiển thị tổng tiền với định dạng
    document.getElementById("congTienShip").innerText = formatGia(tong + 30000) + "₫"; // Hiển thị tổng tiền vận chuyển
}

// Hàm này chuyển đổi số nguyên sang định dạng giá có dấu chấm ngăn cách hàng nghìn
function formatGia(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
function thanhToanThanhCong() {
    localStorage.removeItem("cart");
    window.location.href = "./index.html";

}

