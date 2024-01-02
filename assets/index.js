var randomNo1 = Math.floor(Math.random() * 6 ) + 1;
var randomNo2 = Math.floor(Math.random() * 6 ) + 1;

// Image path
var randomImage1 = "assets/image/" + "dice" + randomNo1 + ".png";
var randomImage2 = "assets/image/" + "dice" + randomNo2 + ".png";

// Set attribute of first image 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

// Set attribute of second image 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

function game(){

    if (randomNo1 > randomNo2){
        document.querySelector("h1").innerHTML = "<em>🚩Player 1 Wins!</em>";
    }
    else if (randomNo1 < randomNo2){
        document.querySelector("h1").innerHTML = "<em>Player 2 Wins!🚩</em>";
    }
    else {
        document.querySelector("h1").innerHTML = "<em>Game Draw!</em>";
    }

}

// Evoking the function
game();

