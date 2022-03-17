let connection;

const handleUserInput = function(data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") connection.write("Move: up");
  if (data === "a") connection.write("Move: left");
  if (data === "s") connection.write("Move: down");
  if (data === "d") connection.write("Move: right");
  if (data === "c") connection.write("Say: catch me if you can");
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = { setupInput };