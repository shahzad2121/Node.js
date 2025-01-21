const http = require("http");

const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "Habib",
  },
  {
    id: 1,
    name: "Murtaza",
  },
  {
    id: 2,
    name: "Atif",
  },
];

const server = http.createServer();
server.on("request", (req, res) => {
  //with .split we split the url into three strings ['', 'friend', '1'] whenever we found '/'.
  const items = req.url.split("/");
  // specifying the methd 
  if (req.method === "POST" && items[1] === "friends") {
    req.on('data', (data) => {
      const friend = data.toString()
      console.log('Request', friend);
      //use .parse to convert data back into JS object
      friends.push(JSON.parse(friend))
    })
    req.pipe(res)
  }
  // with items[1] we are checking the the second string in the url,
  // in this case it is 'friends' or 'messages'. because we split the url on the basis of '/'.
  else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    //we are checking if the 2rd string is being passed in url
    if (items.length === 3) {
      //if we are getting 2nd string in url then we will call the frined by index number
      //NUMBER OR + would convert a string into number
      const friendsIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendsIndex]));
    } else {
      // .stringify converts data into strings to send it to the server because server might be written in Ruby or python so they don't understand JS objects and arrays
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "message") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write(" HELLO WORLD");
    res.end();
  } else {
    res.statusCode = 400;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening at server ${PORT}`);
});
