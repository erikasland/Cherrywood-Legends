var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    create: function(req, res){
        var player_one = new User({name: req.body.user1})
        var player_two = new User({name: req.body.user2})
        player_one.save(function(err){
            if(err){
                console.log(err);
            }else{
                console.log(player_one)
            }
        })
        player_one.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.json({player_one: player_one, player_two: player_two})
            }
        })
    }
}