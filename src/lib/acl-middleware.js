/* eslint-disable strict */
'use strict';

// const users = require('./users.js');


module.exports = (capability) => {

  return (req, res, next) => {
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  };

};