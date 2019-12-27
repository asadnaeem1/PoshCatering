const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {secretKey, db} = require('./config/globalConfigConstants');
const usersRoute = require('./routes/users');
const partnersRoute = require('./routes/partners');
const uploadRoute = require('./routes/upload');
const dataRoute = require('./routes/data');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
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
app.use('/partners', partnersRoute);
app.use('/files', uploadRoute);
app.use('/data', dataRoute);
app.use('/static/img', express.static('uploads'));

app.listen(4000,()=>console.log("Listening at 4000"));