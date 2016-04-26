/*
var app = angular.module('myApp', []);
app.controller('extendCtrl', function($scope) {
    $scope.firstName = 'zhifu';
    $scope.lastName = 'liu';
    $scope.fullName = function() {
        return $scope.firstName + ' ' + $scope.lastName;
    }
});
*/
angular.module('myApp', [])
    .controller('extendCtrl', function($scope) {
        $scope.firstName = 'zhifu';
        $scope.lastName = 'liu';
        $scope.fullName = function() {
            return $scope.firstName + ' ' + $scope.lastName;
        }
    });
