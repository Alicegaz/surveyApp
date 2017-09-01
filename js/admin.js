(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('AdminController', AdminController);

        AdminController.$inject = ['$scope', '$rootScope'];

        function AdminController($scope, $rootScope)
        {
            //vm = this;
            $scope.profCode = 0;
            $scope.surveysList = [];
            $scope.languages = [
                { name: 'JavaScript', number: 50, string:""},
                { name: 'Java', number: 70, string:"" },
                { name: 'Python', number: 30, string: "" },
                { name: 'Elixir', number: 60, string:"" },
                { name: 'Rust', number: 40, string:"" },
                { name: 'Go', number: 10, string:""},
                { name: 'TypeScript', number: 30, string:"" },
                { name: 'PHP', number: 11, string:""},
                { name: 'Ruby on Rails', number: 65, string:"" },
                { name: 'C#', number: 80, string:""  },
                { name: 'Swift', number: 90, string:""  }
            ];
            $scope.developers = [
                { name: 'Web developer', number: 10, string:"" },
                { name: 'Desktop applications developer', number: 20, string:"" },
                { name: 'Mobile developer', number: 5, string:"" },
                { name: 'Database administrator', number: 6, string:"" },
                { name: 'Developer with a statistics or mathematics background', number: 4, string:"" },
                { name: 'Systems administrator', number: 15, string:"" },
                { name: 'DevOps specialist', number: 60},
                { name: 'Embedded applications/devices developer', number: 43, string:"" },
                { name: 'Data scientist', number: 50, string:"" },
                { name: 'Other', number: 43, string:"" },
                { name: 'Graphics programming', number: 60, string:"" },
                { name: 'Graphic designer', number: 80, string:"" },
                { name: 'Machine learning specialist',number: 40, string:"" },
                { name: 'Quality assurance engineer', number: 60, string:"" }
                
            ];

            //item = null;
            $scope.years = [
                {name: "0", number: 0, string:"" }, 
                {name: "1", number: 0, string:"" }, 
                {name: "2", number: 0, string:"" }, 
                {name: "3", number: 0, string:"" }, 
                {name: "4", number: 0, string:"" }, 
                {name: "5", number: 0, string:"" }, 
                {name: "6", number: 0, string:"" }, 
                {name: "7", number: 0, string:"" }, 
                {name: "8", number: 0, string:"" }, 
                {name: "9", number: 0, string:"" }, 
                {name: "10", number: 0, string:"" }, 
                {name: "11", number: 0, string:"" }, 
                {name: "12", number: 0, string:"" }
            ];
            $scope.workHours = 0;

            $scope.number = "50%";
            /**the answer is [
             * { q1: "", q2: "", ....
             * },
             * { q1: "", q2: "", ....};
             * 
             * ] */

            //#TODO uncomment*/
            /*************** */
            /*api.getSurveysList()
            .then(function(result){
                vm.surveysList = result;
            });*/
            $scope.surveysList = [
                {name: "mark", surname: "berg", email: "a@yan.ru", 
                languagesList: [{name: "JavaScript"}, {name: "JavaScript"}, {name: "Python"}],
                developersList: [{name: "Web developer"}],
                profCode: 10,
                company: "Yandex",
                workHours: 10
                 },
                 {name: "ben", surname: "first", email: "n@ya.ru", 
                 languagesList: [{name: "Java"}, {name: "JavaScript"}, {name: "Python"}],
                 developersList: [{name: "Web developer"}, {name: "Web developer"}, {name: "Web developer"}],
                 profCode: 10,
                 company: "Yandex",
                 workHours: 10
                },
                {name: "sten", surname: "second", email: "d@ya.ru", 
                languagesList: [{name: "Java"}, {name: "JavaScript"}, {name: "Python"}],
                developersList: [{name: "Web developer"}, {name: "Web developer"}],
                profCode: 10,
                company: "Yandex",
                workHours: 10
                },
                {name: "alan", surname: "third", email: "dsfsd@ya.ru", 
                languagesList: [{name: "JavaScript"}],
                developersList: [{name: "Web developer"}, {name: "Web developer"}],
                profCode: 10,
                company: "Yandex",
                workHours: 10
                }
            ];


            q1();
            function q1()
            {
                /**for every person */
                for (var i = 0; i <$scope.surveysList.length; i++)
                    {
                        /**for every record in the list of answers to the 4 answer of the current person */
                        for (var j = 0; j < $scope.surveysList[i].languagesList.length; j++)
                            {
                                var objIndex = $scope.languages.findIndex((obj => obj.name == $scope.surveysList[i].languagesList[j].name));
                                $scope.languages[objIndex].number++;
                            }

                        for (var j = 0; j <$scope.surveysList[i].developersList.length; j++)
                            {
                                var objIndex = $scope.developers.findIndex((obj => obj.name == $scope.surveysList[i].developersList[j].name));
                                $scope.developers[objIndex].number++;
                            }
                                    
                        var objIndex = $scope.years.findIndex((obj => obj.name == $scope.surveysList[i].profCode));
                        $scope.years[objIndex].number++;
                        $scope.workHours+=$scope.surveysList[i].workHours;
                    }

                    var size = $scope.surveysList.length;
                    for (var i = 0; i<$scope.languages.length; i++)
                        {
                            var n = ($scope.languages * 100)/size;
                            $scope.languages[i].string = n.toString()+"%";
                        }
                    for (var i = 0; i<$scope.developers.length; i++)
                        {
                            var n = ($scope.developers * 100)/size;
                            $scope.developers[i].string = n.toString()+"%";
                        }
                    for (var i = 0; i<$scope.developers.length; i++)
                        {
                            var n = ($scope.developers * 100)/size;
                            $scope.developers[i].string = n.toString()+"%";
                        }
                    $scope.workHours = $scope.workhours / size;
            }
        }
})();