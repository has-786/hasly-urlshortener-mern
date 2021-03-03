const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'access_token_secret');
        req.userData = decoded;
      //  console.log(decoded);
        next();
    } catch (error) {
        return res.status(401).json({
            status:401,
            msg: 'Auth failed'
        });
    }
};
