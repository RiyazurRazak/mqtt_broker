//aedes mqtt broker package
const aedes = require("aedes")();

const os = require("os");
const dns = require("dns");

// find your machine ip address and run the server
dns.lookup(os.hostname(), async (err, address, family) => {
  let HOST = address;

  // create a server
  const server = require("net").createServer(aedes.handle);

  // port
  const PORT = 9000;

  //listen the server
  server.listen(PORT, () => {
    console.log(`MQTT Broker Listening on : mqtt://${HOST}:${PORT}`);
  });
});
