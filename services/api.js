(function (angular) {
  
  var app = angular.module("app");
  
  function api($http, $sce) {
    return {
          getAllResponses: function(){
            return $http.get('https://cc-survey-api.herokuapp.com/api/responses');
          },
          getAllQuestions: function(){
              return $http.get('https://cc-survey-api.herokuapp.com/api/questions');
              
          },
          /*save: function(ancet){
            return $http.post('https://cc-survey-api.herokuapp.com/api/save', ancet);
          },*/
          save: function(obj)
          {
            return $http.get('https://cc-survey-api.herokuapp.com/api/save', {
            params: JSON.stringify(obj)
        });
      }
        
    };
}
api.$inject = ["$http", "$sce"];
app.factory("api", api);
})(angular);