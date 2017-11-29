const socket = io();

function handleClickPlayer1(evt){
    e.preventDefault();
    socket.emit("player1CLick");
}

function handleClickPlayer2(evt){
    e.preventDefault();
    socket.emit("player2CLick");
}

function main(){
    let emoji1 = document.querySelector(".player1");
    let emoji2 = document.querySelector(".player2");

    //send initial positions
    socket.emit("player1InitialPosition",{x:emoji1.style.top, y:emoji1.style.top});
    socket.emit("player2InitialPosition",{x:emoji2.style.top, y:emoji2.style.left});

    //add event listeners to clicks
    document.querySelector(".player1Btn").addEventListener("click", handleClickPlayer1);
    document.querySelector(".player2Btn").addEventListener("click", handleClickPlayer2);


    //receive moves
    socket.on("player1NewPosition",(position)=>{
        emoji1.style.top = position.y+"px";
        emoji1.style.left = position.x + "px";
    });

    socket.on("player2NewPosition",(position)=>{
        emoji2.style.top = position.y + "px";
        emoji2.style.left = position.x + "px";
    });

    socket.on("win", (winner)=>{
        const winnerDiv = document.createElement("div");
        const content = document.createTextNode(winner + "has won!");
        winnerDiv.appendChild(content);
        document.body.appendChild(winnerDiv);
    });
}

document.addEventListener("DOMContentLoaded", main);
