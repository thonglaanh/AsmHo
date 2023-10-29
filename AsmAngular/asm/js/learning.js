window.learningController = function ($scope, $http, $location) {
    const api = "http://localhost:3000/learner";
    $http.get(api).then(function (response) {
        console.log(response.data);
        if (response.status == 200) {
            $scope.listStudents = response.data;
        }
    });
    $scope.convertToString = function (arr) {
        return arr.toString()
    }
    $scope.deleteStudent = function (id) {
        $http.delete(api + '/' + id).then(function (response) {
            if (response.status == 200) {
                // Refresh the data after a successful delete
                $scope.getData();
            }
        });
    };
    $scope.updateStudentScreen = function (id) {
        $location.path('/update').search({ id: id });

    }



}; 