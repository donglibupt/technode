angular.module('techNodeApp').controller('LoginCtrl', function($scope, $http, $location) {
  $scope.login = function () {
    $http({
      url: '/ajax/login',
      method: 'POST',
      data: {
        email: $scope.email
      }//传入邮箱;
    }).success(function (user) {
      $scope.$emit('login', user)
      $location.path('/rooms')
    }).error(function (data) {
      $location.path('/login')
    })
  }
})