const express = require('express');

const router = express.Router();
const { createUser } = require('../controllers/user.js');

router.post('/', createUser);

module.exports = router;
