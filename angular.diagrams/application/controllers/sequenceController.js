angular.module('ngDiagrams')
    .controller('sequenceController', function ($scope, parserService, renderService) {
        $scope.rawText = 'A->B:foo()';

        $scope.commands = [];
        $scope.textCanvas = [];

        $scope.draw = function () {
            var commands = parserService.parse($scope.rawText);
            var renderResult = renderService.render(commands);

            $scope.textCanvas = renderResult;
            $scope.commands = commands;
        }
    });