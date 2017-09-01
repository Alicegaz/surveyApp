(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('IndexController', IndexController);

        IndexController.$inject = ['$window', '$rootScope', '$scope'];

        function IndexController($window, $rootScope, $scope)
        {
            $scope.loggedIn = $rootScope.globals.currentUser;
        }
})();