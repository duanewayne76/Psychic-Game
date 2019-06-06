//Instructions:

//## Option One: Psychic Game (Basic)

//2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
//Math.floor(Math.random() * 10);

//3. Guess what letter I'm thinking of

//4. Wins: (# of times the user has guessed the letter correctly)

//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//6. Guesses Left: (# of guesses left. This will update)

//7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// Our array of letters
//var alphaLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//console.log(alphaLetters.length);

//var userGuess = prompt("Guess what letter I'm thinking of...");


// Array that lists the letters of the alphabet.
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;

function guessingGame() {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var userGuess = [];
    var guessesOutput = document.getElementById("guesses");

    var guessesLeft = 9
    document.onkeypress = function (event) {
        console.log(event)
        userGuess.push(event.key);
        console.log(guessesOutput.textContent)
        guessesOutput.textContent = userGuess.join(", ")
        if (guessesLeft = 0) {
            //reset userGuesses, clean out html span, pick another computerchoice, reset guesses left, add losses
            
        }
        

        if (userGuess === computerChoice) {
            wins++;
        } else {
            guessesLeft--;
        }

        if (guesses = 0) {
            losses++
        }


        guessesLeft--;



    }
}
window.addEventListener('load', guessingGame);



    //document.onkeypress = function (event) {

        //Variable for user's guess
       // var userGuess = event.key;

        // Variable to capture user's guessed
       // var userGuess = [];

        // Variables to hold the number of wins, losses, and ties. They start at 0.
       // var wins = 0;
       // var losses = 0;
       // var guesses = 10;

        // When the user presses a key, it will run the following function...


       // if (userGuess === computerChoice) {
       //     wins++;
       // } else {
       //     guesses--;
       // }

       // if (guesses = 0) {
       //     losses++
       // }


        // Create variables that hold references to the places in the HTML where we want to display things.
        //var directionsText = document.getElementById("directions-text");
        //var userChoiceText = document.getElementById("userchoice-text");
        //var computerChoiceText = document.getElementById("computerchoice-text");
        //var winsText = document.getElementById("wins-text");
        //var lossesText = document.getElementById("losses-text");
        //var tiesText = document.getElementById("ties-text");





        // Display the user and computer guesses, and wins/losses/ties.
        //userChoiceText.textContent = "You chose: " + userGuess;
        //computerChoiceText.textContent = "The computer chose: " + computerGuess;
        //winsText.textContent = "wins: " + wins;
        //lossesText.textContent = "losses: " + losses;
        //tiesText.textContent = "ties: " + ties;
        //}

        //document.getElementById('wins').innerHTML = "Wins: " + wins;
        //document.getElementById('losses').innerHTML = "losses: " + losses;
        //document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;