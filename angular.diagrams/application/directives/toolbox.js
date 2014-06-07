angular.module('ngDiagrams')
    .directive('ngdToolbox', function () {
        return {
            restrict: 'E',
            templateUrl: 'toolbox.html',
        };
    });