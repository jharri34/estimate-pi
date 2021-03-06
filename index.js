var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname, '../frontend/app')));
console.log(path.join(__dirname, '../frontend/app/', 'index.html'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/app/', 'index.html'));
});

io.on('connection', function(socket) {
  console.log("connected");
  socket.on('disconnect', function() {
    console.log('disconnected');
  });

  socket.on('begin-approximation', function(msg) {

    var count = 0;
    var estimations = [];
    var expected_value = 0;
    var varience = 0;
    var stardard_deviation = 0;
    if (msg > 10000) {
      msg = 10000;
    }
    for (var i = 0; i < 1000; i++) {
      for (var j = 0; j < msg; j++) {
        var x = Math.random() * (1 - (-1)) + (-1);
        var y = Math.random() * (1 - (-1)) + (-1);
        if (Math.pow(x, 2) + Math.pow(y, 2) <= 1) count++;

      }
      estimations.push(4 * count / msg);
      count = 0;
    }
    io.emit('estimate', estimations);
    for (var i = 0; i < 1000; i++) {
      expected_value += estimations[i];
    }
    expected_value = expected_value / 1000;
    io.emit('expected_value', expected_value);
    for (var i = 0; i < 1000; i++) {
      varience += Math.pow(estimations[i] - expected_value, 2)
    }
    stardard_deviation = Math.sqrt(varience / 1000);
    io.emit('stardard_deviation', stardard_deviation);

  });
});
http.listen(3000, function() {
  console.log('listening on *:3000');
});
