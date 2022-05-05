/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["value"] }] */
const { badRequest } = require("../helpers/errors");
const { maskMap } = require("../helpers/maskCheck");

exports.cidrToMaskService = async (value) => {
  const mask = [];
  const cidr = value;
  let valueToCheck = value;
  const validChars = /^[0-9]*$/;
  const valueValid = validChars.test(valueToCheck);
  if (valueValid && valueToCheck <= 32 && valueToCheck >= 0) {
    for (let i = 0; i < 4; i += 1) {
      const n = Math.min(valueToCheck, 8);
      mask.push(256 - 2 ** (8 - n));
      valueToCheck -= n;
    }
    return { function: "cidrToMask", input: cidr, output: mask.join(".") };
  }
  throw badRequest("the param value must be exist or has bad format");
};

exports.maskToCidrService = async (value) => {
  const mask = value;
  const cidr = maskMap[value];
  if (cidr) return { function: "maskToCidr", input: mask, output: cidr };
  throw badRequest("the param value must be exist or has bad format");
};
