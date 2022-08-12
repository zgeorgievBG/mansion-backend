const mongoose = require('mongoose');
const express = require('express');

const cors = require('./src/middlewares/cors');
const usersController = require('./src/controllers/users');
const port = 3030;


async function start() {
    try {
        const db = await mongoose.connect(
          "mongodb+srv://mansion:q4Ontgj26HcJPPX5@app.hihw3.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    app.use('/users', usersController);

    app.listen(process.env.PORT || port, () => console.log('REST Service started on port 3030'));
}


start();