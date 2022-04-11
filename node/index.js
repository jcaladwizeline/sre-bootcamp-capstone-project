const Config = require("config");
const app = require("./server");

const config = Config;

app.listen(config.port, function () {
  console.log("listening at", config.port);
});
