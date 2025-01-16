// const http = require("http");

//we can destructure this to get the desired method
// const {request} = require("https");

//with get we don't need to make a const under and also no need to use .end method at the end
const {get} = require("https");


get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("data", () => {
    console.log("n more data");
  });
});


