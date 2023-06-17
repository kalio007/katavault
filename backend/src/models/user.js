'use strict';
/**
 * user.js
 * 
 * Contains the definition for a new 'User' data model
 */
const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  regNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // Checks if it consists of numerals alone
    // TODO: Look for a way to use regular expressions to make the
    // validation more precise and accurate.
    validate(value) {
      if (!validator.isNumeric(value, { no_symbols: true })) {
        throw new Error('Registration number consists of numerals only');
      }
    }
  },
  phoneNumber: {
    type: String,
    trim: true,
    validate(value) {
      // Checks if it's a nigerian phone number
      if (!validator.isMobilePhone(value, 'en-NG')) {
        throw new Error('Not a valid phone number');
      }
    }
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Not a valid email');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8
  }
});

module.exports = User;