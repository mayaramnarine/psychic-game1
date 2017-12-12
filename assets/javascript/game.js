
alert("hello")


  var wins = 0;
  var losses = 0;
  var guessesLeft = 0;
  var guessesSoFar = "";
  var computerChoices =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l,', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]


  document.onkeyup = function(event) {

    if (guessesSoFar = computerGuess) {
      wins++ 1;
      guessesLeft ="";
      guessesSoFar.length = 0;
    }
    else if (guessesLeft = 0){
      losses++ 1;
      guessesLeft = "";
      guessesSoFar.length =0;
    }
    else if (guessesSoFar = computerGuess){
      guessesLeft--;
    }

  }

<script src="assets/javascript/game.js"> </script>
</body>
</html>
