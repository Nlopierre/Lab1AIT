const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

io.on("connect", socket=>{
    console.log("connected", socket.id);
    /*
    socket represents connected client
    from there we can use on and exit
    */

    socket.on("mouse moved", (data)=>{
        console.log(data);
        const obj = Object.assign(data);
        obj.id = socket.id;
        socket.broadcast.emit("other mouse", obj);
    });
});

server.listen(3000);
