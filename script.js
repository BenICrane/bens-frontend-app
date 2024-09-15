#leaderboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
}

.player-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    border: 2px solid #00ff00;
    border-radius: 8px;
    box-shadow: 0 0 10px #00ff00;
}

.player-name, .player-score {
    color: #00ff00;
    text-shadow: 0px 0px 8px #00ff00;
    font-size: 18px;
}

.score-input {
    width: 60px;
    padding: 5px;
    font-size: 16px;
    background-color: #000;
    color: #00ff00;
    border: 2px solid #00ff00;
    text-align: center;
}

.add-score-btn, .powerup-btn {
    font-family: 'Press Start 2P', sans-serif;
    padding: 10px;
    background-color: #000;
    color: #00ff00;
    border: 2px solid #00ff00;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-score-btn:hover, .powerup-btn:hover {
    background-color: #00ff00;
    color: #000;
}
