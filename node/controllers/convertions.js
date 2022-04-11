const {
  cidrToMaskService,
  maskToCidrService,
} = require("../services/convertions");

exports.cidrToMask = async (req, res, next) => {
  const { value } = req.query;

  return cidrToMaskService(value)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
};

exports.maskToCidr = async (req, res, next) => {
  const { value } = req.query;

  return maskToCidrService(value)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
};
