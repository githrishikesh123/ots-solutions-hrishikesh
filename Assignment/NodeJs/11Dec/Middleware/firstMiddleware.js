const firstMiddleware = (req, res, next) => {
  console.log("Middlewware Validation:");
  next();
};

module.exports = firstMiddleware;
