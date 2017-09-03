(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('SurveyController', SurveyController);

        SurveyController.$inject = ['$scope', '$rootScope', '$state', '$stateParams'];

        function SurveyController($scope, $rootScope, $state, $stateParams)
        {
            var vm = this;
            vm.d = "dfsdsd sdgfdsg dgdf sg fdgd";
            vm.survey = [];
            vm.save = save;
            vm.i = 0;
            //vm.reset = reset;
            vm.success = 0;
            vm.disabled = undefined;
            vm.searchEnabled = undefined;
            vm.clear = function() {
                vm.person.selected = undefined;
                vm.address.selected = undefined;
                vm.country.selected = undefined;
              };
            var object = [];
            vm.response = [
                {
                    id: 123,
                    text: 'Name?',
                    type: 'input'
                },
                {
                    id: 2,
                    text: 'Languages?',
                    type: 'multi',
                    answers: [
                        { id: 101, text: 'JavaScript' },
                        { id: 102, text: 'Java' },
                        { id: 103, text: 'Python' }
                    ]
                },
                {
                    id: 26,
                    text: 'Hours?',
                    type: 'single',
                    answers: [
                        { id: 201, text: '0' },
                        { id: 202, text: '1' },
                        { id: 203, text: '2' }
                    ]
                }
            ];

            for (var i = 0; i<vm.response.length; i++)
                {
                    vm.response[i].number = i;
                }
            //the resulting object is in object array                
            function save()
            {
                vm.dataLoading = true;
                
                for (var i = 0, l = vm.survey.length; i < l; i++)
                    {
                        var item = {};
                        item.answers = vm.survey[i.toString()];
                        item.id = vm.response[i].id;
                        item.type = vm.response[i].type;
                        object[i] = item;
                        console.log(object[i]);
                    }
                var t = vm.success;
                $state.go("response", {success: vm.success});
                /*if (Api)
                    Api.Send(object)
                        .then(function() {
                            //#TODO handle the response 
                            //use the dely to display progress bar
                            $state.go("response", {success: this.success});
                        })*/
        }
        }
})();