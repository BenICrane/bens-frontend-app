document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('startGameButton');
  const setupScreen = document.getElementById('setupScreen');
  const gameScreen = document.getElementById('gameScreen');
  const leaderboard = document.getElementById('leaderboard');
  const scoreModal = document.getElementById('scoreModal');
  const closeModalButton = document.getElementById('closeModalButton');

  // Select player input fields
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  const player3Input = document.getElementById('player3');
  const player4Input = document.getElementById('player4');

  // Mock Data for now
  const players = [
    { name: 'A', totalScore: 0, powerup: 'Mulligan' },
    { name: 'B', totalScore: 0, powerup: 'Score Multiplier' },
    { name: 'C', totalScore: 0, powerup: 'Score Shield' },
    { name: 'D', totalScore: 0, powerup: 'Score Shield' }
  ];

  // Function to sort players by score
  function sortPlayersByScore(players) {
    return players.sort((a, b) => b.totalScore - a.totalScore); // Sort descending by score
  }

  // Function to render the leaderboard with mock player data
  function renderLeaderboard(players) {
    leaderboard.innerHTML = ''; // Clear previous content

    // Sort players by score before rendering
    const sortedPlayers = sortPlayersByScore(players);

    sortedPlayers.forEach((player, index) => { // Added index here
      const playerRow = document.createElement('div');
      playerRow.classList.add('player-row');

      // Player Position (Rank)
      const playerPosition = document.createElement('span');
      playerPosition.classList.add('player-position');
      playerPosition.textContent = `${index + 1})`; // Position is the index + 1

      // Player Name
      const playerName = document.createElement('span');
      playerName.classList.add('player-name');
      playerName.textContent = player.name;

      // Total Score
      const playerScore = document.createElement('span');
      playerScore.classList.add('player-score');
      playerScore.textContent = `${player.totalScore} pts`;

      // Button container for Add Score and Powerup button
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      // Add Score Button
      const addScoreButton = document.createElement('button');
      addScoreButton.classList.add('add-score-btn');
      addScoreButton.textContent = 'ADD SCORE \u26F3';

      addScoreButton.addEventListener('click', () => {
      currentPlayer = player; // Store the current player reference
      scoreModal.style.display = 'block'; // Show modal
      });


      // Powerup Button
      const powerupButton = document.createElement('button');
      powerupButton.classList.add('powerup-btn');
      powerupButton.textContent = '\u2753';
      // Placeholder logic for powerup button
      powerupButton.addEventListener('click', () => {
        alert(`${player.name} has the ${player.powerup} powerup!`);
      });

      // Append buttons to button container
      buttonContainer.appendChild(powerupButton);
      buttonContainer.appendChild(addScoreButton);

      // Append everything to the player row
      playerRow.appendChild(playerPosition); // Add position to row
      playerRow.appendChild(playerName);
      playerRow.appendChild(playerScore);
      playerRow.appendChild(buttonContainer);

      leaderboard.appendChild(playerRow); // Add player row to leaderboard
    });
  }

  // handle score button 
  document.querySelectorAll('.score-option').forEach(button => {
  button.addEventListener('click', (e) => {
    const points = parseInt(e.target.getAttribute('data-points'));
    currentPlayer.totalScore += points; // Add points to player's score
    renderLeaderboard(players); // Re-render leaderboard
    scoreModal.style.display = 'none'; // Close modal
  });
});

  // handle close modal button
  closeModalButton.addEventListener('click', () => {
  scoreModal.style.display = 'none'; // Close modal without changing score
});

  // Handle start game

  startGameButton.addEventListener('click', () => {
    // Capture the names from the input fields
    const player1Name = player1Input.value || 'P1'; // Fallback to 'Player 1' if empty
    const player2Name = player2Input.value || 'P2'; // Fallback to 'Player 2'
    const player3Name = player3Input.value || 'P3'; // Fallback to 'Player 3'
    const player4Name = player4Input.value || 'P4'; // Fallback to 'Player 4'

    // Update players array with inputted names
    players[0].name = player1Name;
    players[1].name = player2Name;
    players[2].name = player3Name;
    players[3].name = player4Name;

    // Hide setup screen and show game screen
    setupScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    // Render the leaderboard with updated player names
    renderLeaderboard(players);
  });
});

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent overlay */
  z-index: 999; /* Keep overlay behind modal but above other content */
  display: none; /* Hidden by default */
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: #222;
  border: 4px solid #00ff00;
  box-shadow: 0 0 15px #00ff00;
  padding: 30px;
  z-index: 1000; /* Ensure it's on top of everything */
  display: none; /* Hidden by default */
}

.modal-content {
  text-align: center;
  font-family: 'Press Start 2P', sans-serif;
}

.score-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 20px 0;
}

.score-option {
  background-color: #000;
  color: #00ff00;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #00ff00;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.score-option:hover {
  background-color: #00ff00;
  color: #000;
}

#closeModalButton {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #000;
  color: #00ff00;
  font-family: 'Press Start 2P', sans-serif;
  border: 2px solid #00ff00;
  cursor: pointer;
}

#closeModalButton:hover {
  background-color: #00ff00;
  color: #000;
}

