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

router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.get('/home', (req, res) => {
  res.redirect('/');
});

// GET /login -> Displays user login page
router.get('/login', (req, res) => {
  res.render('login', {title: 'Login'});
});

// POST /login -> Login a new user
router.post('/login', async (req, res) => {

});

// GET /register -> Displays user signUp page
router.get('/register', (req, res) => {
  res.render('register', {title: 'Register'});
});

// POST /register -> Register a new user
router.post('/register', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const regNumber = req.body.regNumber;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (password !== confirmPassword) {
    return res.status(400).send({status: "Error", reason: "Invalid Password"});
  }
  // TODO: Generate salt and hash the password
  // TODO: Create the user and insert into the database
});

//GET /user/:id -> Displays a specific user's info
router.get('/user/:id', (req, res) => {
  res.send('User Page');
});


module.exports = router;