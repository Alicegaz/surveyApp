(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('LoginController', LoginController);

        LoginController.$inject = ['$window', '$rootscope', '$log', '$timeout', '$stateProvider'];

        function LoginController($window, $rootscope, $log, $timeout, $stateProvider)
        {
            var vm = this;
            vm.survey = null;
            vm.save = save;
            vm.reset = reset;
            var success = false;

            function save()
            {
                vm.dataLoading = true;
                if (Api)
                    Api.Send(vm.survey)
                        .then(function() {
                            //#TODO handle the response 
                            //use the dely to display progress bar
                            $state.go("response", {success: this.success});
                        })
            }
        }
})();