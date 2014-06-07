angular.module('ngDiagrams')
    .controller('sequenceController', function ($scope, parserService) {
        $scope.rawText = '';

    $scope.commands = [];

        $scope.draw=function() {


            var commands = parserService.parse($scope.rawText);
            $scope.commands = commands;


        }
    });