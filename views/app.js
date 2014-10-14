'use strict';
var shareSquareApp =angular.module('shareSquareApp', [ 'ngRoute', 'shareSquareAppControllers'  ]);

shareSquareApp.config(['$routeProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.when('/search', {
			templateUrl: '/views/partials/search.html',
			controller:'SearchController'
		})
		
		.when('/wishlist', {
			templateUrl: '/views/partials/wishlist.html',
			controller:'WishlistController'
		})
		
		.when('/inventory', {
			templateUrl: '/views/partials/inventory.html',
			controller:'InventoryController'
		})
		.when('/profile',{
		    templateUrl: './profile.html',
		    controller:'ProfileController'
		})
		.otherwise({
        redirectTo: '/dashboard'
      });
//	$locationProvider.html5Mode(true);

}]);