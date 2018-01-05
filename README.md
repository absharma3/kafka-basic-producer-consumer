This is a node based Kafka producer/consumer. 
Please read the follwing to have a better understanding how to make the project work.
 
 * Kafka has a pretty good introduction, please read through
 https://kafka.apache.org/intro to get the idea.
 * Once can easily download the executables from 
 https://kafka.apache.org/downloads
 * The follwing commands are the used to start Kafka(this is only related to single broker):
 Go to the root directory of your downloaded kafka folder
 start zookeeper: bin/zookeeper-server-start.sh config/zookeeper.properties
 start kafka: bin/kafka-server-start.sh config/server.properties
 create topic: bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic <topic name>
 * Now go to the root folder of this code base and execute npm install
 * To start use npm start or the IDE's standard debugger
 * Invoke POST localhost:3000/api/produce/message
 {
 	"topic" : "topic",
 	"message" : "some message"
 }
 to produce the message. This will hit the generateMessage of producer.js
 * The consumer will automatically read the message from topic/test topics and print it on console. 
 

 TODO: Make topics for consumer configurable and update README with details of Kafka terminology
 