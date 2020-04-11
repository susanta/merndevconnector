const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// User model
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// access   Public
router.get('/', auth, async (req, res) => {
  try {
    // Find user by id and return user without password
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
