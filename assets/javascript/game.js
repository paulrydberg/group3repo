// Initialize Firebase
var config = {
    apiKey: "AIzaSyAPau9vvY-PAiAHbwHqt0x3rqusKcGgw08",
    authDomain: "classroom-test-68049.firebaseapp.com",
    databaseURL: "https://classroom-test-68049.firebaseio.com",
    projectId: "classroom-test-68049",
    storageBucket: "classroom-test-68049.appspot.com",
    messagingSenderId: "874038179323"
};
firebase.initializeApp(config);



$(document).ready(function () {
    $("#actualGame").hide();
    $("#gamestart").on("click", function () {
        $("#beginbox").hide();
        $("#actualGame").show();
    });

    // var p1battlefield = $("<div>");
    // var p2battlefield = $("<div>");

    var p1card1SRC, p1card2SRC, p1card3SRC, p1card4SRC, p1card5SRC, p2card1SRC,
        p2card2SRC, p2card3SRC, p2card4SRC, p2card5SRC;

    p1card1SRC = "./assets/images/drEvil.png";
    p1card2SRC = "./assets/images/dewscriptor.png";
    p1card3SRC = "./assets/images/crocDundee.png";
    p1card4SRC = "./assets/images/capHook.png";
    p1card5SRC = "./assets/images/bruceWayne.png";

    p2card1SRC = "./assets/images/dewscriptor.png";
    p2card2SRC = "./assets/images/face.png";
    p2card3SRC = "./assets/images/heisenberg.png";
    p2card4SRC = "./assets/images/jessePinkman.png";
    p2card5SRC = "./assets/images/joker.png";

    var p1c1cardIMG = $("<img>");
    p1c1cardIMG.addClass("cards");
    p1c1cardIMG.addClass("pointerHover");
    p1c1cardIMG.addClass("player1cards");
    p1c1cardIMG.attr("src", p1card1SRC);
    p1c1cardIMG.attr("data-description", "blank");
    p1c1cardIMG.attr("data-face", "blank");
    p1c1cardIMG.attr("data-state", "face");
    p1c1cardIMG.attr("alt", "Player 1 | Card 1");

    var p1c2cardIMG = $("<img>");
    p1c2cardIMG.addClass("cards");
    p1c2cardIMG.addClass("pointerHover");
    p1c2cardIMG.addClass("player1cards");
    p1c2cardIMG.attr("src", p1card2SRC);
    p1c2cardIMG.attr("data-description", "blank");
    p1c2cardIMG.attr("data-face", "blank");
    p1c2cardIMG.attr("data-state", "face");
    p1c2cardIMG.attr("alt", "Player 1 | Card 2");

    var p1c3cardIMG = $("<img>");
    p1c3cardIMG.addClass("cards");
    p1c3cardIMG.addClass("pointerHover");
    p1c3cardIMG.addClass("player1cards");
    p1c3cardIMG.attr("src", p1card3SRC);
    p1c3cardIMG.attr("data-description", "blank");
    p1c3cardIMG.attr("data-face", "blank");
    p1c3cardIMG.attr("data-state", "face");
    p1c3cardIMG.attr("alt", "Player 1 | Card 3");

    var p1c4cardIMG = $("<img>");
    p1c4cardIMG.addClass("cards");
    p1c4cardIMG.addClass("pointerHover");
    p1c4cardIMG.addClass("player1cards");
    p1c4cardIMG.attr("src", p1card4SRC);
    p1c4cardIMG.attr("data-description", "blank");
    p1c4cardIMG.attr("data-face", "blank");
    p1c4cardIMG.attr("data-state", "face");
    p1c4cardIMG.attr("alt", "Player 1 | Card 4");

    var p1c5cardIMG = $("<img>");
    p1c5cardIMG.addClass("cards");
    p1c5cardIMG.addClass("pointerHover");
    p1c5cardIMG.addClass("player1cards");
    p1c5cardIMG.attr("src", p1card5SRC);
    p1c5cardIMG.attr("data-description", "blank");
    p1c5cardIMG.attr("data-face", "blank");
    p1c5cardIMG.attr("data-state", "face");
    p1c5cardIMG.attr("alt", "Player 1 | Card 5");


    var p2c1cardIMG = $("<img>");
    p2c1cardIMG.addClass("cards");
    p2c1cardIMG.addClass("pointerHover");
    p2c1cardIMG.addClass("player2cards");
    p2c1cardIMG.attr("src", p2card1SRC);
    p2c1cardIMG.attr("data-description", "blank");
    p2c1cardIMG.attr("data-face", "blank");
    p2c1cardIMG.attr("data-state", "face");
    p2c1cardIMG.attr("alt", "Player 2 | Card 1");

    var p2c2cardIMG = $("<img>");
    p2c2cardIMG.addClass("cards");
    p2c2cardIMG.addClass("pointerHover");
    p2c2cardIMG.addClass("player2cards");
    p2c2cardIMG.attr("src", p2card2SRC);
    p2c2cardIMG.attr("data-description", "blank");
    p2c2cardIMG.attr("data-face", "blank");
    p2c2cardIMG.attr("data-state", "face");
    p2c2cardIMG.attr("alt", "Player 2 | Card 2");

    var p2c3cardIMG = $("<img>");
    p2c3cardIMG.addClass("cards");
    p2c3cardIMG.addClass("pointerHover");
    p2c3cardIMG.addClass("player2cards");
    p2c3cardIMG.attr("src", p2card3SRC);
    p2c3cardIMG.attr("data-description", "blank");
    p2c3cardIMG.attr("data-face", "blank");
    p2c3cardIMG.attr("data-state", "face");
    p2c3cardIMG.attr("alt", "Player 2 | Card 3");

    var p2c4cardIMG = $("<img>");
    p2c4cardIMG.addClass("cards");
    p2c4cardIMG.addClass("pointerHover");
    p2c4cardIMG.addClass("player2cards");
    p2c4cardIMG.attr("src", p2card4SRC);
    p2c4cardIMG.attr("data-description", "blank");
    p2c4cardIMG.attr("data-face", "blank");
    p2c4cardIMG.attr("data-state", "face");
    p2c4cardIMG.attr("alt", "Player 2 | Card 4");

    var p2c5cardIMG = $("<img>");
    p2c5cardIMG.addClass("cards");
    p2c5cardIMG.addClass("pointerHover");
    p2c5cardIMG.addClass("player2cards");
    p2c5cardIMG.attr("src", p2card5SRC);
    p2c5cardIMG.attr("data-description", "blank");
    p2c5cardIMG.attr("data-face", "blank");
    p2c5cardIMG.attr("data-state", "face");
    p2c5cardIMG.attr("alt", "Player 2 | Card 5");

    var p1hand = $("<div>");
    var p2hand = $("<div>");
    p1hand.append(p1c1cardIMG);
    p1hand.append(p1c2cardIMG);
    p1hand.append(p1c3cardIMG);
    p1hand.append(p1c4cardIMG);
    p1hand.append(p1c5cardIMG);

    p2hand.append(p2c1cardIMG);
    p2hand.append(p2c2cardIMG);
    p2hand.append(p2c3cardIMG);
    p2hand.append(p2c4cardIMG);
    p2hand.append(p2c5cardIMG);

    //appends players' hand
    $("#p1battlefield").empty();
    $("#p2battlefield").empty();
    $("#p1battlefield").append(p1hand);
    $("#p2battlefield").append(p2hand);


    // $(".cards").on("click", function (event) {
    //     var state = $(this).attr("data-state");

    //     if (state === "face") {
    //         $(this).attr("src", $(this).attr("data-description"));
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-face"));
    //         $(this).attr("data-state", "still");
    //     }
    // });
});
// <img class="player2cards" src="./assets/images/joker.png">

// Get a working request from the DeckOfCards API

var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";
var cards = "2H,2S,2D,2C,3H,3S,3D,3C,4H,4S,4D,4C"
var p1deckId = "";
var p2deckId = "";
var p1cardDrawn = "";
var p2cardDrawn = "";
var p1Hand = [];
var p2Hand = [];

// Grabs a deck of cards for Player 1
$.ajax({
    url: url + cards,
    method: "GET",
}).then(response => {

    console.log("Player 1 Deck");
    console.log(response);
    p1deckId = response.deck_id;
});


// Grabs a deck of cards for Player 2
$.ajax({
    url: url + cards,
    method: "GET",
}).then(response => {

    console.log("Player 2 Deck");
    console.log(response);
    p2deckId = response.deck_id;
});

// Nests an AJAX call within a function to allow for Player 1 to draw a card from the DeckOfCards API
function p1DrawACard(playerIdDeck) {
    
    let drawURL = "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=1"

    $.ajax({
        url: drawURL,
        method: "GET",
    }).then(response => {

        console.log(response.cards[0].code);
        console.log("Card drawn.");
        p1Hand.push(response.cards[0]);

    });

}

// Nests an AJAX call within a function to allow for Player 2 to draw a card from the DeckOfCards API
function p2DrawACard(playerIdDeck) {

    let drawURL = "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=1"

    $.ajax({
        url: drawURL,
        method: "GET",
    }).then(response => {

        console.log(response.cards[0].code);
        console.log("Card drawn.");
        p2Hand.push(response.cards[0]);

        // });
    });

}

// function that loops through the player's hand array and adds attack values.
function addAttackValues(handArray) {

    for (var i = 0; i < handArray.length; i++) {
        console.log(handArray[i].code);

        // Conditionals that add an Attack value based on their SUIT.
        if (handArray[i].suit === "HEARTS") {
            console.log("This card is a HEART, it has an attack value of 5");
            handArray[i].attack = "5";
        }
        else if (handArray[i].suit === "DIAMONDS") {
            console.log("This card is a DIAMOND, it has an attack value of 6");
            handArray[i].attack = "6";
        }
        else if (handArray[i].suit === "SPADES") {
            console.log("SPADE")
            handArray[i].attack = "7";
        }
        else if (handArray[i].suit === "CLUBS") {
            console.log("CLUB")
            handArray[i].attack = "8";
        }
    }
}

// function that loops through the player's hand array and adds defense values.
function addDefenseValues(handArray) {

    for (var i = 0; i < handArray.length; i++) {
        console.log(handArray[i].code);

        // Conditionals that add an Defense value based on their Card's Value.
        if (handArray[i].value === "2") {
            handArray[i].defense = "2";
            console.log(handArray[i].defense);
        }
        else if (handArray[i].value === "3") {
            handArray[i].defense = "3";
            console.log(handArray[i].defense);
        }
        else if (handArray[i].value === "4") {
            handArray[i].defense = "4";
            console.log(handArray[i].defense);
        }
    }
}

function addImageToCards(handArray) {

    for (var i = 0; i < handArray.length; i++) {
        console.log(handArray[i]);

        // Conditionals that look for the value and suit and change the IMG key value pair to reflect our custom cards.
        if ((handArray[i].value === "2") && (handArray[i].suit === "HEARTS")) {
            // console.log(handArray[i].image);
            console.log("You have a 2 of Hearts")
        }
        else if (handArray[i].value === "2" && handArray[i].suit === "DIAMONDS") {
            // console.log(handArray[i].image);
            console.log("You have a 2 of Diamonds")
        }
        else if (handArray[i].value === "2" && handArray[i].suit === "SPADES") {
            // console.log(handArray[i].image);
            console.log("You have a 2 of Spades")
        }
        else if (handArray[i].value === "2" && handArray[i].suit === "CLUBS") {
            // console.log(handArray[i].image);
            console.log("You have a 2 of Clubs")
        }
        else if (handArray[i].value === "3" && handArray[i].suit === "HEARTS") {
            console.log("You have a 3 of Hearts")
        }
        else if (handArray[i].value === "3" && handArray[i].suit === "DIAMONDS") {
            console.log("You have a 3 of Diamonds")
        }
        else if (handArray[i].value === "3" && handArray[i].suit === "SPADES") {
            console.log("You have a 3 of Spades")
        }
        else if (handArray[i].value === "3" && handArray[i].suit === "CLUBS") {
            console.log("You have a 3 of Clubs")
        }
        else if (handArray[i].value === "4" && handArray[i].suit === "HEARTS") {
            console.log("You have a 4 of Hearts")
        }
        else if (handArray[i].value === "4" && handArray[i].suit === "DIAMONDS") {
            console.log("You have a 4 of Diamonds")
        }
        else if (handArray[i].value === "4" && handArray[i].suit === "SPADES") {
            console.log("You have a 4 of Spades")
        }
        else if (handArray[i].value === "4" && handArray[i].suit === "CLUBS") {
            console.log("You have a 4 of Clubs")
        }
        else {
            console.log("Nothing happened cause you drew TRASH")
        }
    }
}

function displayPlayer1Hand(handArray) {

    for (var i=0; i < handArray.length; i++) {
        let divTagsForCard = $("div");
        let imgTags = $("<img>");

        $("#player1hand").append("<img src='" + handArray[i].image + "'/>");
    }
}

function displayPlayer2Hand(handArray) {

    for (var i=0; i < handArray.length; i++) {
        let divTagsForCard = $("div");
        let imgTags = $("<img>");

        $("#player2hand").append("<img src='" + handArray[i].image + "'/>");
    }
}