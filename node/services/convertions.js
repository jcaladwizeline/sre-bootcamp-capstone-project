const { badRequest } = require("../helpers/errors");
const { maskMap } = require("../helpers/maskCheck");

exports.cidrToMaskService = async (value) => {
  const mask = [];
  const cidr = value;
  const validChars = /^[0-9]*$/;
  const valueValid = validChars.test(value);
  if (valueValid && value <= 32 && value >= 0) {
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
  const cidr = maskMap[value];
  if (cidr) return { function: "maskToCidr", input: mask, output: cidr };
  else throw badRequest("the param value must be exist or has bad format");
};
