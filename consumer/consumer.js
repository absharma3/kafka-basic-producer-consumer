/**
 * Created by abhimanyus on 1/5/18.
 */
var kafka = require('kafka-node');

const client = new kafka.Client("localhost:2181");


const options = {
    groupId: 'kafka-client-group',//consumer group id, default `kafka-node-group`
    autoCommit: false
}

const payloads = [
    { topic: 'topic', partition: 0 }, { topic: 'test', partition: 0 }
]
const consumer = new kafka.Consumer(client, payloads, options);


consumer.on('message', function (message) {
    console.log(message.value);
    consumer.commit();
});

consumer.on("error", function (error) {
    console.error(error);
});


process.on("SIGINT", function() {
    consumer.close(true, function() {
        process.exit();
    });
});