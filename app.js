//  start new game
//  || take user input ||
//  || computer generate choice ||
//  || find round winner ||
//  || output message ||
//  change score
//  check for game win

//  take user input and repeat

const choices = ['rock', 'paper', 'scissors'];
const maxRounds = 5;

const computerChoice = getComputerChoice().toUpperCase();
const userInput = getUserInput().toUpperCase();

//game function
game();

// functions below

function getUserInput() {
	const userInput = prompt(
		'Please enter your choice (rock, paper, scissors)'
	).toLowerCase();
	if (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors') {
		console.log('please only use rock paper or scissors.');
	}
	return userInput;
}

function getComputerChoice() {
	const choice = choices[Math.floor(Math.random() * 3)];
	return choice;
}

function playRound(computer, user) {
	if (computer === user) {
		console.log('Tie');
		return 'tie';
		// user wins
	} else if (
		(computer === 'ROCK' && user === 'PAPER') ||
		(computer === 'PAPER' && user === 'SCISSORS') ||
		(computer === 'SCISSORS' && user === 'ROCK')
	) {
		console.log(`User wins! ${user} beats ${computer}`);
		return 'user';
	} else if (
		(computer === 'ROCK' && user === 'SCISSORS') ||
		(computer === 'PAPER' && user === 'ROCK') ||
		(computer === 'SCISSORS' && user === 'PAPER')
	) {
		console.log(`You Lose! ${computer} beats ${user}`);
		return 'cpu';
	}
}

function game() {
	let userScore = 0;
	let cpuScore = 0;
	let playing = true;

	for (let i = 0; i < maxRounds; i++) {
		const winner = playRound(computerChoice, userInput);
		switch (winner) {
			case 'cpu':
				cpuScore++;
				break;
			case 'user':
				userScore++;
				break;
			case 'tie':
				break;
		}
		console.table(cpuScore, userScore);
	}
}
