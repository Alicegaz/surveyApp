(function (angular) {
  
  var app = angular.module("app");
  
  function api($http, $sce) {
    return {
          /*getAllResponses: function(){
            return $http.get('https://cc-survey-api.herokuapp.com/api/responses');
          },
          getAllQuestions: function(){
              return $http.get('https://cc-survey-api.herokuapp.com/api/questions')
          },*/
          getAllResponses: function(){
            /*delete $http.defaults.headers.common['X-Requested-With'];
            var r = $http.jsonp($sce.trustAsResourceUrl('https://cc-survey-api.herokuapp.com/api/responses'));
            var l = $http({
              method: 'GET',
              url: $sce.trustAsResourceUrl('https://cc-survey-api.herokuapp.com/api/responses')
            });*/
            return $http.get('https://cc-survey-api.herokuapp.com/api/responses');
          },
          getAllQuestions: function(){
            /*delete $http.defaults.headers.common['X-Requested-With'];
            var r = $http.jsonp($sce.trustAsResourceUrl('https://cc-survey-api.herokuapp.com/api/questions'));     
            delete $http.defaults.headers.common['X-Requested-With'];
            var l = $http({
              method: 'GET',
              url: $sce.trustAsResourceUrl('https://cc-survey-api.herokuapp.com/api/questions')
            });*/    
              return $http.get('https://cc-survey-api.herokuapp.com/api/questions');
              
          },
          /*getOne: function(id){
            return $http.get('broker/questions'+id);
          },*/
          save: function(ancet){
            return $http.post('https://cc-survey-api.herokuapp.com/api/questions', ancet);
          },
          /*deleteOne: function(id)
          {
              return $http.delete('broker/act/'+id);
          }*/
        
    };
}
api.$inject = ["$http", "$sce"];
app.factory("api", api);
})(angular);