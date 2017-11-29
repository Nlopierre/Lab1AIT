const socket = io();

function handleClickPlayer1(e){
    e.preventDefault();
    socket.emit("player1CLick");
}

function handleClickPlayer2(e){
    e.preventDefault();
    socket.emit("player2CLick");
}

function main(){
    //create finish line
    div.document.createElement("div");

    //add event listeners to clicks
    document.querySelector(".player1Btn").addEventListener("clicked", handleClickPlayer1);
    document.querySelector(".player2Btn").addEventListener("clicked", handleClickPlayer2);
}

document.addEventListener("DOMContentLoaded", main);