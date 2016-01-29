myModule.factory('userFactory', function($http){
    var factory = {};
    factory.user1 = {};
    factory.user2 = {};
    factory.create = function(user1, user2){
        $http.post('/users', {user1: user1, user2: user2}).success(function(output){
            factory.user1 = output.player_one.name;
            factory.user2 = output.player_two.name;
        })
    }
    return factory;
})