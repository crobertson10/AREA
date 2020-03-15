const dotenv = require("dotenv");

dotenv.config();

module.exports = function(req, res, next) {
  admin = req.body.admin;
  if (!admin) {
    return res.status(401).send("Access denied")
  }
  else if (admin === process.env.ADMIN) {
    next();
  }
  else {
    res.status(400).send("Invalid token");
  }
};

