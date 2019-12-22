const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

router.post('/register',forwardAuthenticated, (req,res)=>{
    const {email} = req.body;
    res.contentType('application/json');
    res.status(500);
    //check if user exists
    User.findOne({ email }).then((user) => {
        if(!user){
            new User({
                ...req.body
            }).save().then((user)=>{
                res.status(200)
                res.json({...user.toObject(), message: "User registered"});
            }).catch((err) => {
                console.log("/register ERROR",err)
                res.json({
                    message: "Something went wrong"
                })
            })
        }
        else{
            res.status(409);
            res.json({
                message: "User already exists"
            });
        }
    }).catch((err) => {
        console.log("/register ERROR",err)
        res.json({
            message: "Something went wrong"
        })
    })
})

router.post('/login', forwardAuthenticated, passport.authenticate('local'), (req, res) => {
        res.status(200);
        res.json({
            message: "Login successful"
        });
    }
)

router.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout();
    res.status(200);
    res.json({
        message: "Logout successful"
    });
})

module.exports = router;