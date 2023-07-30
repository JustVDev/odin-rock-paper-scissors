const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
const MAXPOINTS = 5;

const computerChoiceDom = document.querySelector('.computer-choice');
const userScoreDOM = document.querySelector('.player-score');
const computerScoreDOM = document.querySelector('.cpu-score');


let userChoice;
let computerChoice;

const btns = document.querySelectorAll('button');

let userScore = 0;
let computerScore = 0;

//game function
game();

function game (){
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			userChoice = btn.dataset.type;
			computerChoice = getComputerInput();
			console.log(userChoice, computerChoice)
			playRound(userChoice, computerChoice);
		})
	});
	if(userScore >= MAXPOINTS){
		computerChoiceDom.textContent = 'USER WON!'
	} else if (computerScore >= MAXPOINTS){
		computerChoiceDom.textContent = 'CPU Won!'
	}
	
	
	
}



function getComputerInput() {
	const choice = CHOICES[Math.floor(Math.random() * 3)];
	return choice;
}

function playRound(user, computer) {
	if (computer === user) {
		console.log('Tie');
		computerChoiceDom.textContent = `Computer Choice = ${computer}`;
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
		computerScoreDOM.textContent =`${computerScore}: Computer`;
		computerChoiceDom.textContent = `Computer Choice = ${computer}`;

		return 'cpu';
	}
}

// function game() {
// 	let userScore = 0;
// 	let cpuScore = 0;
// 	const gameWinner = undefined;

// 	for (let i = 0; i < maxRounds; i++) {
// 		const computerChoice = getComputerInput().toUpperCase();
// 		const userInput = getUserInput().toUpperCase();
// 		let roundWinner = playRound(computerChoice, userInput);
// 		switch (roundWinner) {
// 			case 'cpu':
// 				cpuScore++;
// 				break;
// 			case 'user':
// 				userScore++;
// 				break;
// 			case 'tie':
// 				break;
// 		}
// 	}
// 	console.table(userScore, cpuScore);
// 	if(cpuScore > userScore){
// 		console.log('CPU Won')
// 	} else if (userScore > cpuScore){
// 		console.log("User won!")
// 	} else {
// 		console.log('it was a tie')
// 	}
	
// }


year.textContent =  new Date().getFullYear()