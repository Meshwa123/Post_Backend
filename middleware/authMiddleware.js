const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
    // const token = req.headers.authorization.split(' ')[1];
    // try {
    //     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    //     req.userData = { userId: decodedToken.userId };
    //     next();
    // } catch (err) {
    //     return res.status(401).json({ message: 'Auth failed' });
    // }
};

module.exports = { authMiddleware };
