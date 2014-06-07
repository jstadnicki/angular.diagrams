angular.module('ngDiagrams')
    .controller('sequenceController', function ($scope, $timeout, parserService, renderService) {
        $scope.rawText = 'A->B:foo();';

        $scope.commands = [];
        $scope.textCanvas = [];

        $scope.addCommand = function(operation) {
            $scope.rawText += 'A' + operation + 'B:foo();';
            $scope.afterChange();
        }

        var timer;
        $scope.afterChange = function () {
            if (timer) {
                $timeout.cancel(timer);
            }
            timer = $timeout($scope.draw, 250);
        }

        $scope.draw = function () {
            var commands = parserService.parse($scope.rawText);
            var renderResult = renderService.render(commands);

            $scope.textCanvas = renderResult;
            $scope.commands = commands;
        }
    });