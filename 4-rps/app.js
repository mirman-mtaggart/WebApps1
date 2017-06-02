var beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

// var message = `scissors beats ${beats["scissors"]}`;

// Get computer random choice
function getComputerChoice() {
    var choices = Object.keys(beats);
    var choice = choices[Math.floor(Math.random()* 3)];
    console.log(choice);
    return choice;
}

function playerChoice(c) {
    var computerChoice = getComputerChoice();
    if (beats[c] == computerChoice) {
        alert(`You win against ${computerChoice}`);
    } else if (beats[computerChoice] == c) {
        alert(`You lose against ${computerChoice}`);
    } else {
        alert("Tie!");
    }

}

// Determine winner

// Output who won/modify scoreboard 