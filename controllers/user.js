const User = require('../models/user.js');

const createUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.create({ email });
    console.log(user);
    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
