const api = require('../services/user');

const router = require('express').Router();


router.post('/register,', async(req, res) => {
    const { email, fname, userName, password, address1, address2, city, country, postalCode, phoneNumber,bonusCode } = req.body;

    try {
        const result = await api.register(
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
        );
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;
