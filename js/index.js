(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('IndexController', IndexController);

        IndexController.$inject = ['$window', '$rootScope', '$scope', '$localStorage'];

        function IndexController($window, $rootScope, $scope, $localStorage)
        {
            $rootScope.globals = $localStorage.get('globals') || {};
            $scope.loggedIn = $rootScope.globals.currentUser;
        }
})();