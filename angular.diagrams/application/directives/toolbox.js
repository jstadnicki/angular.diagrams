angular.module('ngDiagrams')
    .directive('ngdToolbox', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'toolbox.html',
        };
    });