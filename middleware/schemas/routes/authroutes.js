const express = require('express');
const router = express.Router();
const { signup, login } = require('../schemas/userschema');
const validate = require('../middleware/validate');

let users = [];

router.post('/signup', validate(signup), (req, res) => {
    if (users.find(u => u.email === req.body.email))
        return res.status(409).send('Email already exists');

    users.push(req.body);
    res.send('Signup successful');
});

router.post('/login', validate(login), (req, res) => {
    const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
    res.status(user ? 200 : 401).send(user ? 'Login successful' : 'Invalid login');
});

module.exports = router;