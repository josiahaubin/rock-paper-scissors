//This function takes a players choice
//It then evaluates the players choice
//compared to the computers choice
//It then should tell the user who won.
function play(playerChoice) {

  let compSelect = randComputerChoice();

  //If player picks rock
  if (playerChoice == 'rock') {

    if (compSelect == 'rock') {
      alert(`Computer picked ${compSelect} so you tied`);
    } else if (compSelect == 'paper') {
      alert(`Computer picked ${compSelect} so you lose`);
    } else {
      alert(`Computer picked ${compSelect} so you won`)
    }

    //If player picks paper
  } else if (playerChoice == 'paper') {

    if (compSelect == 'rock') {
      alert(`Computer picked ${compSelect} so you won`);
    } else if (compSelect == 'paper') {
      alert(`Computer picked ${compSelect} so you tied`);
    } else {
      alert(`Computer picked ${compSelect} so you lose`);
    }

    //If player picks scissors
  } else {

    if (compSelect == 'paper') {
      alert(`Computer picked ${compSelect} so you won`);
    } else if (compSelect == 'rock') {
      alert(`Computer picked ${compSelect} so you lose`);
    } else {
      alert(`Computer picked ${compSelect} so you tied`);
    }
  }
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