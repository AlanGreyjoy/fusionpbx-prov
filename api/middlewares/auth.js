/**
 * Auth middleware to check if the token is valid
 * Send the api key over the header ['x-api-key']
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

module.exports = async (req, res, next) => {
  const token = req.headers["x-api-key"];

  console.log("Token: ", token);
  console.log(process.env.API_TOKEN);

  if (!token) return res.status(401).send("Unauthorized, missing token");

  if (token !== process.env.API_TOKEN)
    return res.status(401).send("Unauthorized, invalid token");

  next();
};
