const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

let player1Position;
let player2Position;

io.on("connect", socket=>{
    console.log("connected", socket.id);
    /*
    socket represents connected client
    from there we can use on and exit
    */

	// These 2 event
	socket.on("player1InitialPosition", (data)=>{
        console.log("player1 initial position:", data);
        obj.id = socket.id;
        io.emit("other mouse", obj);
    });

	socket.on("player2InitialPosition", (data)=>{
        console.log("player2 initial position:", data);
        const obj = Object.assign(data);
        obj.id = socket.id;
        io.emit("other mouse", obj);
    });

    socket.on("player1NewPosition", (data)=>{
        console.log("player1 new position:", data);
        const obj = Object.assign(data);
        obj.id = socket.id;
        io.emit("other mouse", obj);
    });

	socket.on("player2NewPosition", (data)=>{
		console.log("player2 new position:", data);
		const obj = Object.assign(data);
		obj.id = socket.id;
		io.emit("other mouse", obj);
	});
});

server.listen(3000);
