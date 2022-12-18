const jwt = require("jsonwebtoken");
const config = process.env;

const parseJwt = require("../utils/decode");


const middleware = {
  authenticate: (req, res, next) => {
    try {
      const authorization = req.body.token || req.headers["authorization"];
      const token = authorization?.split(" ")[1];
      if (!token) {
        return res.status(403).send("A token is required for authentication");
      }
      const decoded = jwt.verify(token, config.SECRET_KEY);
      req.user = decoded;
    } catch (err) {
      console.log(err);
      return res.status(401).send("Invalid Token");
    }
    return next();
  },
};

module.exports = middleware;
