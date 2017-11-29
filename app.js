const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

let player1Position = {'x': 0, 'y': 0};
let player2Position = {'x': 0, 'y': 0};

io.on("connect", socket=>{
    console.log("connected", socket.id);
    /*
    socket represents connected client
    from there we can use on and exit
    */

	io.emit("player1Position", player1Position);
	io.emit("player2Position", player2Position);


    socket.on("player1Click", (data)=>{
        console.log("player1 new position:", data);
		player1Position.x += 10
		if (player1Position.x >= 800) {
			io.emit("player1Won")
		}
        io.emit("player1Position", player1Position);
    });

	socket.on("player2Click", (data)=>{
		console.log("player2 new position:", data);
		player2Position.x += 10

		if (player2Position.x >= 800) {
			io.emit("player2Won")
		}
		io.emit("player2Position", player2Position);
	});
});

server.listen(3000);
