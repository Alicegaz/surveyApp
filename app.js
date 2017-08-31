(function() {
  'use strict';
  //angular.module('ui.select', []);
  var app = angular
  .module('app', ['ngRoute', /*'ngAnimate', */'ngCookies', 'ngSanitize', 'ui.bootstrap', 'ui.router', 'ui.select']);
  app.filter('propsFilter', function() {
    return function(items, props) {
      var out = [];
  
      if (angular.isArray(items)) {
        var keys = Object.keys(props);
  
        items.forEach(function(item) {
          var itemMatches = false;
  
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
  
          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }
  
      return out;
    };
  });
  app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider)
  {
     $stateProvider
      .state('home', {
        url: "/home",
        controller: "HomeController",
        templateUrl: 'pages/home.html',
        controllerAs: 'vm'
      })
      .state('admin', {
        url: "/admin",
        controller: "AdminController",
        templateUrl: 'pages/admin.html',
        controllerAs: 'vm'
      })
      .state('login', {
        url: "/login",
        controller: 'LoginController',
        templateUrl: 'pages/login.html',
        controllerAs: 'vm'
      })
      .state('survey', {
        url: "/survey",
        controller: 'SurveyController',
        templateUrl: '/pages/survey_from.html',
        controllerAs: 'vm'
      })
      .state('response', {
        url: "/response",
        params: {
          success: null
        },
        controller: 'ResponseController',
        templateUrl: 'pages/response.html',
        controllerAs: 'vm'
      }
    );

      $urlRouterProvider
      .when('/survey', ['$state', function($state){
        $state.go('survey');
      }])
      .otherwise('/survey');
      
  }])
})
();