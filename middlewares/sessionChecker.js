var sessionAuthChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        req.user = req.session.user
        next();
    } else {
        res.redirect('/login')
    }
};

var sessionLoginChecker = (req, res, next) => {
    if (req.session && req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = {
    sessionAuthChecker,
    sessionLoginChecker
};