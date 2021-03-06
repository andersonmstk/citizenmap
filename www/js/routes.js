angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.citizenMap', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/citizenMap.html',
        controller: 'citizenMapCtrl'
      }
    }
  })

  .state('menu.mapa', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

  .state('menu.configuraEs', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraEs.html',
        controller: 'configuraEsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.cadastro', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('principal', {
    url: '/page6',
    templateUrl: 'templates/principal.html',
    controller: 'principalCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});