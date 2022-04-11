const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const util = require("util");
const crypto = require("crypto");

const hostdb = "bootcamp-tht.sre.wize.mx";
const userdb = "secret";
const passworddb = "noPow3r";
const database = "bootcamp_tht";
const secret = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

export const loginFunction = async (username, input_password) => {
  const db = mysql.createConnection({
    host: hostdb,
    user: userdb,
    password: passworddb,
    database: database,
  });
  db.query = util.promisify(db.query);
  try {
    const results = await db.query(
      "SELECT username, salt, role,password FROM users WHERE username = ?",
      [username]
    );
    const userobj = results[0];
    const hashedPassword = crypto
      .createHash("sha512")
      .update(input_password + userobj.salt)
      .digest("hex");
    if (!hashedPassword.localeCompare(userobj.password)) {
      const tokenJWT = jwt.sign(
        {
          role: userobj.role,
        },
        secret,
        {
          noTimestamp: true,
        }
      );
      return tokenJWT;
    }
    return null;
  } catch (err) {
    console.error(err);
  }
};

export const protectFunction = (authorization) => {
  try {
    const user = jwt.verify(authorization, secret);
    if (user) {
      return "You are under protected data";
    }
    return null;
  } catch (err) {
    console.error("Invalid JWT Token!");
    return null;
  }
};

export const cidrToMask = (value) => {
  //console.log(value);
  return value;
};

export const maskToCidr = (value) => {
  //console.log(value);
  return value;
};

export const ipv4ValidationFunction = (value) => {
  //console.log(value);
  return true;
};
