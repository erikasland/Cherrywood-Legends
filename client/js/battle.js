myModule.controller('battleController', function(userFactory, $scope){


	$scope.get = function(){

		console.log("hi")
		console.log(game_over)
	}

  var win = init();
  console.log(game_over);

})