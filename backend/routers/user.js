'use strict';
/**
 * user.js
 *
 * Contains the routes details for 'User' access
 */
const express = require('express');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/user.js');

const router = new express.Router();

//FIXME: This is simply a test route
// TODO: Clean out this route definition when done with testing.
router.get('/listAllUsers', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send({error: 'Database Error'});
  }
});

// POST /login -> Login an existing user
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body);
    res.send({status: 'OK', user}); // Returns the logged in user
  } catch (e) {
    res.status(404).send({status: 'Error', error: e.message});
  }
});

// POST /register -> Register a new user
router.post('/users/register', async (req, res) => {
  const user = new User(req.body);

  // Try to add the user to the db
  try {
    await user.save();
    res.status(201).send({status: 'Ok', user});
  } catch (e) {
    res.status(500).send({status: 'Error', message: e});
  }
});

//GET /user/:id -> Displays a specific user's info
// router.get('/user/:id', (req, res) => {
//   res.send('User Page');
// });

module.exports = router;
