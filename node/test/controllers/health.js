const request = require("supertest");
const app = require("../../server");

describe("GET /_health", () => {
  it("respond 200", (done) => {
    request(app)
      .get("/_health")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
