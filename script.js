"use strict";

$(document).ready(function(){
  var container = $('.container');

var counter = 1;
var id;

    // null array to keep track of positions
var gameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
];

var idVal = 0;

    // add slots to board
for (var i = 0; i < 3; i++){
    var row = $('<div class="row"></div>');
    container.append(row);
    for (var j = 0; j < 3; j++){
      var circle = $('<div class="circle" id="'+ idVal +'"></div>');
      row.append(circle);
      idVal++
      for (var k = 0; k < 9; k++) {}
    }
  }
    // player one change input to array
var firstMove = function(){
if(id === "0") {
  gameBoard[0][0] = 1;
} else if (id === "1") {
  gameBoard[0][1] = 1;
} else if (id === "2") {
  gameBoard[0][2] = 1;
} else if (id === "3") {
  gameBoard[1][0] = 1;
} else if (id === "4") {
  gameBoard[1][1] = 1;
} else if (id === "5") {
  gameBoard[1][2] = 1;
} else if (id === "6") {
  gameBoard[2][0] = 1;
} else if (id === "7") {
  gameBoard[2][1] = 1;
} else if (id === "8") {
  gameBoard[2][2] = 1;
  }
}

  // player two input to null array
var secondMove = function(){
if(id === "0") {
  gameBoard[0][0] = 0;
} else if (id === "1") {
  gameBoard[0][1] = 0;
} else if (id === "2") {
  gameBoard[0][2] = 0;
} else if (id === "3") {
  gameBoard[1][0] = 0;
} else if (id === "4") {
  gameBoard[1][1] = 0;
} else if (id === "5") {
  gameBoard[1][2] = 0;
} else if (id === "6") {
  gameBoard[2][0] = 0;
} else if (id === "7") {
  gameBoard[2][1] = 0;
} else if (id === "8") {
  gameBoard[2][2] = 0;
  }
}

    // checks if player one has won
var checkPlayerOneWin = function() {
    // check if player two wins horizontal row
  if(gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1  ||
    (gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1) ||
    (gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1) ||
    // check if payer one wins vertical column
    (gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1) ||
    (gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1) ||
    (gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1) ||
    // checks if player one wins diagonal row
    (gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1) ||
    (gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1))
    {
    $('#win').append("Player one wins.");
    $('.circle').unbind();
    setTimeout(function(){
        location.reload();
      }, 3000)
  } else if (counter === 10) {
    $('#win').append("Tie.");
    setTimeout(function(){
        location.reload();
      }, 3000)
   }
  }


    // checks if player two has won
var checkPlayerTwoWin = function() {
    // check if player two wins horizontal row
  if(gameBoard[0][0] === 0 && gameBoard[0][1] === 0 && gameBoard[0][2] === 0  ||
    (gameBoard[1][0] === 0 && gameBoard[1][1] === 0 && gameBoard[1][2] === 0) ||
    (gameBoard[2][0] === 0 && gameBoard[2][1] === 0 && gameBoard[2][2] === 0) ||
    // check if payer two wins vertical column
    (gameBoard[0][0] === 0 && gameBoard[1][0] === 0 && gameBoard[2][0] === 0) ||
    (gameBoard[0][1] === 0 && gameBoard[1][1] === 0 && gameBoard[2][1] === 0) ||
    (gameBoard[0][2] === 0 && gameBoard[1][2] === 0 && gameBoard[2][2] === 0) ||
    // checks if player two wins diagonal row
    (gameBoard[0][0] === 0 && gameBoard[1][1] === 0 && gameBoard[2][2] === 0) ||
    (gameBoard[0][2] === 0 && gameBoard[1][1] === 0 && gameBoard[2][0] === 0))
    {
    $('#win').append("Player two wins.");
    $('.circle').unbind();
    setTimeout(function(){
        location.reload();
      }, 3000)
  } else if (counter === 10) {
    $('#win').append("Tie.");
    setTimeout(function(){
        location.reload();
      }, 3000)
   }
  }

    // click function
counter % 2;
  $(".circle").click(function() {
  $(this).unbind();
  id = $(this).attr('id');
    // player 1 move
  if (counter % 2 === 1) {
      $(this).css("background-color", "lightcoral");
      counter++;
      console.log(gameBoard);
      firstMove();
      checkPlayerOneWin();
  } else if (counter % 2 === 0) {
      $(this).css("background-color", "lightblue");
      counter++;
      console.log(gameBoard);
      secondMove();
      checkPlayerTwoWin();
  }

})

});
