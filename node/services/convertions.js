const bcrypt = require("bcrypt");
const { databaseError, forbidden } = require("../helpers/errors");

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
    return { input: cidr, output: mask.join(".") };
  } else return "mal";
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
      } else return "mal";
    }
    return { input: mask, output: cidr };
  }
  return "mal";
};
