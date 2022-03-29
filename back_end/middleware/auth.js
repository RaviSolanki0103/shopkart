module.exports = async (req, res, next) => {
  console.log("middleware called...");
  next();
};
