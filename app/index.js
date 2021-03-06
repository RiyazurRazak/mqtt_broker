// package from connect with mqtt protocol
const mqtt = require("mqtt");

const os = require("os");
const dns = require("dns");

// find your machine ip address and run the server
dns.lookup(os.hostname(), async (err, address, family) => {
  // demo broker address
  const URI = `mqtt://${address}:9000`;

  // connect with mqtt broker
  const client = mqtt.connect(URI);

  // subcribe to topics when connection is successfully
  client.on("connect", () => {
    // subcribe to open-valve topic
    client.subscribe("open-valve");
    console.log(`Connection With Broker : mqtt://${address}:9000 Successfully`);
  });

  // log if the connection was not successfull
  client.on("error", () => {
    console.error("Error, Broker Not Connected");
    // close the connection
    client.end();
  });

  // mock sensor data send to subscibers with the topic : random-number every 5 seconds
  setInterval(() => {
    // generate a random number between 0 - 99
    const randomNumber = parseInt(Math.random() * 100).toString();

    // publish the mock data
    client.publish("random-number", randomNumber);
    console.log("Mesaage published to subscribers");
  }, 5000);

  // recieve messages for the subscibe topics.
  client.on("message", (topic, message) => {
    console.log(`Message from topic : ${topic} = ${message.toString()}`);
  });
});
