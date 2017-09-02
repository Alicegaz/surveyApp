(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('SurveyController', SurveyController);

        SurveyController.$inject = ['$scope', '$rootScope'];

        function SurveyController($scope, $rootScope)
        {
            var vm = this;
            vm.d = "dfsdsd sdgfdsg dgdf sg fdgd";
            vm.survey = null;
            vm.save = save;
            //vm.reset = reset;
            var success = false;
            vm.disabled = undefined;
            vm.searchEnabled = undefined;
            vm.clear = function() {
                vm.person.selected = undefined;
                vm.address.selected = undefined;
                vm.country.selected = undefined;
              };

            vm.language = {};
            vm.languages = [
                { name: 'JavaScript'},
                { name: 'Java'},
                { name: 'Python'},
                { name: 'Elixir'},
                { name: 'Rust'},
                { name: 'Go'},
                { name: 'TypeScript'},
                { name: 'PHP'},
                { name: 'Ruby on Rails'},
                { name: 'C#'},
                { name: 'Swift'}
            ];

            vm.developer = {};
            vm.developers = [
                { name: 'Web developer'},
                { name: 'Desktop applications developer'},
                { name: 'Mobile developer'},
                { name: 'Database administrator'},
                { name: 'Developer with a statistics or mathematics background'},
                { name: 'Systems administrator'},
                { name: 'DevOps specialist'},
                { name: 'Embedded applications/devices developer'},
                { name: 'Data scientist'},
                { name: 'Other'},
                { name: 'Graphics programming'},
                { name: 'Graphic designer'},
                { name: 'Machine learning specialist'},
                { name: 'Quality assurance engineer'}
                
            ];

            //item = null;
            vm.years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            
            function save()
            {
                vm.dataLoading = true;
                $state.go("response", {success: this.success});
                /*if (Api)
                    Api.Send(vm.survey)
                        .then(function() {
                            //#TODO handle the response 
                            //use the dely to display progress bar
                            $state.go("response", {success: this.success});
                        })*/
        }
        }
})();