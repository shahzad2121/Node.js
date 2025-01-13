const EventEmitter = require("events");
const celebrety = new EventEmitter();

celebrety.on("wins a race", () => {
  console.log("hoya, finally");
});

celebrety.emit('wins a race')