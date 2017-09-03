(function (angular) {
  
  var app = angular.module("app");
  
  function api($http, pathBase, NameParameterService) {
    queueApi.prototype = new baseApi($http);
    return {
          /*getAllResponses: function(){
            return $http.get('https://cc-survey-api.herokuapp.com/api/responses');
          },
          getAllQuestions: function(){
              return $http.get('https://cc-survey-api.herokuapp.com/api/questions')
          },*/
          getAllResponses: function(){
            return $http({
              url:'https://cc-survey-api.herokuapp.com/api/responses',
              method:"GET",
         });
          },
          getAllQuestions: function(){
              return $http({
                url:'https://cc-survey-api.herokuapp.com/api/questions',
                method:"GET",
           });
          },
          /*getOne: function(id){
            return $http.get('broker/questions'+id);
          },*/
          save: function(ancet){
            return $http({
              method  : "POST",
              url     : 'https://cc-survey-api.herokuapp.com/api/questions',
              data    : ancet,
                        });
          },
          /*deleteOne: function(id)
          {
              return $http.delete('broker/act/'+id);
          }*/
        
    };
}
api.$inject = ["$http"];
app.factory("api", api);
})(angular);