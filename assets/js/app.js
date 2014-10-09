var app = angular.module('app', []);

app.controller('RoomsController', function ($scope) {

  console.log("rooms controller");
  $scope.index = 0;
  $scope.url = "../minimages/mkslogo.png"
  $scope.imageUrls = [
    "unitAdownstairs-clean",
    "unitAupstairs-clean"
  ];


});