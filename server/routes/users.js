'use strict';

const express = require('express');
const mongoose = require('mongoose');

const route = express.Router();

const { User, validate } = require ('../models/user');


// Add a new user to the database
router.post('/', async (req, res) => {

    // Validate new user request body against userSchema
    const { error } = validate(req.body);

    // Request does not match userSchema
    if (error) return res.status(400)
        .json({message: error.details[0].message});


    let user;


     // Verify user does not already exist by checking email
    user = await User.findOne({ email: req.body.email })
        .then((data) => {

            if (user) {
                return res.status(400)
                    .json({message: 'User is already registered.'})
            }
        })
        .catch((err) => {
            return res.status(500)
                .json({message: 'Internal server error.'});
        });


    // Create a new user from the request body
    user = new User({
        user: req.body.userName,
        email: req.body.email,
        tribe: req.body.tribe
    });

    saveUser(user);
});


function saveUser(user) {
    user.save()
        .then((data) => {
            return res.status(201)
                .json({message: 'Succesfully created user.', createdUser: user});
        })
        .catch((err) => {
            return res.status(500)
                .json({message: 'Unable to create user.'})
        });
}
