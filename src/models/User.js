const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    email: { type: String, required: true },
    fname: {type: String, required: true},
    userName: {type: String, required: true},
    hashedPassword: { type: String, required: true }
});

const User = model('User', userSchema);

module.exports = User;
