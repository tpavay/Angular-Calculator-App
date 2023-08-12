// Define IIFE
(() => {
  angular
    .module("CalculatorApp", [])
    .controller("CalculatorController", function ($scope) {
      // ----- Scope variables -----
      $scope.expression = "";
      $scope.calculationOccurred = false;

      // ----- Scope functions ------

      /* 
      Summary: Appends inputted character to expression string if it's valid
      Piece: The piece to be appended to the expression
      isOperator: Whether or not the piece is an operator
      */
      $scope.appendToOutput = function (piece, isOperator) {
        // Reset expression if we just calculated it before validating the new piece
        if ($scope.calculationOccurred) {
          $scope.expression = "";
          $scope.calculationOccurred = false;
        }

        if (!isInvalidPiece(piece, $scope.expression)) {
          if (isOperator) {
            $scope.expression += " ";
          }
          $scope.expression += piece;
        }
      };

      /* 
      Summary: Clears the expression string
      */
      $scope.clear = function () {
        $scope.expression = "";
      };

      /* 
      Summary: Evaluates the expression string
      */
      $scope.calculate = function () {
        // Evaluate the expression string
        if ($scope.expression !== "" || $scope.expression.charAt()) {
          $scope.expression = eval($scope.expression).toString();
          $scope.calculationOccurred = true;
        }
      };

      // ----- Helper Functions ------

      /* 
      Summary: Checks if the piece to be added to the expression is valid
      given the current expression
      Piece: The piece to be appended to the expression
      expression: The current expression
      */
      function isInvalidPiece(piece, expression) {
        // If the user enters consecutive operators
        let expLength = expression.length;

        if (isOperator(piece) && isOperator(expression.charAt(expLength - 1))) {
          return true;
          // If the user enters an operator as the first character
        } else if (expression === "" && isOperator(piece)) {
          return true;
        } else {
          return false;
        }
      }

      /* 
      Summary: Checks whether a piece is an operator or not
      Piece: The piece to be appended to the expression
      */
      function isOperator(piece) {
        let operators = ["+", "-", "*", "/", "."];
        if (operators.includes(piece)) {
          return true;
        } else {
          return false;
        }
      }
    });
})();
