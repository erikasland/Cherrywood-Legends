myModule.controller('battleController', function(userFactory, $scope){
    init();
    $scope.get = function(){

        console.log("hi")
        console.log(game_over)
    }

    var win = init();
    console.log(game_over);
    var _this = this;
    this.current_user = userFactory.user1

    this.users = userFactory.index(function(user){
        _this.users = user;
    });

    this.updateAndShow = function(user){
        userFactory.update(user);
        userFactory.show(user);
    }
})