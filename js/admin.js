(function(){
    'use strict';
    var app = angular
        .module('app')
        .controller('AdminController', AdminController);

        AdminController.$inject = ['$scope', '$rootScope', 'api'];

        function AdminController($scope, $rootScope, api)
        {
            //vm = this;
            $scope.myDataSource = [];

                $scope.chart = {
                    caption: "Harry's SuperMart",
                    subCaption: "Top 5 stores in last month by revenue",
                    numberPrefix: "%",
                    theme: "ocean"
                };
            

            $scope.profCode = 0;
            $scope.surveysList = [];
            $scope.workHours = 0;

            $scope.number = "50%";

            $scope.options = {};
            $scope.datas = [];

            api.getAllQuestions()
            .then(function(result){
                $scope.questions= result.data;
                questionProc();
                api.getAllResponses()
                .then(function(result)
                {
                    $scope.responses = result.data;
                    responceProce();
                    q1();
                });  
            });
            
                
            var f = $scope.questions;
            var g = 0;
            function responceProce()
            {
                var a = $scope.responses.length;
        
                for (var i = 0; i<$scope.responses.length; i++)
                    {
                        for (var j = 0; j<$scope.responses[i].results.length; j++)
                            {
                                $scope.responses[i].results[j].order = j;
                            }
                    }
            }

            function questionProc()
            {

            for (var i = 0; i<$scope.questions.length; i++)
                {
                    if ($scope.questions[i].kind == 'multi' || $scope.questions[i].kind == 'single')
                        {
                            for (var j = 0; j<$scope.questions[i].answers.length; j++)
                                {
                                    $scope.questions[i].answers[j].order = i;
                                    $scope.questions[i].answers[j].number = 0;
                                    $scope.questions[i].answers[j].string = "";
                                }
                            
                        }
                                $scope.questions[i].order = i;
                                $scope.questions[i].number = 0;
                }
            }

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
                                            var objIndex = $scope.questions[j].answers.findIndex((obj => obj.text == $scope.responses[i].results[j].selected_answer.text));
                                            $scope.questions[j].answers[objIndex].number++;
                                            $scope.questions[j].number++;
            
                                        }
                                
                            }
                        }

                    var size = $scope.responses.length;
                    for (var i = 0; i < $scope.questions.length; i++)
                        {
                            if ($scope.questions[i].kind == "multi" || $scope.questions[i].kind == "single")
                                {
                                    for (var j = 0; j<$scope.questions[i].answers.length; j++)
                                        {
                                            var n = ($scope.questions[i].answers[j].number * 100)/size;
                                            $scope.questions[i].answers[j].string = n.toString()+"%";
                                        }
                                }
                                if ($scope.questions[i].kind == "single")
                                    {
                                        $scope.questions[i].number = $scope.questions[i].number / size;
                                    }
                               
                        }

                        var k = 0;
                        for (var i = 0; i < $scope.questions.length; i++)
                            {
                                if ($scope.questions[i].graph_type == 'bar')
                                    { 
                                        var m = [];
                                        for (var j = 0; j < $scope.questions[i].answers.length; j++)
                                            {
                                                m[j] = {
                                                    label: $scope.questions[i].answers[j].text,
                                                    value: $scope.questions[i].answers[j].number
                                                }
                                            }
                                            $scope.datas[k] = m;
                                            k++;
                                        
                                    }
                                    $scope.myDataSource[k] = {
                                        chart: $scope.chart,
                                        data: $scope.datas[k]
                                    }
                            }
                            
                        
                   
            }
        }
})();