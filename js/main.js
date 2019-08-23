const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
}

// Play Game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, winner);
}

// Get computers choices
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(pc, cc) {
  if(pc === cc) return 'draw';
  else if (pc === 'rock') {
    if(cc === 'paper') return 'computer';
    else return 'player';
  } else if (pc === 'paper') {
    if(cc === 'scissors') return 'computer';
    else return 'player';
  } else if (pc === 'scissors') {
      if(cc === 'rock') return 'computer';
      else return 'player';
    }
}

// Event Listener
choices.forEach(choice => choice.addEventListener('click', play));
