window.updateController = function ($scope, $http, $location) {
    const api = 'http://localhost:3000/learner';

    $scope.getStudentDetails = function () {
        const studentId = $location.search().id;
        if (studentId) {
            $http.get(api + '/' + studentId).then(function (response) {
                if (response.status === 200) {
                    $scope.student = response.data;
                    console.log(response.data);
                }
            });
        }
    };

    $scope.updateStudent = function () {
        const studentId = $location.search().id;
        if (studentId) {
            // Thêm validate ở đây
            if (
                $scope.student.name === '' ||
                $scope.student.email === '' ||
                $scope.student.phoneNumber === '' ||
                $scope.student.cmnd === '' ||
                $scope.student.subject === ''
            ) {
                alert('Không được bỏ trống trường nào!');
                return;
            }

            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.student.email))) {
                alert('Email không hợp lệ!');
                return;
            }

            if (
                !(
                    /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test($scope.student.phoneNumber) ||
                    /(0[3|5|7|8|9])+([0-9]{8})\b/g.test($scope.student.phoneNumber)
                )
            ) {
                alert('Số điện thoại không phải số Việt Nam!');
                return;
            }

            if (!(/^\d{12}$/.test($scope.student.cmnd))) {
                alert('Chứng minh không đúng!');
                return;
            }

            $http.put(api + '/' + studentId, $scope.student).then(function (response) {
                if (response.status === 200) {
                    $location.path('/dang-hoc');
                }
            });
        }
    };

    $scope.convertToString = function (arr) {
        return arr.toString();
    };

    $scope.getMoney = function (arr) {
        const a = arr.length;
        var x = 680000 * a;
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x;
    };

    $scope.getStudentDetails();
};
