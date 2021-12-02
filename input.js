let connection;

const { builtinModules } = require("module");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = function (data) {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') process.exit();
  if (data === 'w' ) connection.write("Move: up");
  if (data === 'a' ) connection.write("Move: left");
  if (data === 's' ) connection.write("Move: down");
  if (data === 'd' ) connection.write("Move: right");
};

module.exports = { setupInput };