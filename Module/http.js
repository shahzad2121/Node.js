import {send} from "./request.js";
import {read} from "./response.js";
import {send} from "./request.js";
import {read} from "./response.js";

function readData(url, data) {
  send(url, data);
  return read();
}
const yourdata = readData("http://google.com", "hello");
console.log(yourdata);
