var app = angular.module('theApp', ['ui.router']);

app.run(['$state', function($state) {
  $state.transitionTo('home');
}]);

app.controller('stateController', function($scope, $state) {
  $scope.$state = $state;
});

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html'
    })
    .state('experience', {
      url: '/experience',
      templateUrl: 'views/experience.html'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: 'views/skills.html'
    })
    .state('hackathons', {
      url: '/hackathons',
      templateUrl: 'views/hackathons.html'
    })
});
