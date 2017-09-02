(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('ResponseController', ResponseController);

        ResponseController.$inject = ['$window', '$rootScope', '$scope', '$log', '$timeout', '$stateProvider'];

        function ResponseController($window, $rootScope, $scope, $log, $timeout, $stateProvider)
        {
            var success = $state.params.success;
            if (success)
                {
                    FlashService.Succes("The form was succesfully submitted");
                }
            else
                FlashService.Error("Failed to submit the form");
        }
})();