const bcrypt = require('bcrypt');
const User = require('../models/User');



const JWT_SECRET = 't gcsergcserg  b920n3w4pc[w3tcawert6v9';

async function register(
  email,
  fname,
  userName,
  password,
  address1,
  address2,
  city,
  country,
  postalCode,
  phoneNumber,
  bonusCode
) {
  // check if email is taken
  const existing = await User.findOne({email: new RegExp(`^${email}$`, "i")});

  if (existing) {
    throw new Error(
      "Duplicate Username, Another user has already selected this username."
    );
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // store user
  const user = new User({
    email,
    fname,
    userName,
    hashedPassword,
    address1,
    address2,
    city,
    country,
    phoneNumber,
    postalCode,
    bonusCode,
  });

  await user.save();

  return user;
}

async function getAllUsers() {
    const users = await User.find()
    return users;
}


module.exports = {
    register,
    getAllUsers
};