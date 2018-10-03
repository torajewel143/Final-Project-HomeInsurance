const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const User = express.Router();

// User Registration
User.route('/register/').post(function (req, res, next) {
    var data = req.body;
    db.collection('users').find({user_id: req.body.user_id}).toArray((err, result) => {
        if(result.length){
            res.json({
                type: 'failed',
                message: 'User aready exists!!',
            })
        } else{
            db.collection('users').insertOne({user_id: data.user_id, password: data.password, role: 'user'}, (err, result) => {

                res.json({
                    type: 'success',
                    message: 'User saved successfully',
                    redirect: '',
                    token: jwt.sign({
                        user_id: data.user_id,
                        role: 'user',
                        // exp: 60*60*24, // Validity One Day
                        }, 'homeownerinformationdocisnotsoclear'),

                });

            });
        }
    });
});

// User Login
User.route('/login/').post(function (req, res) {
    var data = req.body;
    db.collection('users').find({user_id: req.body.user_id, password: req.body.password}).toArray((err, result) => {
        if(result.length){
            res.json({
                type: 'success',
                message: 'Logged in successfully.',
                token: jwt.sign({
                    user_id: data.user_id,
                    role: 'user',
                    // exp: 60*60*24, // Validity One Day
                    }, 'homeownerinformationdocisnotsoclear'),
                redirect: '/retrivequote/',
            });
        } else{
            res.json({
                type: 'failed',
                message: 'Invalid username or password.',
            });
        }
    });
});

User.route('/check-token/').post((req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, 'homeownerinformationdocisnotsoclear', (err, decode) => {
        if(err){
            res.json({
                type: 'failed',
                message: 'Invalid Token.'
            });
        } else{
            res.json({
                type: 'success',
                message: 'Valid Token.',
                decode: decode,
            });
        }
    });
});

User.route('/homeownerinformation/').get(function (req, res) {
    res.json({
        message : "No data submitted.",
    });
}).post(function (req, res) {
  res.json(req.body);
});

module.exports = User;
