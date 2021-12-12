# mqtt broker & mock app

## broker

- MQTT private broker running on port 9000
- to spin-up : `yarn run start` | `node index.js`

## app

- node js mqtt application (publisher && subscriber)
- Publish mock message every 5 seconds for random numbers from 0..99 in the topic : `random-number`
- subscribed to the topic `open-valve`
- to run : `yarn run start` | `node index.js`
