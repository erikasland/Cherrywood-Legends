var users = require('./../controllers/users.js')
module.exports = function(app){
    app.post('/users', function(req, res){
        users.create(req, res);
    })

    app.get('/users', function(req, res){
            users.index(req, res);
    })

    app.post('/user', function(req, res){
        users.update(req, res);
    })

    app.get('/user/:id', function(req, res){
        users.show(req, res);
    })
}