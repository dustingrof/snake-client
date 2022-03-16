const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("snakes in the grass");
  });
  conn.on('data', (messageFromServer) => {
    console.log('message from server:', messageFromServer);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = connect;