module generatorGulpAngular {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'//,
        controller: 'AboutController',
        controllerAs: 'about'
      });

      $urlRouterProvider.otherwise('/');
    }

  }
}
