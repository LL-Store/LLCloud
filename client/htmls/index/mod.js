ctrlapp.register.controller('IndexController', ['$scope', function ($scope) {

    $scope.initMethod = function () {

        if (sessionStorage.getItem('isLogin') != 'yes') {
            $scope.goto("login");
        }

    };

}]);
