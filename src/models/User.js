const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    email: { type: String, required: true },
    fname: {type: String, required: true},
    userName: {type: String, required: true},
    hashedPassword: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    postalCode: { type: Number, required: true },
    bonusCode: { type: Number, required: true }

});

const User = model('User', userSchema);

module.exports = User;
