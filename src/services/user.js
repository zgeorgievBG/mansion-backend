const bcrypt = require('bcrypt');
const User = require('../models/User');



const JWT_SECRET = 't gcsergcserg  b920n3w4pc[w3tcawert6v9';

async function register(email, fname, userName,password) {
    // check if email is taken
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (existing) {
        throw new Error('Email is taken');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store user
    const user = new User({
        email,
        fname,
        userName,
        hashedPassword
    });

    await user.save();

    return user;
}


module.exports = {
    register
};