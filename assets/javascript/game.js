$(document).ready(function() {
  $("#actualGame").hide();
  $("#gamestart").on("click", function() {
    $("#beginbox").hide();
    $("#actualGame").show();
  });
  //   $("#otherButtons").on("click", function() {
  //     setTimeout(function(argument));
  //   });

  $(".cards").hover(
    function() {
      var state = $(this).attr("data-state");

      if (state === "face") {
        $(this).attr("src", $(this).attr("data-description"));
        $(this).attr("data-state", "description");
        $(this)
          .parent()
          .css("z-index", "-2");
      } else {
        $(this).attr("src", $(this).attr("data-face"));
        $(this).attr("data-state", "face");
        $(this)
          .parent()
          .css("z-index", "2");
      }
    }

    // function() {
    //   var state = $(this).attr("data-state");

    //   if (state === "face") {
    //     $(this).attr("src", $(this).attr("data-description"));
    //     $(this).attr("data-state", "description");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-face"));
    //     $(this).attr("data-state", "face");
    //   }
    // }
  );
});

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

var p1card1SRC,
  p1card2SRC,
  p1card3SRC,
  p1card4SRC,
  p1card5SRC,
  p2card1SRC,
  p2card2SRC,
  p2card3SRC,
  p2card4SRC,
  p2card5SRC,
  //   IMGdiv,
  //   cardIMG,
  //   Container,
  //   Description,
  //   Ptag,
  //   Desc,
  description;

p1card1SRC = "./assets/images/cards/drEvil.png";
p1card2SRC = "./assets/images/cards/descriptor.png";
p1card3SRC = "./assets/images/cards/crocDundee.png";
p1card4SRC = "./assets/images/cards/capHook.png";
p1card5SRC = "./assets/images/cards/bruceWayne.png";

p2card1SRC = "./assets/images/cards/descriptor.png";
p2card2SRC = "./assets/images/cards/face.png";
p2card3SRC = "./assets/images/cards/heisenberg.png";
p2card4SRC = "./assets/images/cards/jessePinkman.png";
p2card5SRC = "./assets/images/cards/joker.png";

description = "./assets/images/cards/descriptor.png";

// Get a working request from the DeckOfCards API

var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";
var cards = "2H,2S,2D,2C,3H,3S,3D,3C,4H,4S,4D,4C";
var p1deckId = "";
var p2deckId = "";
var p1cardDrawn = "";
var p2cardDrawn = "";
var p1Hand = [];
var p2Hand = [];

//   Grabs a deck of cards for Player 1 - More specifically this grabs an ID for the players deck to pull from API
$.ajax({
  url: url + cards,
  method: "GET"
}).then(response => {
  console.log("Player 1 Deck");
  console.log(response);
  p1deckId = response.deck_id;
  console.log(p1deckId);
  //for loop draws 5 cards automatically for player at game start
  for (var i = 0; i < 5; i++) {
    setTimeout(p1DrawACard(p1deckId));
    //When this function gets called an attack, defense,
    //and customIMG key value pairs are added to the players hand for each card pulled
  }
});

//   Grabs a deck of cards for Player 2 - More specifically this grabs an ID for the players deck to pull from API
$.ajax({
  url: url + cards,
  method: "GET"
}).then(response => {
  console.log("Player 2 Deck");
  console.log(response);
  p2deckId = response.deck_id;
  console.log(p2deckId);
  //for loop draws 5 cards automatically for player at game start
  for (var i = 0; i < 5; i++) {
    setTimeout(p2DrawACard(p2deckId));
    //When this function gets called an attack, defense,
    //and customIMG key value pairs are added to the players hand for each card pulled
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//call function to see their hand in the console
function logHand(playerHand) {
  console.log(playerHand);
}

// example:
// logHand(p1Hand);
//logHand(p2Hand);
///////////////////////////////////////////////////////////////////////////////////////////////////

// Nests an AJAX call within a function to allow for Player 1 to draw a card from the DeckOfCards API
function p1DrawACard(playerIdDeck) {
  let drawURL =
    "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=1";

  $.ajax({
    url: drawURL,
    method: "GET"
  }).then(response => {
    //console.log("P1 Card Code: " + response.cards[0].code);
    p1Hand.push(response.cards[0]);
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          setTimeout(function() {
            displayPlayer1Hand(p1Hand); //runs fourth after 1300ms
          }, 1000);
          addImageToCards(p1Hand); //runs third after 300ms
        }, 100);
        addDefenseValues(p1Hand); //runs second after 200ms
      }, 100);
      addAttackValues(p1Hand); //runs first, after 100ms
    }, 100);
  });
}

// Nests an AJAX call within a function to allow for Player 2 to draw a card from the DeckOfCards API
function p2DrawACard(playerIdDeck) {
  let drawURL =
    "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=1";

  $.ajax({
    url: drawURL,
    method: "GET"
  }).then(response => {
    //console.log("P2 Card Code: " + response.cards[0].code);
    p2Hand.push(response.cards[0]);
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          //   setTimeout(function() {
          //     displayPlayer2Hand(p2Hand); //runs fourth after 1300ms
          //   }, 1000);
          addImageToCards(p2Hand); //runs third after 300ms
        }, 100);
        addDefenseValues(p2Hand); //runs second after 200ms
      }, 100);
      addAttackValues(p2Hand); //runs first, after 100ms
    }, 100);
  });
}

//setTimeout(displayPlayer1Hand);

// function that loops through the player's hand array and adds attack values.
function addAttackValues(handArray) {
  for (var i = 0; i <= handArray.length; i++) {
    //console.log(handArray[i].code);

    // Conditionals that add an Attack value based on their SUIT.
    if (handArray[i].suit === "HEARTS") {
      //console.log("5");
      handArray[i].attack = "5";
    } else if (handArray[i].suit === "DIAMONDS") {
      //console.log("6");
      handArray[i].attack = "6";
    } else if (handArray[i].suit === "SPADES") {
      //console.log("7");
      handArray[i].attack = "7";
    } else if (handArray[i].suit === "CLUBS") {
      //console.log("8");
      handArray[i].attack = "8";
    } else {
      console.log("More Classifications Needed");
    }
  }
}

// function that loops through the player's hand array and adds defense values.
function addDefenseValues(handArray) {
  for (var i = 0; i <= handArray.length; i++) {
    //console.log(handArray[i].code);

    // Conditionals that add an Defense value based on their Card's Value.
    if (handArray[i].value === "2") {
      handArray[i].defense = "2";
      //console.log(handArray[i].defense);
    } else if (handArray[i].value === "3") {
      handArray[i].defense = "3";
      //console.log(handArray[i].defense);
    } else if (handArray[i].value === "4") {
      handArray[i].defense = "4";
      //console.log(handArray[i].defense);
    } else {
      console.log("More Classifications Needed");
    }
  }
}

function addImageToCards(handArray) {
  for (var i = 0; i <= handArray.length; i++) {
    console.log(handArray[i]);

    // Conditionals that look for the value and suit and change the IMG key value pair to reflect our custom cards.
    if (handArray[i].value === "2" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 2 of Hearts");
      handArray[i].customIMG = p1card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 2 of Diamonds");
      handArray[i].customIMG = p1card2SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "SPADES") {
      //console.log("You have a 2 of Spades");
      handArray[i].customIMG = p1card3SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 2 of Clubs");
      handArray[i].customIMG = p1card4SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 3 of Hearts");
      handArray[i].customIMG = p1card5SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 3 of Diamonds");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "SPADES") {
      //console.log("You have a 3 of Spades");
      handArray[i].customIMG = p2card2SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 3 of Clubs");
      handArray[i].customIMG = p2card3SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 4 of Hearts");
      handArray[i].customIMG = p2card4SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 4 of Diamonds");
      handArray[i].customIMG = p2card5SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "SPADES") {
      //console.log("You have a 4 of Spades");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 4 of Clubs");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else {
      console.log("Nothing happened cause you drew TRASH");
    }
  }
}

function displayPlayer1Hand(handArray) {
  for (var i = 0; i <= handArray.length; i++) {
    var IMGdiv = $("<div>");
    IMGdiv.addClass("absolute");
    IMGdiv.addClass("higherZ");
    var cardIMG = $("<img>");
    cardIMG.addClass("cards");
    cardIMG.addClass("pointerHover");
    cardIMG.addClass("player1cards");
    cardIMG.attr("src", handArray[i].customIMG);
    cardIMG.attr("data-description", description);
    cardIMG.attr("data-face", handArray[i].customIMG);
    cardIMG.attr("data-state", "face");
    cardIMG.attr("alt", "Player X | Card X");

    var Container = $("<div>");
    Container.addClass("justinline");
    Container.addClass("relative");
    var Description = $("<div>");
    Description.addClass("absolute");
    $(Description).css("z-index", "0");
    var cardTitle = $("<h6>");
    cardTitle.addClass("h6");
    var Ptag = $("<p>");
    Ptag.addClass("p");
    $(cardTitle).text(handArray[i].character);
    $(Ptag).text(handArray[i].cardDescription);
    var Title = $(Description).html(cardTitle);
    var Desc = $(Description).html(Ptag);
    Description.addClass("text-block");

    Container.append(Description);
    Container.append(IMGdiv);
    IMGdiv.append(cardIMG);
    Container.append(Title);
    Container.append(Desc);

    $("#p1card" + [i]).append(Container);
  }
}

//   displayPlayer1Hand(p1Hand);

//   setTimeout(displayPlayer1Hand);

function displayPlayer2Hand(handArray) {
  for (var i = 0; i <= handArray.length; i++) {
    var IMGdiv = $("<div>");
    IMGdiv.addClass("absolute");
    IMGdiv.addClass("higherZ");
    var cardIMG = $("<img>");
    cardIMG.addClass("cards");
    cardIMG.addClass("pointerHover");
    cardIMG.addClass("player2cards");
    cardIMG.attr("src", handArray[i].customIMG);
    cardIMG.attr("data-description", description);
    cardIMG.attr("data-face", handArray[i].customIMG);
    cardIMG.attr("data-state", "face");
    cardIMG.attr("alt", "Player X | Card X");

    var Container = $("<div>");
    Container.addClass("justinline");
    Container.addClass("relative");
    var Description = $("<div>");
    Description.addClass("absolute");
    $(Description).css("z-index", "0");
    var cardTitle = $("<h6>");
    cardTitle.addClass("h6");
    var Ptag = $("<p>");
    Ptag.addClass("p");
    $(cardTitle).text(handArray[i].character);
    $(Ptag).text(handArray[i].cardDescription);
    var Title = $(Description).html(cardTitle);
    var Desc = $(Description).html(Ptag);
    Description.addClass("text-block");

    Container.append(Description);
    Container.append(IMGdiv);
    IMGdiv.append(cardIMG);
    Container.append(Title);
    Container.append(Desc);

    $("#p2card" + [i]).append(Container);
  }
}

//   $(".cards").hover(
//     function() {
//       var state = $(this).attr("data-state");

//       if (state === "face") {
//         $(this).attr("src", $(this).attr("data-description"));
//         $(this).attr("data-state", "description");
//         $(this)
//           .parent()
//           .css("z-index", "-2");
//       } else {
//         $(this).attr("src", $(this).attr("data-face"));
//         $(this).attr("data-state", "face");
//         $(this)
//           .parent()
//           .css("z-index", "2");
//       }
//     }

//     // function() {
//     //   var state = $(this).attr("data-state");

//     //   if (state === "face") {
//     //     $(this).attr("src", $(this).attr("data-description"));
//     //     $(this).attr("data-state", "description");
//     //   } else {
//     //     $(this).attr("src", $(this).attr("data-face"));
//     //     $(this).attr("data-state", "face");
//     //   }
//     // }
//   );

//   //   $(".p").hover(function() {
//   //     var NuState = $(this)
//   //       .parent()
//   //       .prev()
//   //       .children(".cards")
//   //       .attr("data-state");
//   //     console.log(NuState);

//   //     if (NuState === "face") {
//   //       $(this).attr(
//   //         "src",
//   //         $(this)
//   //           .parent()
//   //           .prev()
//   //           .children(".cards")
//   //           .attr("data-description")
//   //       );
//   //       $(this)
//   //         .parent()
//   //         .prev()
//   //         .children(".cards")
//   //         .attr("data-state", "description");
//   //     } else {
//   //       $(this)
//   //         .parent()
//   //         .prev()
//   //         .children(".cards")
//   //         .attr("src", $(this).attr("data-face"));
//   //       $(this)
//   //         .parent()
//   //         .prev()
//   //         .children(".cards")
//   //         .attr("data-state", "face");
//   //     }
//   //   });
