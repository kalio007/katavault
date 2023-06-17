'use strict';
/**
 * user.js
 * 
 * Contains the routes details for 'User' access
 */
const express = require('express');
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
  
});

//GET /user/:id -> Displays a specific user's info
router.get('/user/:id', (req, res) => {
  res.send('User Page');
});


module.exports = router;