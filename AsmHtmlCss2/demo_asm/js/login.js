function kiemform(){
    var loi="";
    var flag=true;
    if(document.f1.ten.value == ""){
        loi+=".Tên Tài Khoảng Không Được Để Trống <br>";
    }
    if(document.f1.pas1.value != document.f1.pas2.value){
        loi+=".Mật Khẩu Không Khớp <br>"
    }
    if(isNaN(document.f1.tuoi)!=true){
        loi+=".Tuổi phải là số <br>"
    }
    if(loi!=""){
        document.getElementById("thongbao").innerHTML=loi;
        var flag = false;
    }else{
        var thongbao = "ten: "+document.f1.ten.value;
        thongbao+="<br> SoDT: "+document.f1.sdt.value;
        thongbao+="<br> Email: "+document.f1.email.value;
        document.getElementById("thongbao").innerHTML=thongbao;
        var flag=true;
        
    }
    return flag;
}
