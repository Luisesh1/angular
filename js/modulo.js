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



}).controller("c2",function($scope){
	$scope.edad=200;
	$scope.edad2=200;

})
;