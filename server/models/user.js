var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    win: { type: Number, default: 0 }
})
mongoose.model('User', UserSchema);