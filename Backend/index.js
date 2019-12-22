const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {secretKey, db} = require('./config/globalConfigConstants');
const usersRoute = require('./routes/users');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(db,{useNewUrlParser: true}).then(()=>{
    console.log("mongoDb Connected");
}, (err)=>{
    console.log("dbError",err);
})

app.use(session({
    secret: secretKey,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./config/passportConfig')(passport);


app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRoute);


app.listen(3000,()=>console.log("Listening at 3000"));