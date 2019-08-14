//This function takes a players choice
//It then evaluates the players choice
//compared to the computers choice
//It then should tell the user who won.
function play(playerChoice) {

  let result;
  let compSelect = randComputerChoice();

  //If player picks rock
  if (playerChoice == 'rock') {

    if (compSelect == 'rock') {
      result = `Computer picked ${compSelect} so you tied`;
    } else if (compSelect == 'paper') {
      result = `Computer picked ${compSelect} so you lose`;
    } else {
      result = `Computer picked ${compSelect} so you won`;
    }

    //If player picks paper
  } else if (playerChoice == 'paper') {

    if (compSelect == 'rock') {
      result = `Computer picked ${compSelect} so you won`;
    } else if (compSelect == 'paper') {
      result = `Computer picked ${compSelect} so you tied`;
    } else {
      result = `Computer picked ${compSelect} so you lose`;
    }

    //If player picks scissors
  } else {

    if (compSelect == 'paper') {
      result = `Computer picked ${compSelect} so you won`;
    } else if (compSelect == 'rock') {
      result = `Computer picked ${compSelect} so you lose`;
    } else {
      result = `Computer picked ${compSelect} so you tied`;
    }
  }
  draw(result);
}
//This function will randomize the computers choice
//and return a value to be used in play()
function randComputerChoice() {

  let randNum = Math.floor((Math.random() * 3));
  let compSelect;

  if (randNum == 0) {
    compSelect = 'rock';
    return compSelect;
  } else if (randNum == 1) {
    compSelect = 'paper';
    return compSelect;
  } else {
    compSelect = 'scissors'
    return compSelect;
  }

}
let winCount = 0;
let tieCount = 0;
let lossCount = 0;

function draw(result) {
  let resultElement = document.querySelector("#resultHeading");
  let countElement = document.querySelector("#runningCountHeading");

  resultElement.textContent = result;


  let win = result.indexOf("won");
  let tie = result.indexOf('tied');
  let loss = result.indexOf('lose');

  if (win != -1) {
    winCount++;
  } else if (tie != -1) {
    tieCount++;
  } else if (loss != -1) {
    lossCount++;
  }
  countElement.textContent = "Wins: " + winCount + " Ties: " + tieCount + " Losses: " + lossCount;
}

