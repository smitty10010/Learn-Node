const passport = require('passport');

exports.login = passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Faild Login!',
        successRedirect: '/',
        successFlash: 'You have logged in!',
});

exports.logout = (req, res) => {
        req.logout();
        req.flash('Success', 'You have logged out!');
        res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
        if (req.isAuthenticated()) {
                next();
                return;
        }
        req.flash('error', 'Oops you must be logged in!');
        res.redirect('/login');
};
