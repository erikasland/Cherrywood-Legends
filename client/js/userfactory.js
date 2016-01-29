myModule.factory('userFactory', function($http){
    var factory = {};
    factory.user1 = {};

    factory.index = function(callback){
        $http.get('/users').success(function(output){
            callback(output);
        })
    }

    factory.create = function(user1, user2){
        $http.post('/users', {user1: user1, user2: user2}).success(function(output){
            factory.user1 = output.player_one;
        })
    }

    factory.update = function(user){
        $http.post('/user', user).success(function(output){
            console.log(output);
        })
    }

    factory.show = function(user, callback){
        $http.get('/user/'+ user._id).success(function(output){
            callback(output);
        })
    }
    return factory;
})