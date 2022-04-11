const { badRequest, forbidden } = require("../helpers/errors");

exports.cidrToMaskService = async (value) => {
  const mask = [];
  const cidr = value;
  const validChars = /^[0-9]*$/;
  const value_valid = validChars.test(value);
  if (value_valid && value <= 32 && value >= 0) {
    for (let i = 0; i < 4; i++) {
      const n = Math.min(value, 8);
      mask.push(256 - Math.pow(2, 8 - n));
      value -= n;
    }
    return { function: "cidrToMask", input: cidr, output: mask.join(".") };
  } else throw badRequest("the param value must be exist or has bad format");
};

exports.maskToCidrService = async (value) => {
  const mask = value;
  const validChars = /^[0-9]*$/;
  const maskNodes = mask.split(".");
  if (maskNodes.length === 4) {
    let cidr = 0;
    for (let i in maskNodes) {
      const value_valid = validChars.test(maskNodes[i]);
      if (value_valid && maskNodes[i] >= 0 && maskNodes[i] <= 255) {
        cidr += ((maskNodes[i] >>> 0).toString(2).match(/1/g) || []).length;
      } else
        throw badRequest("the param value must be exist or has bad format");
    }
    return { function: "maskToCidr", input: mask, output: cidr };
  }
  throw badRequest("the param value must be exist or has bad format");
};
