const jwt = require("jsonwebtoken");

const secreateKey = "eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NjU4ODQ3MCwiaWF0IjoxNjk2NTg4NDcwfQ.vxDDdFQC1ZzdEZype9kAEqb62kr0nM6WqvnvKxpouA_i7fp59VAb3puzpLDZHB-vjSiGe47Ybrc62qnEABaGYQ"


const generateToken = (id) => {
  return jwt.sign({ id }, secreateKey, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
