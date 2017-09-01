(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('AdminController', AdminController);

        AdminController.$inject = ['$scope'];

        function AdminController($scope)
        {
            $scope.number = "50%";
        }
})();