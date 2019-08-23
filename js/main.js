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

  console.log(playerChoice, computerChoice);
}

// Get computers choices
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'Rock';
  } else if (rand <= 0.67) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// Event Listener
choices.forEach(choice => choice.addEventListener('click', play));
