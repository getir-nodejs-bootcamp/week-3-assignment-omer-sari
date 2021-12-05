const jwt = require("jsonwebtoken");

const config = process.env

const checkToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send("A token is required");
    }
    try {
        token = token.replace('Bearer ',''); 
        jwt.verify(token, config.SECRET_KEY);
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };

module.exports = checkToken;