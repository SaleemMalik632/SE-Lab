function requireRoles(roles) {
    return (req, res, next) => {
        const userRole = req.user.Role; // Assuming you saved the user's role in req.user
        if (roles.includes(userRole)) {
            // User has one of the required roles, so allow access
            next();
        } else {
            // User does not have any of the required roles, so send a forbidden response
            res.status(403).json({ message: 'Permission denied' });
        }
    };
} 

module.exports = requireRoles;
