var express = require('express');
var router = express.Router();

var producer = require('../producer/producer');

/* GET home page. */

function callback(res){
   return function actualCallback(result){
        res.send(result);
    }
}


router.post('/produce/message', function(req, res, next) {
    producer.generateMessage(req.body.topic, req.body.message, callback(res));
});

module.exports = router;
