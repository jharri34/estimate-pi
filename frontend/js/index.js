        var socket = io();
        $('form').submit(function () {
            socket.emit('begin-approximation',  $('#m').val());
            return false;
        });

        socket.on('estimate',function (msg) {
            console.log(msg);
        });
        socket.on('expected_value',function(msg){
            console.log(msg);
        });
        socket.on('stardard_deviation',function(msg){
            console.log(msg);
        });