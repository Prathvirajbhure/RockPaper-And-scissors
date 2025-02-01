let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScoreElement();

// Array to store players
const Players = JSON.parse(localStorage.getItem('Players')) || [];

renderPlayerList();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') result = 'You lose.';
        else if (computerMove === 'paper') result = 'You win.';
        else result = 'Tie.';
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') result = 'You win.';
        else if (computerMove === 'paper') result = 'Tie.';
        else result = 'You lose.';
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') result = 'Tie.';
        else if (computerMove === 'paper') result = 'You lose.';
        else result = 'You win.';
    }

    if (result === 'You win.') score.Wins++;
    else if (result === 'You lose.') score.Losses++;
    else if (result === 'Tie.') score.Ties++;

    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('Players', JSON.stringify(Players));

    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = 
        `You <img src="icons/${playerMove}-emoji.png" class="icon"> , Computer 
        <img src="icons/${computerMove}-emoji.png" class="icon">`;

    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) return 'rock';
    else if (randomNumber < 2/3) return 'paper';
    else return 'scissors';
}

function addPlayerName() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value.trim();

    if (name) {
        Players.push({
            name: name,
            playerScore: { ...score } // Copy score object
        });

        localStorage.setItem('Players', JSON.stringify(Players));
        renderPlayerList();
    }

    inputElement.value = '';
}

function renderPlayerList() {
    let PlayersHTML = '';

    for (let i = 0; i < Players.length; i++) {
        const { name, playerScore } = Players[i];

        PlayersHTML += `
            <div>
                <div style="margin-top: 7px;">${name}</div>
                <div style="margin-top: 7px;">Wins: ${playerScore.Wins}, Losses: ${playerScore.Losses}, Ties: ${playerScore.Ties}</div>           
                <button onclick="deletePlayer(${i})" style="margin-bottom: 7px;">Delete</button>
            </div>
        `;
    }

    document.querySelector('.js-div').innerHTML = PlayersHTML;
}

function deletePlayer(index) {
    Players.splice(index, 1);
    localStorage.setItem('Players', JSON.stringify(Players));
    renderPlayerList();
}
