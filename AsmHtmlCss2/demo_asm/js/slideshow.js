var manghinh=[];
var hientai=0;
function nap(){
    for(var i =0; i < 3; i++){
        manghinh[i] = new Image();
        manghinh[i].src="img/slide"+i+".png";
    }
}
function next(){
    hientai++;
    if(hientai<=2){
        document.getElementById("hinh").src=manghinh[hientai].src;
    }else {
        hientai=0;
        document.getElementById("hinh").src=manghinh[hientai].src;
    }
}
function prev(){
    hientai--;
    if(hientai>=0){
        document.getElementById("hinh").src= manghinh[hientai].src;
    }else if(hientai<=-1){
        hientai=2;
        document.getElementById("hinh").src= manghinh[hientai].src;
    }
   
}