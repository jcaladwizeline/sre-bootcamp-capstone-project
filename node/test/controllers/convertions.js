const request = require("supertest");
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const app = require("../../server");
const models = require("../../models");

describe("GET /cidr-to-mask", () => {
  it("successfull case", (done) => {
    sinon
      .stub(jwt, "verify")
      .callsFake(() => Promise.resolve({ success: "Token is valid" }));
    sinon.stub(models.user, "findByPk");
    request(app)
      .get("/cidr-to-mask?value=16")
      .set(
        "Authorization",
        "Bearer s9JZ4hRDl5YSRMjp16siPJw3PsJiSMYUalmNdQ31VjE",
      )
      .expect(200, done);
  });
  it("bad request error cidr-to-mask", (done) => {
    request(app)
      .get("/cidr-to-mask")
      .set(
        "Authorization",
        "Bearer s9JZ4hRDl5YSRMjp16siPJw3PsJiSMYUalmNdQ31VjE",
      )
      .expect(400, done);
  });
  it("authentication error cidr-to-mask", (done) => {
    request(app).get("/cidr-to-mask?value=16").expect(401, done);
  });
});

describe("GET /mask-to-cidr", () => {
  it("successfull case", (done) => {
    request(app)
      .get("/mask-to-cidr?value=255.255.255.0")
      .set(
        "Authorization",
        "Bearer s9JZ4hRDl5YSRMjp16siPJw3PsJiSMYUalmNdQ31VjE",
      )
      .expect(200, done);
  });
  it("bad request error mask-to-cidr", (done) => {
    request(app)
      .get("/mask-to-cidr?value=255.255.0")
      .set(
        "Authorization",
        "Bearer s9JZ4hRDl5YSRMjp16siPJw3PsJiSMYUalmNdQ31VjE",
      )
      .expect(400, done);
  });
  it("authentication error cidr-to-mask", (done) => {
    request(app).get("/mask-to-cidr?value=255.255.255.0").expect(401, done);
  });
});
