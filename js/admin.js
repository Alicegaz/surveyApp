(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('AdminController', AdminController);

        AdminController.$inject = ['$scope', '$rootScope', 'api'];

        function AdminController($scope, $rootScope, api)
        {
            //vm = this;
            $scope.profCode = 0;
            $scope.surveysList = [];
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
            api.getAllQuestions()
            .then(function(result){
                $scope.questions= result.data;
            });
            
            api.getAllResponses()
            .then(function(result)
            {
                $scope.responses = result.data;
            });      

            
            /**$scope.questions = [
                {
                    id: 123,
                    text: 'Name?',
                    type: 'input',
                    number: 0,
                    string: ""
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

            $scope.responses = [{"id":1,"created_at":"2017-09-03T09:50:45.312Z","results":[
                {"question":{"id":1,"kind":"input","text":"What is your name?"},"input_entered":"Bertrand"},
                {"question":{"id":3,"kind":"multi","text":"What languages?","answers":[{"id":1,"text":"JavaScript"},{"id":2,"text":"Python"},{"id":3,"text":"Java"}]},"selected_answers":[{"id":1,"text":"JavaScript"},{"id":2,"text":"Python"}]},
                {"question":{"id":4,"kind":"single","text":"How many hours you work a day?","answers":[{"id":4,"text":"1"},{"id":5,"text":"2"},{"id":6,"text":"0"},{"id":7,"text":"1"}]},"selected_answer":{"id":9,"text":"0"}}
            ]}
            ];**/

            var a = $scope.responses.length;
            $scope.numeric = [];
        
            for (var i = 0; i<$scope.responses.length; i++)
                {
                    for (var j = 0; j<$scope.responses[i].results.length; j++)
                        {
                            $scope.responses[i].results[j].order = j;
                        }
                }

            for (var i = 0; i<$scope.questions.length; i++)
                {
                    if ($scope.questions[i].type == 'multi' || $scope.questions[i].type == 'single')
                        {
                            for (var j = 0; j<$scope.questions[i].answers.length; j++)
                                {
                                    $scope.questions[i].answers[j].order = i;
                                    $scope.questions[i].answers[j].number = 0;
                                    $scope.questions[i].answers[j].string = "";
                                }
                            
                        }
                        if ($scope.questions[i].type == 'single')
                            {
                                $scope.questions[i].order = i;
                                $scope.questions[i].number = 0;
                            }
                }

            q1();
            function q1()
            {
                /**for every person */
                for (var i = 0; i <$scope.responses.length; i++)
                    {
                        /**for every record in the list of answers to the 4 answer of the current person */
                        for (var j = 0; j <$scope.responses[i].results.length; j++)
                            {
                                //for each question for the person
                                if ($scope.responses[i].results[j].question.kind == 'multi')
                                    {
                                        for (var k = 0; k < $scope.responses[i].results[j].selected_answers.length; k++)
                                            {
                                                var objIndex = $scope.questions[j].answers.findIndex((obj => obj.text == $scope.responses[i].results[j].selected_answers[k].text));
                                                $scope.questions[j].answers[objIndex].number++;
                                            }
                                    }
                                if ($scope.responses[i].results[j].question.kind == 'single')
                                    {
                                        var objIndex = $scope.questions[j].answers.findIndex((obj => obj.text == $scope.responses[i].results[j].input_entered));
                                        $scope.questions[j].answers[objIndex].number++;
                                        $scope.questions[j].number++;
        
                                    }
                                    /**array of numeric answers  [{number: 3, text: ""}{number: 4, text: ""}{number: 5, text: ""}] */
                            }
                        }

                    var size = $scope.responses.length;
                    for (var i = 0; i < $scope.questions.length; i++)
                        {
                            if ($scope.questions[i].type == "multi" || $scope.questions[i].type == "single")
                                {
                                    for (var j = 0; j<$scope.questions[i].answers.length; j++)
                                        {
                                            var n = ($scope.questions[i].answers[j].number * 100)/size;
                                            $scope.questions[i].answers[j].string = n.toString()+"%";
                                        }
                                }
                                if ($scope.questions[i].type == "single")
                                    {
                                        $scope.questions[i].number = $scope.questions[i].number / size;
                                    }
                               
                        }
                   
            }
        }
})();