// Define IIFE
(() => {
  angular
    .module("CalculatorApp", [])
    .controller("CalculatorController", function ($scope) {
      $scope.output = "";

      $scope.appendNumber = function (num) {
        $scope.output += num;
      };

      $scope.clear = function () {
        $scope.output = "";
      };
    });
})();
