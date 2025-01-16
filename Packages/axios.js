const axios = require("axios");

axios
  .get("http://wwww.google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
