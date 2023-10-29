let cartItems = JSON.parse(localStorage.getItem("cart"));
if (cartItems == null) cartItems = [];

function napSP(){
    var tbody = document.getElementById("datarow");
    tbody.innerText="";
    for(var i=0; i<cartItems.length; i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        var sp=cartItems[i];
        tr.innerHTML = `
        <tr>
            <td id="hinh">
                <img width="76px" height="76px" src="${sp.hinh}" alt="">
            </td>
            <td id="ten" style="margin-left: 0px;">
                ${sp.ten} 
            </td>
                <td id="gia">
                    ${sp.gia} 
                </td>
            <td>
            <div class="addquantity" id="soluong">
                <input class="change-color" type="button" value="-" onclick="reduceSoLuong(${i})">
                <input class="shadow" style="text-align: center;" type="text" value="${sp.soluong}"
                        onchange="suaSoLuong(${i}, this.value)">
                <input class="change-color" type="button" value="+" onclick="addSoLuong(${i})">
            </div>
            </td>
            <td id="tongTienMotSP">
                ${sp.soluong*sp.gia}
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

function suaSoLuong(index, value){
    cartItems[index].soluong=value;
    napSP();
}

function addSoLuong(index){
    cartItems[index].soluong++;
    napSP();
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
function reduceSoLuong(index){
    if(cartItems[index].soluong>1){
        cartItems[index].soluong--;
        napSP();
    }else{
        xoaSP(index);
        napSP();
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
function xoaSP(index){
    cartItems.splice(index,1);
    napSP();
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function tinhTongTien(){
    var tong = 0;
    for(var i=0; i <cartItems.length; i++){
        var tien = cartItems[i].gia*cartItems[i].soluong;
        tong+=tien;
    }
    document.getElementById("tongTien").innerText = tong;
    document.getElementById("congTienShip").innerText = tong+30000;
}
