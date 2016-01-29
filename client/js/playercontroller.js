myModule.controller('playerController', function($location, userFactory){
    var _this = this;  
        var handler = function(e){
            if(e.keyCode === 13) {
                if(_this.new_user.user1){
                    userFactory.create(_this.new_user.user1);
                }
                $location.path('/game')
            }      
        };
        this.docu = angular.element(document);
        this.docu.on('keydown', handler);
})