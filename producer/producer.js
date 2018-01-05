/**
 * Created by abhimanyus on 1/3/18.
 */
var kafka = require('kafka-node');


const client = new kafka.Client("localhost:2181", "producer-id", {
    sessionTimeout: 300,
    spinDelay: 100,
    retries: 2
});


const producer = new kafka.HighLevelProducer(client);
producer.on("ready", function () {
    console.log("Kafka Producer is connected and ready.");
});

producer.on("error", function (error) {
    console.error(error);
});

module.exports.generateMessage = function generateMessage(topic, message, callback) {

    payloads = [
        {topic: topic, messages: message}
    ];

    producer.send(payloads, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(data);
        }
    });
}


