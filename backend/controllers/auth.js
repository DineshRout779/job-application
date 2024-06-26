const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      {
        _id: existingUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    return res.status(200).json({
      token,
      message: 'Login successful!',
    });
  } catch (error) {
    console.log('error in login: ', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists!',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role ? role : 'user',
    });

    await newUser.save();

    const token = jwt.sign(
      {
        _id: newUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    return res.status(201).json({
      token,
      message: 'Signup successful!',
    });
  } catch (error) {
    console.error('Error in signup: ', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

// forget password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      // send email with OTP to verify
    }
  } catch (error) {
    console.error('Error in forgot password: ', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

// reset password
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      // change password
    }
  } catch (error) {
    console.error('Error in reset password: ', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

const getLoggedinUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.password = undefined;
    return res.status(200).json({
      message: 'User fetched successfully',
      user,
    });
  } catch (error) {
    console.log('error while fetching user', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

module.exports = {
  login,
  signup,
  forgotPassword,
  resetPassword,
  getLoggedinUser,
};
