angular.module("modulo1",[])
.controller("c1",function($scope){
	$scope.edad=10;
	$scope.edad2=20;

	$scope.arreglo=[{nombre:"juan",edad:11},
	{nombre:"pedro",edad:131},
	{nombre:"jsesaea",edad:13}];
	$scope.invertir = function(){
		$scope.arreglo.reverse();
	}
	$scope.agregar = function(){
		$scope.arreglo.push($scope.nuevo);
		$scope.nuevo={};
	}



}).controller("c2",function($scope,$http){
	$scope.edad=200;
	$scope.edad2=200;
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		$scope.arreglo=data;
	})
	.error(function(data){
		console.log(data);
	});
	$scope.agregar = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",$scope.nuevo)
		.success(function(data){
			$scope.arreglo.push(data);
		})
		.error(function(data){
			console.log(data);
		});
		$scope.nuevo={};
	}
})
;