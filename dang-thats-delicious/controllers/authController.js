const passport = require('passport');

exports.login = passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Faild Login!',
        successRedirect: '/',
        successFlash: 'You have logged in!',
});
