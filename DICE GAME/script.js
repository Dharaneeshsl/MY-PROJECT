function dicegame() {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    if (random1 === 1) {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice1.png");
    }
    else if (random1 === 2) {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice2.png");
    }
    else if (random1 === 3) {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice3.png");
    }
    else if (random1 === 4) {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice4.png");
    }
    else if (random1 === 5) {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice5.png");
    }
    else {
        document.querySelector(".dice1").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice6.png");

    }
    if (random2 === 1) {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice1.png");
    }
    else if (random2 === 2) {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice2.png");
    }
    else if (random2 === 3) {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice3.png");
    }
    else if (random2 === 4) {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice4.png");
    }
    else if (random2 === 5) {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice5.png");
    }
    else {
        document.querySelector(".dice2").setAttribute("src", "../../Desktop/Dicee+Challenge+-+Starting+Files/images/dice6.png");

    }
    if (random1 === random2) {
        document.querySelector("h1").textContent = "Match Drawn 😊 ";
    }
    else if (random1 > random2) {
        document.querySelector("h1").textContent = "Player 1 Wins 🥳 ";
    }
    else {
        document.querySelector("h1").textContent = "Player 2 Wins 🥳 ";
    }


}