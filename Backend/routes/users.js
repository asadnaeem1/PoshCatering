const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

router.post('/signup',forwardAuthenticated, (req,res)=>{
    const {email} = req.body;
    res.contentType('application/json');
    res.status(500);
    //check if user exists
    User.findOne({ email , accountType: 'user'}).then((user) => {
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
const addParamAccountType = function(req,res,next){
    req.accountType = 'user';
    next();
}

router.post('/signin', forwardAuthenticated, addParamAccountType, passport.authenticate('local'), (req, res) => {
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

router.get('/authenticationstatus', (req,res)=>{
    res.status(200);
    if(req.isAuthenticated()){
        res.json({status: "authenticated"});
    }
    else{
        res.json({status: "notauthenticated"});
    }
})

module.exports = router;