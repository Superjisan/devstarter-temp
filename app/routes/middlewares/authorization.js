'use strict';

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

exports.isAdmin = function(req, res, next) {
	// console.log("admin check: ", req.user.roles);
	if (req.isAuthenticated() && req.user && req.user.roles.indexOf("admin") !== -1) {
		next();
	} else {
		return res.send(401, 'Requires Admin');
	}
}