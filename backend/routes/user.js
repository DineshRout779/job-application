const express = require('express');
const isLoggedin = require('../middlewares/isLoggedin');
const { getUserById, getAllUsers } = require('../controllers/user');
const router = express.Router();

// get specific user
router.get('/:id', isLoggedin, getUserById);

// get all users
router.get('/', isLoggedin, getAllUsers);

module.exports = router;
