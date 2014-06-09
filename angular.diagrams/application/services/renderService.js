angular.module('ngDiagrams')
    .factory('renderService', function () {

        var service = {};

        service.render = function (commands) {
            var result = [];
            for (var i = 0; i < commands.length; i++) {
                result.push(commands[i].toString());
            }

            return result;
        };

        return service;

    });