function login() {
    // Lấy giá trị từ các trường đăng nhập
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    // Đăng nhập thành công, lưu thông tin vào localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Đăng nhập thành công!');
}

// Kiểm tra nếu đã đăng nhập và hiển thị tên người dùng
window.onload = function () {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        alert('Xin chào ' + loggedInUser);
    }
}