"use strict";
var express = require('express');
var expressSession = require('express-session');
var passport = require('passport');
var app = new express();
app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', function (req, res) {
    req.session.auth = true;
});
app.listen(3000, function () {
    console.log('App running at port 3000');
});
