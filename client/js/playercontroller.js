myModule.controller('playerController', function($location, userFactory){
    var _this = this;  
        var handler = function(e){
            if(e.keyCode === 13) {
                if(_this.new_user.user1 && _this.new_user.user2){
                    userFactory.create(_this.new_user.user1, _this.new_user.user2);
                }
                $location.path('/game')
            }      
        };
        this.docu = angular.element(document);
        this.docu.on('keydown', handler);
})