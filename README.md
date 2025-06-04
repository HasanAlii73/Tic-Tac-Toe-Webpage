# Tic Tac Toe - JavaScript Project

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Approach](#development-approach)
- [License](#license)

## Description

This is a browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript as part of a JavaScript course project. The game follows best practices in object-oriented programming and modular design, with minimal global code.

## Features

- Two-player Tic Tac Toe game
- Player name input customization
- Game board rendered dynamically
- Win detection for all possible 3-in-a-row combinations
- Tie game detection
- Restart game functionality
- Clean, responsive interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HasanAlii73/Tic-Tac-Toe-Webpage/
   ```
2. Open the project directory:
   ```bash
   cd tic-tac-toe-js
   ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Enter player names in the input fields
2. Click "Start Game" to begin
3. Players take turns clicking on squares to place their marks (X or O)
4. The game automatically detects wins or ties
5. Click "Restart Game" to play again

## Project Structure

The project follows a modular pattern with these main components:

```
tic-tac-toe-js/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # Main JavaScript file
└── README.md           # This file
```

### JavaScript Architecture

The code is organized using the module pattern with these main objects:

1. **Gameboard**: Manages the game state and board array
2. **Player**: Factory for creating player objects
3. **GameController**: Handles game flow and logic
4. **DisplayController**: Manages all DOM interactions

## Development Approach

This project was developed following these principles:

1. **First make it work (console)**: Initial development focused on game logic without UI
2. **Minimal global code**: Most functionality is encapsulated in modules
3. **Separation of concerns**: Game logic and display logic are separate
4. **Factory functions**: Used for creating player instances
5. **IIFE modules**: For single-instance controllers (gameboard, display)

The development process followed these steps:
1. Set up project files and Git repository
2. Create Gameboard object to manage game state
3. Implement Player factory for player objects
4. Build GameController to manage game flow
5. Add win/tie detection logic
6. Create DisplayController to handle DOM interactions
7. Implement UI features (player names, restart button)
8. Polish the interface and user experience

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy the game! For any issues or suggestions, please open an issue in the repository.