angular.module('ngDiagrams')
<<<<<<< HEAD
    .factory('parserService', function() {
        var service = {};
        service.commands = ["->", "<-"];
    var splitParticipants = function(rawParticipants) {

        for (var i = 0; i < service.commands.length; i++) {

            if (rawParticipants.indexOf(service.commands[i]) > 0) {
                var participants = rawParticipants.split(service.commands[i]);
                return {
                    caller: participants[0],
                    callee: participants[1],
                    operator: service.commands[i]
                };
            }
        }
        throw "syntax errror";
    };
    service.parse = function(rawText) {
        var inputLines = rawText.split(';');
        var linesCount = inputLines.length;
        var commandsList = [];
        var i=0;
        while (inputLines[i]) {
            
            var commandParts = inputLines[i].split(":");
            var tokens = splitParticipants(commandParts[0]);
            var command = new Command(tokens.caller, tokens.callee, tokens.operator, commandParts[1]);
            commandsList.push(command);
            i++;
        };

        return commandsList;

    };

    return service;


});
=======
    .factory('parserService', function ($rootScope) {
        var service = {};
        var splitParticipants = function (rawParticipants) {

            for (var i = 0; i < $rootScope.supportedCommand.length; i++) {

                if (rawParticipants.indexOf($rootScope.supportedCommand[i]) > 0) {
                    var participants = rawParticipants.split($rootScope.supportedCommand[i]);
                    return {
                        caller: participants[0],
                        callee: participants[1],
                        operator: $rootScope.supportedCommand[i]
                    };
                }
            }
            throw "syntax errror";
        };
        service.parse = function (rawText) {
            var inputLines = rawText.split(';');
            var linesCount = inputLines.length;
            var commandsList = [];
            var i = 0;
            while (inputLines[i]) {

                var commandParts = inputLines[i].split(":");
                var tokens = splitParticipants(commandParts[0]);
                var command = new Command(tokens.caller, tokens.callee, tokens.operator, commandParts[1]);
                commandsList.push(command);
                i++;
            };

            return commandsList;

        };

        return service;


    });
>>>>>>> master
