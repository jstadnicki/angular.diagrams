angular.module('ngDiagrams')
    .controller('sequenceController', function ($scope, parserService) {
        $scope.rawText = '';

        $scope.draw=function() {


            parserService.parse();
        }
    });