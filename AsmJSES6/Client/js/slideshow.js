var manghinh = [];
var hientai = 1;
function nap() {
    for (var i = 1; i < 5; i++) {
        manghinh[i] = new Image();
        manghinh[i].src = "./assets/slide" + i + ".webp";
    }
}
function next() {
    hientai++;
    if (hientai <= 4) {
        document.getElementById("hinh").src = manghinh[hientai].src;
    } else {
        hientai = 0;
        document.getElementById("hinh").src = manghinh[hientai].src;
    }
}
function prev() {
    hientai--;
    if (hientai >= 0) {
        document.getElementById("hinh").src = manghinh[hientai].src;
    } else if (hientai <= -1) {
        hientai = 4;
        document.getElementById("hinh").src = manghinh[hientai].src;
    }

}