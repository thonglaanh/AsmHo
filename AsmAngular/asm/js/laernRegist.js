
window.controllerfunction = function ($scope, $http) {
    $scope.title = "Đăng ký học javascript nền tảng cho người mới bắt đầu";
    const api = "http://localhost:3000/learner";

    $scope.name = ''
    $scope.email = ''
    $scope.phoneNumber = ''
    $scope.cmnd = ''
    $scope.subject = ''

    let d = new Date();
    console.log(d.toUTCString());
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayofweek = d.getDay();
    const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    $scope.onSubmit = function () {
        //validate
        if ($scope.name == '' || $scope.email == '' || $scope.phoneNumber == '' || $scope.cmnd == '' || $scope.subject == '') {
            alert('Không được bỏ trống trường nào!')
            return null;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.email))) {
            alert("Email không hợp lệ!")
            return null
        }
        if (!(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test($scope.phoneNumber) || /(0[3|5|7|8|9])+([0-9]{8})\b/g.test($scope.phoneNumber))) {
            alert("Số điện thoại không phải số Việt Nam!");
            return null;
        }
        if (!(/^\d{12}$/.test($scope.cmnd))) {
            alert("Chứng minh không đúng!");
            return null;
        }

        $http.post(api, {
            name: $scope.name,
            email: $scope.email,
            phoneNumber: $scope.phoneNumber,
            cmnd: $scope.cmnd,
            subject: $scope.subject,
            time: dayname[dayofweek] + ' ngày ' + day + '/' + month + '/' + year, // lấy ngày hiện tại
        }).then(function (response) {
            console.log(response)
            alert('Đăng ký thành công')
            // if(response.statusText === "Created"){
            // $location.path("admin/categories");
            // }else{
            // $location.path("categories/create")
            // }
        },
            function (errors) {
                console.log(errors)
            });
    };
    $scope.convertToString = function (arr) {
        return arr.toString() // chuyển sang chuỗi
    }
    //tính tiền khoá học
    $scope.getMoney = function (arr) {
        const a = arr.length
        var x = 680000 * a;
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }


};
