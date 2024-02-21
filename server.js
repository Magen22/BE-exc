// server.js
const http = require("http");
const moment = require("moment");
const members = require("./members");
const usersData = require('./users');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const url = req.url;

  if (url === "/") {
    res.write("This is the home page");

  } else if (url === "/about") {
    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    const responseData = {
      Status: "success",
      Message: "response success",
      Description: "Exercise #03",
      Date: currentDate,
      Data: members,
    };
    res.write(JSON.stringify(responseData, null, 2));

  } else if (url === "/users") {
    const responseData = {
        Status: "success",
        Message: "response success",
        Description: "User Data",
        Data: usersData,
      };
      res.write(JSON.stringify(responseData, null, 2));
  } else {
    res.write("Invalid URL");
  }

  res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log(usersData);