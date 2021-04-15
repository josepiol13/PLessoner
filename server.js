const express = require('express');
const socket = require('socket.io');
const connL = [];

var app = express();
var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
}

var io = require('socket.io')(server);
app.use(express.static('public'));

io.sockets.on('connection',

  function (socket) {
    console.log("We have a new client: " + socket.id)
    socket.emit('id', socket.id);

    socket.on('update', (txt) => {
        io.sockets.emit('txtB', txt);
        console.log('alteration')
    })

    socket.on('updatem', (pos) => {
        console.log(pos)
        
       io.sockets.emit('mdrw', pos)

    })

  }
)