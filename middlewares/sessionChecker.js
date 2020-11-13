var sessionAuthChecker = (req, res, next) => {
    console.log(req.session, "_+_}_+", req.cookies);
    if (req.session.user && req.cookies.user_sid) {
        req.user = req.session.user
        next();
    } else {
        res.redirect('/login')
    }
};

var sessionLoginChecker = (req, res, next) => {
    console.log(req.session);
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