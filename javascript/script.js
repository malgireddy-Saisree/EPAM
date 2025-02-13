const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['✊', '✋', '✌️'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === '✊' && computerChoice === '✌️') ||
    (playerChoice === '✋' && computerChoice === '✊') ||
    (playerChoice === '✌️' && computerChoice === '✋')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'You lose!';
  }
}

// Function to update the UI
function updateUI(playerChoice, computerChoice, result) {
  resultDiv.textContent = `You chose: ${playerChoice}, Computer chose: ${computerChoice}. ${result}`;
  scoreDiv.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
}

// Event listeners for buttons
rockBtn.addEventListener('click', () => {
  const playerChoice = '✊';
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateUI(playerChoice, computerChoice, result);
});

paperBtn.addEventListener('click', () => {
  const playerChoice = '✋';
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateUI(playerChoice, computerChoice, result);
});

scissorsBtn.addEventListener('click', () => {
  const playerChoice = '✌️';
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateUI(playerChoice, computerChoice, result);
});