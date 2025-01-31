function encrypted(data) {
  return "encypted Data";
}
function send(url, data) {
  const encryptedData = encrypted(data);
  console.log(`this is ${encryptedData} of ${url}`);
}
export {
  send,
};
export {
  send,
};