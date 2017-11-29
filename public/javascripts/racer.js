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
    //add event listeners to clicks
    document.querySelector(".player1Btn").addEventListener("click", handleClickPlayer1);
    document.querySelector(".player2Btn").addEventListener("click", handleClickPlayer2);

    //receive moves
    socket.on("",{

    });
}

document.addEventListener("DOMContentLoaded", main);