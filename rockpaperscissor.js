/*
Rock-Paper-Scissors Game
    Use conditions to determine the winner.
    Use a function to let the user play against the computer.
    Store choices in an array for easy access.
*/

let rockPaperScissors = ['Rock','Paper','Scissor'];

let computerRandomGame = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
console.log(`The computer chose : ${computerRandomGame}`);
let userRandomGame;
function userPlay(){
  userRandomGame = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
  console.log(`The user chose : ${userRandomGame}`);
  if (userRandomGame === computerRandomGame) {
        console.log("It's a tie!");
    } else if (
        (userRandomGame === "Rock" && computerRandomGame === "Scissor") ||
        (userRandomGame === "Paper" && computerRandomGame === "Rock") ||
        (userRandomGame === "Scissor" && computerRandomGame === "Paper")
    ) {
        console.log("User Wins! 🎉");
    } else {
        console.log("Computer Wins! 💻");
    }
  return userRandomGame;
}
userPlay();

 
  
