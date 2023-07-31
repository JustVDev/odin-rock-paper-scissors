const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
const MAXPOINTS = 5;

const computerChoiceDom = document.querySelector('.computer-choice');
const userScoreDOM = document.querySelector('.player-score');
const computerScoreDOM = document.querySelector('.cpu-score');

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');

//game function
game();

function game() {
	//game initialized when user clicks button
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			userChoice = btn.dataset.type;
			computerChoice = getComputerInput();
			playRound(userChoice, computerChoice);
			if (userScore >= MAXPOINTS) {
				computerChoiceDom.textContent = 'USER WON!';
			} else if (computerScore >= MAXPOINTS) {
				computerChoiceDom.textContent = 'CPU Won!';
			}
		});
	});
}

function getComputerInput() {
	const choice = CHOICES[Math.floor(Math.random() * 3)];
	return choice;
}

function playRound(user, computer) {
	if (computer === user) {
		computerChoiceDom.textContent = `TIE!`;
		return 'tie';
		// user wins
	} else if (
		(computer === 'ROCK' && user === 'PAPER') ||
		(computer === 'PAPER' && user === 'SCISSORS') ||
		(computer === 'SCISSORS' && user === 'ROCK')
	) {
		userScore++;
		userScoreDOM.textContent = `User: ${userScore}`;
		computerChoiceDom.textContent = `Computer Choice = ${computer}`;

		return 'user';
	} else if (
		(computer === 'ROCK' && user === 'SCISSORS') ||
		(computer === 'PAPER' && user === 'ROCK') ||
		(computer === 'SCISSORS' && user === 'PAPER')
	) {
		computerScore++;
		computerScoreDOM.textContent = `${computerScore}: Computer`;
		computerChoiceDom.textContent = `Computer Choice = ${computer}`;

		return 'cpu';
	}
}

year.textContent = new Date().getFullYear();
