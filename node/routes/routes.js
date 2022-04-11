const { healthCheck } = require("../controllers/healthCheck");
const { login, signup } = require("../controllers/users");
const { cidrToMask, maskToCidr } = require("../controllers/convertions");
const { auth } = require("../middlewares/auth");

exports.init = (app) => {
  app.get("/", healthCheck);
  app.post("/login", login);
  app.post("/signup", signup);
  app.get("/_health", healthCheck);
  app.get("/cidr-to-mask", auth, cidrToMask);
  app.get("/mask-to-cidr", auth, maskToCidr);
};
