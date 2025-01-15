const EventEmitter = require("events");
const celebrety = new EventEmitter();

celebrety.on("race", (result) => {
  if (result === "lost") {
    console.log("hoya, finally");
  }
});
celebrety.on("race", (result) => {
  if (result === "win") {
    console.log("hoya, finally");
  }
});
process.on("exit", (code) => {
  console.log("hoya, finally", code);
});
celebrety.emit("race", "win");
celebrety.emit("race", "lost");
