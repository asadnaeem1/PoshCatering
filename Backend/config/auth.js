module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401)
    res.json({
      message: "Login to access the resource"
    })
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.status(200);
    res.json({
        message: "Already Logged In"
    });
  }
};
