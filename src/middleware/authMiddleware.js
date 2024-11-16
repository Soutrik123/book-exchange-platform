const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    console.log(process.env.JWT_SECRET);

    // Skip token verification and always pass the request
    req.user = {}; // Optionally, you can set req.user to an empty object or any default value
    next();
};


module.exports = { authenticate };
