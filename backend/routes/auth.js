const express = require('express');
const validateData = require('../middlewares/validateData');
const { userLoginSchema, userSignupSchema } = require('../schemas/userSchemas');
const {
  login,
  signup,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');
const router = express.Router();

router.post('/login', validateData(userLoginSchema), login);
router.post('/signup', validateData(userSignupSchema), signup);
router.post('/forget-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
