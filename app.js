//This function takes a players choice
//It then evaluates the players choice
//compared to the computers choice
//It then should tell the user who won.
function play(playerChoice) {
  let compChoice = 'scissors';

  //If player picks rock
  if (playerChoice == 'rock') {

    if (compChoice == 'rock') {
      alert(`Computer picked ${compChoice} so you tied`);
    } else if (compChoice == 'paper') {
      alert(`Computer picked ${compChoice} so you lose`);
    } else {
      alert(`Computer picked ${compChoice} so you won`)
    }

    //If player picks paper
  } else if (playerChoice == 'paper') {

    if (compChoice == 'rock') {
      alert(`Computer picked ${compChoice} so you won`);
    } else if (compChoice == 'paper') {
      alert(`Computer picked ${compChoice} so you tied`);
    } else {
      alert(`Computer picked ${compChoice} so you lose`);
    }

    //If player picks scissors
  } else {

    if (compChoice == 'paper') {
      alert(`Computer picked ${compChoice} so you won`);
    } else if (compChoice == 'rock') {
      alert(`Computer picked ${compChoice} so you lose`);
    } else {
      alert(`Computer picked ${compChoice} so you tied`);
    }
  }
}