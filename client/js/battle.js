myModule.controller('battleController', function(userFactory){
    init();
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