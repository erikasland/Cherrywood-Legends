var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    index: function(req, res){
        User.find({}, function(err, users){
            if(err){
                console.log(err);
            }else{
                res.json(users);
            }
        })
    },
    create: function(req, res){
        var player_one = new User({name: req.body.user1})
        player_one.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.json({player_one: player_one})
            }
        })
    },
    update: function(req, res){
        User.find({_id: req.body._id}, function(err, user){
            var win = user[0].win
            User.update({_id: req.body._id}, {$set: {win: win + 1}}, function(err){
                if(err){
                    console.log(err);
                }else{
                    res.end();
                }
            })
        })
    },
    show: function(req, res){
        User.find({_id: req.params.id}, function(err, user){
            if(err){
                console.log(err);
            }else{
                res.json(user);
            }
        })
    }
}