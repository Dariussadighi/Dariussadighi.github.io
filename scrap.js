var nullArr = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
];

var a1 = $('#0');
var a2 = $('#1');
var a3 = $('#2');
var b1 = $('#3');
var b2 = $('#4');
var b3 = $('#5');
var c1 = $('#6');
var c2 = $('#7');
var c3 = $('#8');

var winsArray = [
      // horizontal wins
      [a1, a2, a3],
      [b1, b2, b3],
      [c1, c2, c3],
      // vertical wins
      [a1, b1, c1],
      [a2, b2, c2],
      [a3, b3, c3],
      // diagonal wins
      [a1, b2, c3],
      [c1, b2, a3]
];


counter++;
var turns = counter % 2;
if (turns != 0) {
  $(".circle").click(function() {
  // if ($(this).css('background-color') == "rgba(0, 0, 0, 0)"){
  //     console.log('success')
      $(this).css("background-color", "lightcoral");
  } else if (turns === 0) {
    $(".circle").click(function() {
  // if ($(this).css('background-color') == "rgba(0, 0, 0, 0)"){
  //     console.log('success')
      $(this).css("background-color", "lightblue");

  })
  }
})
}



 //     setTimeout(function(){
  //       location.reload();
  //     }, 2000)
  //   }
  // }

// var a1 = $('#0');
// var a2 = $('#1');
// var a3 = $('#2');
// var b1 = $('#3');
// var b2 = $('#4');
// var b3 = $('#5');
// var c1 = $('#6');
// var c2 = $('#7');
// var c3 = $('#8');


    // checks if player one has won
var checkPlayerOneWin = function() {
    // check if player two wins horizontal row
  if(gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1) {
    $('#win').append("Player one wins.");
  } else if(gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1) {
    $('#win').append("Player one wins.");
  } else if(gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1) {
    $('#win').append("Player one wins.");
    // check if payer one wins vertical column
  } else if(gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1) {
    $('#win').append("Player one wins.");
  } else if(gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1) {
    $('#win').append("Player one wins.");
  } else if(gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1) {
    $('#win').append("Player one wins.");
    // checks if player one wins diagonal row
  } else if(gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard [2][2] === 1) {
    $('#win').append("Player one wins.");
  } else if(gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard [2][0] === 1) {
    $('#win').append("Player one wins.");
    }
  }

    // checks if player two has won
var checkPlayerTwoWin = function() {
    // check if player two wins horizontal row
   if(gameBoard[0][0] === 0 && gameBoard[0][1] === 0 && gameBoard[0][2] === 0) {
    $('#win').append("Player two wins.");
  } else if(gameBoard[1][0] === 0 && gameBoard[1][1] === 0 && gameBoard[1][2] === 0) {
    $('#win').append("Player two wins.");
  } else if(gameBoard[2][0] === 0 && gameBoard[2][1] === 0 && gameBoard[2][2] === 0) {
    $('#win').append("Player two wins.");
    // check if payer two wins vertical column
  } else if(gameBoard[0][0] === 0 && gameBoard[1][0] === 0 && gameBoard[2][0] === 0) {
    $('#win').append("Player two wins.");
  } else if(gameBoard[0][1] === 0 && gameBoard[1][1] === 0 &&gameBoard[2][1] === 0) {
    $('#win').append("Player two wins.");
  } else if(gameBoard[0][2] === 0 && gameBoard[1][2] === 0 && gameBoard[2][2] === 0) {
    $('#win').append("Player two wins.");
    // checks if player two wins diagonal row
  } else if(gameBoard[0][0] === 0 && gameBoard[1][1] === 0 && gameBoard [2][2] ===0) {
    $('#win').append("Player two wins.");
  } else if(gameBoard[0][2] === 0 && gameBoard[1][1] === 0 && gameBoard [2][0] === 0) {
    $('#win').append("Player two wins.");
  }
}






// html

#win {
  background-color: #131e27;
  padding: 70px 0 70px;
  color: lightblue;
}


<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<script src="jquery.js"></script>
<script type="text/javascript" src="script.js"></script>
  <title></title>
</head>
<body>


<header>
<h1>Tic Tac Toe</h1>
<div class="container">
</div>

<div class="row"><a href="#" id="reset" class="btn-success btn span3" >Restart</a></div></div>
</div>

</div>
</body>
</html>

