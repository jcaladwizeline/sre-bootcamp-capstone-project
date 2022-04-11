const chai = require("chai");

const expect = chai.expect;

const {
  maskToCidrService,
  cidrToMaskService,
} = require("../../services/convertions");

describe("mask to cidr service", () => {
  it("successfull case", async () => {
    const maskToCidr = await maskToCidrService("255.255.0.0");
    expect(maskToCidr).to.eql({
      function: "maskToCidr",
      input: "255.255.0.0",
      output: 16,
    });
  });
  it("error mask to cidr service", async () => {
    try {
      await maskToCidrService("255.255.0.0");
    } catch (e) {
      expect(e.internalCode).to.eql("bad_request");
    }
  });
});

describe("cidr to mask service", () => {
  it("successfull case", async () => {
    const cidrToMask = await cidrToMaskService("16");
    expect(cidrToMask).to.eql({
      function: "cidrToMask",
      input: "16",
      output: "255.255.0.0",
    });
  });
  it("error cidr to mask service", async () => {
    try {
      await cidrToMaskService("33");
    } catch (e) {
      expect(e.internalCode).to.eql("bad_request");
    }
  });
});
