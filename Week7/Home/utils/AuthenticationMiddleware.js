const jwt = require('jsonwebtoken');// Middleware function to validate JWT tokens

function validateToken(req, res, next) {
    var token = req.headers.authorization;
    token = token.split(' ')[1] 
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    } jwt.verify(token, '652ec29f3beb5a545122b2ed2321@##*&^^', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        } 
        // If the token is valid, save the decoded information for later use
        req.user = decoded;
        console.log(req.user);
        next();
    });
}
module.exports = validateToken;
