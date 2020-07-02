const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/studentdata');

// @route GET /register
// @Desc  Register new user
// @access  Public



router.get('/', (req, res) => {
    res.send({
        Something : 'Happened'
    })
    
});

module.exports = router;