const { Signup, test } = require('../controllers/authController');

const router = require('express').Router();

router.post('/signup',Signup)

module.exports = router