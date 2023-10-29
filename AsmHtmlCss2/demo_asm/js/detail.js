var soluong = document.getElementById("soluong").value;
var phanloai = "";

document.getElementById("pl1").addEventListener("click", function () {
  phanloai = 1;
});
document.getElementById("pl2").addEventListener("click", function () {
  phanloai = 2;
});

function chietmuoiml() {
  document.getElementById("Gia1").innerHTML = '360.000đ';
  document.getElementById("Gia2").innerHTML = "";
  document.getElementById("gach").innerHTML = "";
}

function chiet1l() {
  document.getElementById("Gia1").innerHTML = '5.000.000đ';
  document.getElementById("Gia2").innerHTML = "";
  document.getElementById("gach").innerHTML = "";
}

function tang() {
  soluong++;
  document.getElementById("soluong").value = soluong;
}

function giam() {
  if (soluong > 1) {
    soluong--;
    document.getElementById("soluong").value = soluong;
  }
}

function addCart(e, id, ten, gia, hinh) {
  if (!phanloai) {
    alert("Vui lòng chọn dung tích");
    return;
  }

  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (cartItems == null) cartItems = [];
  var dacosanphamtronggio = false;
  for (i = 0; i < cartItems.length; i++) {
    var sp = cartItems[i];
    if (sp["id"] == id) {
      sp["soluong"]++;
      dacosanphamtronggio = true;
    }
  }
  if (dacosanphamtronggio == false) {
    cartItems.push({ id, ten, gia, hinh, soluong: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert("Thêm vào giỏ hàng thành công");
}
