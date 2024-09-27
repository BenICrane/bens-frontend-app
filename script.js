document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('startGameButton');
  const setupScreen = document.getElementById('setupScreen');
  const gameScreen = document.getElementById('gameScreen');
  const leaderboard = document.getElementById('leaderboard');
  const scoreModal = document.getElementById('scoreModal');
  const closeModalButton = document.getElementById('closeModalButton');
  const holeDisplay = document.getElementById('holeDisplay');

  // Select player input fields
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  const player3Input = document.getElementById('player3');
  const player4Input = document.getElementById('player4');

  // add powerups
  const powerups = [
  { name: 'Bombs away', emoji: '💣', description: 'Use your driver without taking a stroke' },
  { name: 'Tap it in', emoji: '🏒', description: 'Use your putter without taking a stroke' },
  { name: 'Seven is heaven', emoji: '7️⃣', description: 'Use your 7 iron without taking a stroke' },
  { name: 'Footwedge', emoji: '🥾', description: 'Kick your ball once' },
  { name: 'Mulligan', emoji: '🔁', description: 'Retake your shot, or make another player retake theirs!' },
  { name: 'Swapsies', emoji: '🧑‍🤝‍🧑', description: 'Swap positions with your nearest player' },
  { name: 'Teeball', emoji: '👕', description: 'Tee your ball up wherever you are on the course' },
  { name: 'King of the (sand)castle', emoji: '👑', description: 'Move the leading player to their nearest bunker' },
  { name: 'Bunker break', emoji: '🏖️', description: 'Take a free shot from a bunker' },
  { name: 'Ladies room', emoji: '👵', description: 'Take your tee shot from the ladies\' tee' },
  { name: 'Tag team', emoji: '🤝', description: 'Choose a partner at the start of a hole - both take the best score between the two of you' },
  { name: 'Back on the road', emoji: '🛣️', description: 'Move your ball back to the fairway (you cannot move closer to the hole)' }
];


  // Mock Data for now
  const players = [
    { name: 'A', totalScore: 0, activePowerup: null },
    { name: 'B', totalScore: 0, activePowerup: null },
    { name: 'C', totalScore: 0, activePowerup: null },
    { name: 'D', totalScore: 0, activePowerup: null }
  ];

  // Function to sort players by score
  function sortPlayersByScore(players) {
    return players.sort((a, b) => b.totalScore - a.totalScore); // Sort descending by score
  }

  let currentHole = 1;
  const totalHoles = 6;

  function checkHoleCompletion() {
    if (players.every(player => player.hasRecordedScore)) {
      currentHole++;
      players.forEach(player => player.hasRecordedScore = false);
      holeDisplay.textContent = `Hole: ${currentHole} / ${totalHoles}`;
      if (currentHole === totalHoles) {
      showFinishGameButton();
      }
    }
  }

  function showFinishGameButton() {
    const finishButtonContainer = document.createElement('div');
    finishButtonContainer.classList.add('start-game'); // Use the same class as the start button container

    const finishButton = document.createElement('button');
    finishButton.id = 'finishGameButton';
    finishButton.textContent = 'Finish Game';
    finishButton.classList.add('start-game'); 

     // Append the button to the container
    finishButtonContainer.appendChild(finishButton);

    gameScreen.appendChild(finishButtonContainer);

    finishButton.addEventListener('click', () => {
      alert('Game Over! Show final results.');
      // Additional logic for handling end of the game
    });
  }


  // Function to assign a random powerup
  function assignRandomPowerup(player) {
    if (!player.activePowerup) { // If the player has no active powerup
    const randomPowerup = powerups[Math.floor(Math.random() * powerups.length)];
    player.activePowerup = randomPowerup;
    }
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
      // Powerup Button (Only visible if the player has a powerup)
    if (player.activePowerup) {
      const powerupButton = document.createElement('button');
      powerupButton.classList.add('powerup-btn');
      powerupButton.textContent = player.activePowerup.emoji;
      
      // Show Powerup details on click
      powerupButton.addEventListener('click', () => {
        showPowerupModal(player.activePowerup, player);
      });

      buttonContainer.appendChild(powerupButton); // Append powerup button
    } else {
      // Add an empty space to keep alignment if no powerup
      const emptySpace = document.createElement('span');
      emptySpace.classList.add('empty-space');
      buttonContainer.appendChild(emptySpace);
    }

      // Append buttons to button container
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
    scoreModal.style.display = 'none'; // Close modal
    currentPlayer.totalScore += points; // Add points to player's score
    if (points >= 2) { // Par or better
        assignRandomPowerup(currentPlayer); // Assign powerup if applicable
    }
    currentPlayer.hasRecordedScore = true;
    checkHoleCompletion();
    renderLeaderboard(players); // Re-render leaderboard
  });
});

  // handle close modal button
  closeModalButton.addEventListener('click', () => {
  scoreModal.style.display = 'none'; // Close modal without changing score
});

  // Show Powerup Modal
  function showPowerupModal(powerup, player) {
  const powerupModal = document.getElementById('powerupModal');
  const powerupContent = document.getElementById('powerupContent');
  
  powerupContent.innerHTML = `<h2>${powerup.emoji} <p>${powerup.name}</p></h2><p>${powerup.description}</p>`;
  currentPowerupPlayer = player;
  powerupModal.style.display = 'block';
  modalOverlay.style.display = 'block';
}

  // Handle using the powerup
document.getElementById('usePowerupButton').addEventListener('click', () => {
  if (currentPowerupPlayer) {
    // Reset the player's active powerup to null after use
    currentPowerupPlayer.activePowerup = null;

    // Re-render the leaderboard to remove the powerup button
    renderLeaderboard(players);

    // Close the modal
    document.getElementById('powerupModal').style.display = 'none';
    modalOverlay.style.display = 'none';
  }
});


// Close Powerup Modal
  document.getElementById('closePowerupModal').addEventListener('click', () => {
  document.getElementById('powerupModal').style.display = 'none';
  modalOverlay.style.display = 'none';
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
