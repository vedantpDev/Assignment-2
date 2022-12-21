const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let authToken = req.header("auth-token");
  if (!authToken)
    return res.status(400).send({
      message: "Token is not Available",
      status: "Fail",
    });

  try {
    let decoded = jwt.verify(authToken, "jwtPrivateKey");
    req.user = decoded;
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Token Expired",
    });
  }
  next();
};
