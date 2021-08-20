/*
======Functions game project
Rock, Paper or Scissors

*/

//funct. to take user choice
//user input bomb is a cheat
const getUserChoice =userInput =>{
     userInput=userInput.toLowerCase();
     if(userInput==='rock' || userInput==='paper' ||userInput==='scissors' || userInput==='bomb' ){
       return userInput;
     }else{
       return 'an valid input!';
     }
};

//console.log(getUserChoice('Paper'));
//funct. dat returns computer choice
const getComputerChoice= () =>{
  let options=Math.floor(Math.random()*3);
  switch (options){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    default :
    return 'scissors';
    break;
  }
};

//console.log(getComputerChoice());
//funct. to determine winner
function determineWinner(userChoice,computerChoice){
  if(userChoice===computerChoice) {
   return 'It\'s a tie game. Play again!';
  };
  if(userChoice ==='rock'){
    if(computerChoice==='paper'){
     return 'Computer won!';
    }else{
      return 'You won!';
    }
  };
if(userChoice==='paper'){
  if(computerChoice==='scissors'){
    return 'Computer won!'
  }else{
    return 'You won!'
  }
};
  if(userChoice==='scissors'){
    if(computerChoice==='paper'){
      return 'You won!';
    }else{
      return 'Computer won!';
    }
  };
  if(userChoice==='bomb'){
    return 'Bingo u hit the secret cheat. You are a champ!';
  }
  return 'Enter a valid input'
};

//console.log(determineWinner('paper','paper'));
//funct to play game n print result
const playGame= inputByUser =>{
  const userChoice=getUserChoice(inputByUser);
  const computerChoice=getComputerChoice();
  console.log(`You drew: ${userChoice}`);
   console.log(`Computer drew a: ${computerChoice}`);

    console.log(determineWinner(userChoice,computerChoice));

};

playGame('rock');
