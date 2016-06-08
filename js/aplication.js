'use strict';

var app = angular.module( 'app' , [ 'ngRoute' , 'MyCtrls' ] );

app.config ( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

	
//======================= PRODUCTS =======================
	
	$routeProvider.when( '/products' , {
		controller : 'products' ,
		templateUrl : 'partials/products.html'
		} );
	$routeProvider.when( '/product/edit/:id' , {
		controller : 'productEdit',
		templateUrl : 'partials/product-edit.html'
		} );
		
		$routeProvider.when( '/product/create' , {
		controller : 'productCreate',
		templateUrl : 'partials/product-create.html'
		} );
		
//======================= USERS =======================
		
		$routeProvider.when( '/users' , {
		controller : 'users',
		templateUrl : 'partials/users.html'
		} );
		
		$routeProvider.when( '/user/edit/:id' , {
		controller : 'userEdit',
		templateUrl : 'partials/user-edit.html'
		} );
		
		$routeProvider.when( '/user/create' , {
		controller : 'userCreate',
		templateUrl : 'partials/user-create.html'
		} );
		
		
//======================= ORDERS =======================
		
		$routeProvider.when( '/orders' , {
		controller : 'orders',
		templateUrl : 'partials/orders.html'
		} );
				
		$routeProvider.when( '/order/create' , {
		controller : 'orderCreate',
		templateUrl : 'partials/order-create.html'
		} );
		
//======================= DEFAULT =======================
		
		$routeProvider.when( '/login' , {
		controller : 'login',
		templateUrl : 'partials/login.html'
		} );
		
	$routeProvider.otherwise( {
		redirectTo: '/home'
		} );
	
}] );

