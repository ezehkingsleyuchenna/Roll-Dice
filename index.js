function rollDice() {
	let randomNumber1 = Math.floor(Math.random() * 6) + 1,
	randomNumber2 = Math.floor(Math.random() * 6) + 1;
	const img1 = document.querySelector('.img1'),
	img2 = document.querySelector('.img2'),
	message = document.getElementById('message');

	img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
	img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

	message.innerHTML = 
		(randomNumber1 == randomNumber2) ?
		"Draw!" : (
			(randomNumber1 > randomNumber2) ? "Player 1 Wins!" : "Player 2 Wins!"
		);
}

const rollDiceBtn = document.getElementById('rollDice');
rollDiceBtn.addEventListener('click', rollDice);