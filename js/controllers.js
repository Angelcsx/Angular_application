'use strict';

var MyCtrls = angular.module( 'MyCtrls' , [ 'ngRoute' ] );


MyCtrls.controller( 'navigation' , ['$scope' , '$location' , function($scope , $location){
	
			console.log( $location.path() );
	
			$scope.isActive = function ( path ) {
				return $location.path() === path;
			};

}]);


MyCtrls.controller( 'products' , ['$scope' , '$http' , function($scope , $http){
	
		$http.get( 'model/produkty.json' ).success ( function( data ){
			
			$scope.products = data;
			
		} ).error( function(){
			
			console.log( 'Błąd pobrania pliku json' )
			
			} );

			$scope.delete = function (product, $index) {
				$scope.products.splice($index,1);
				//TODO: zapisac dane przez api
				
				
				
				console.log (product);
			};

}]);


MyCtrls.controller( 'productEdit' , ['$scope' , '$http' , '$routeParams' , function($scope , $http, $routeParams){
	
		$http.post( 'model/produkty.json' ).success ( function( data ){
			
			var products = data;
			$scope.product = products[$routeParams.id];
			
		} ).error( function(){
			
			console.log( 'Błąd pobrania pliku json' )
			
			} );
			
			$scope.saveChanges = function (product) {
				
				//TODO: zapisac dane przez api
				
				console.log (product);
				console.log ($routeParams.id);
			};
}]);


MyCtrls.controller( 'productCreate' , ['$scope' , '$http' , function($scope , $http){
	
		
			$scope.createProduct = function (product) {
				
				//TODO: przeslac dane prez API
				
				console.log ($scope.product);

			};
}]);


MyCtrls.controller( 'users' , ['$scope' , '$http' , function($scope , $http){
	
				$http.get( 'model/users.json' ).success ( function( data ){
			
			$scope.users = data;
			
		} ).error( function(){
			
			console.log( 'Błąd pobrania pliku json' )
			
			} );

			$scope.delete = function (user, $index) {
				$scope.users.splice($index,1);
				//TODO: zapisac dane przez api
				
			};
			
}]);



MyCtrls.controller( 'userEdit' , ['$scope' , '$http' , '$routeParams' , function($scope , $http, $routeParams){
	
		$http.post( 'model/users.json' ).success ( function( data ){
			
			var users = data;
			$scope.user = users[$routeParams.id];
			
		} ).error( function(){
			
			console.log( 'Błąd pobrania pliku json' )
			
			} );
			
			$scope.saveUser = function (user) {
				
				//TODO: zapisac dane przez api
				
				console.log (user);
				console.log ($routeParams.id);
			};
}]);


MyCtrls.controller( 'userCreate' , ['$scope' , '$http' , function($scope , $http){
	
		
			$scope.createUser = function () {
				
				//TODO: przeslac dane prez API
				
				console.log ($scope.user);

			};
}]);

MyCtrls.controller( 'orders' , ['$scope' , '$http' , function($scope , $http){
	
				$http.get( 'model/orders.json' ).success ( function( data ){
			
			$scope.orders = data;
			
		} ).error( function(){
			
			console.log( 'Błąd pobrania pliku json' )
			
			} );

			$scope.delete = function (order, $index) {
				$scope.orders.splice($index,1);
				//TODO: zapisac dane przez api
				
			};
			
}]);