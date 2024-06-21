const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    return res.status(200).json({
      messgae: 'Users fetched successfully!',
      users,
    });
  } catch (error) {
    console.log('error while fetching users: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.user._id);
    return res.status(200).json({
      messgae: 'Users fetched successfully!',
      users,
    });
  } catch (error) {
    console.log('error while fetching users: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

// update user

// delete user
