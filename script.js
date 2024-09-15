document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('startGameButton');
  const setupScreen = document.getElementById('setupScreen');
  const gameScreen = document.getElementById('gameScreen');
  const leaderboard = document.getElementById('leaderboard');

  // Mock Data for now
  const players = [
    { name: 'Player 1', totalScore: 13, powerup: 'Mulligan' },
    { name: 'Player 2', totalScore: 12, powerup: 'Score Multiplier' },
    { name: 'Player 3', totalScore: 8, powerup: 'Score Shield' },
    { name: 'Player 4', totalScore: 1, powerup: 'Score Shield' }
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

    sortedPlayers.forEach((player, index) => {
      const playerRow = document.createElement('div');
      playerRow.classList.add('player-row');

      // Player Position (Rank)
      const playerPosition = document.createElement('span');
      playerPosition.classList.add('player-position');
      playerPosition.textContent = `${index + 1}`; // Position is the index + 1

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
      addScoreButton.textContent = 'ADD SCORE \u26F3'
      / Add logic to increase score and re-render leaderboard
      addScoreButton.addEventListener('click', () => {
        player.totalScore += 1; // Increase score by 1 (or modify as needed)
        renderLeaderboard(players); // Re-render leaderboard after score change
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
      playerRow.appendChild(playerPosition);
      playerRow.appendChild(playerName);
      playerRow.appendChild(playerScore);
      playerRow.appendChild(buttonContainer);

      leaderboard.appendChild(playerRow); // Add player row to leaderboard
    });
  }

  // Handle start game
  startGameButton.addEventListener('click', () => {
    setupScreen.style.display = 'none'; // Hide setup screen
    gameScreen.style.display = 'block'; // Show game screen

    renderLeaderboard(players); // Display the leaderboard with mock data
  });
});

