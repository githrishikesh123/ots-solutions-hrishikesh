const firstMiddleware = (req, res, next) => {
  console.log("Middlewware Validation For User");
  next();
};

module.exports = firstMiddleware;
