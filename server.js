const express = require('express');
const expressSession = require('express-session');
let passport = require('passport');
const app = new express();

app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', (req, res) => {
});

app.listen(3000, () => {
    console.log('App running at port 3000');
})