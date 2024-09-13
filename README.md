# bens-frontend-app
Stableford Showdown - One Hole Frontend Prototype: Requirements Document

Overview:
Golf can be a long, competitive game where the fun fades if one player pulls too far ahead. Stableford Showdown is designed to make real-life golf more exciting by introducing arcade-like elements, transforming each hole into a dynamic and unpredictable competition. With powerups, players can keep the competition close and the leaderboard lively, ensuring no one is ever truly out of the game. Inspired by MarioKart, powerups create exciting twists, ensuring that every hole can change the course of the game.

The initial prototype focuses on a single-hole game using Stableford scoring. Powerups, earned by achieving net par or better, will introduce fun and strategy to the gameplay. This prototype will serve as the foundation for future iterations that could include multiple holes and expanded game modes.

Project Scope:
Target Audience: Golfers looking for a fun and interactive way to enhance their real-life rounds.
Primary Objective: Keep the game exciting by introducing powerups to prevent one player from running away with the game and making the leaderboard more dynamic.
Frontend-Only: All game logic will be handled on the frontend, with no need for backend integration. Game progress will be stored temporarily using local storage.

Key Features:
Player Setup:
Players can input names and optional handicaps.
Limit between 2 and 4 players.
Players will manually input their net score (strokes adjusted for handicap), ensuring a quick and straightforward setup.
Stableford Scoring for One Hole:
Players input their net score for the hole.
The app calculates and displays points based on Stableford rules:
0 points: 2+ over par
1 point: 1 over par (bogey)
2 points: par
3 points: 1 under par (birdie)
4 points: 2 under par (eagle)
5 points: 3 under par (albatross)
Powerups Mechanic:
Earning Powerups: Players earn a powerup by scoring net par or better on a hole.
Using Powerups: Players can use powerups strategically before or after submitting scores to influence gameplay.
Powerup Types:
Mulligan: Replay your last stroke.
Stroke Sabotage: Add one stroke to an opponent's score.
Score Shield: Block another player from using a powerup against you.
Score Multiplier: Multiply your Stableford points for the hole by 2.
Live Scoreboard:
Displays total points for each player after the hole.
Tracks powerup usage and shows remaining powerups for each player.
Detailed Functional Requirements:
Initial Setup Screen:

Input fields for player names.
Start the game when all players are added.
Hardcoded par value for the hole (3, 4, or 5).
Game Screen (Single Hole):

Player Name and Net Score Input: Section for each player to input their net score.
Powerup Usage: Players can activate powerups from their inventory before or after submitting their scores.
Submit Score Button: Once scores are submitted, the app calculates points and applies powerup effects.
Score Calculation Logic:

Calculate Stableford points based on net scores compared to par.
Apply powerup effects (e.g., additional points or strokes).
Scoreboard:

Show total scores, remaining powerups, and a record of which powerups were used during the hole.
Non-Functional Requirements:
Responsive Design: Optimized for mobile devices to ensure smooth use on a golf course.
Performance: Ensure quick, real-time updates without delays in score and powerup changes.
Frontend Technology: Use React.js or plain JavaScript for state management and local storage for game progress.
UI/UX Considerations:
Simplicity: A user-friendly interface for quick score and powerup inputs.
Clear Feedback: Ensure players understand the impact of powerup usage and score changes.
Real-Time Updates: Display the updated leaderboard immediately after scores are submitted
