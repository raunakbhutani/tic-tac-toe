# 🎮 MyTicTacToe - Interactive Tic Tac Toe Game

Welcome to **MyTicTacToe**, an enhanced and interactive version of the classic Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS. This project stands out from traditional implementations by incorporating **immersive sound effects** that make every move feel engaging and rewarding.

## 🌟 What Makes It Different?

Unlike standard Tic Tac Toe games, MyTicTacToe features:

- **🔊 Interactive Sound Effects** - Every interaction provides audio feedback:
  - **Move Sound**: A satisfying "ting" sound plays when a player places their mark
  - **Game Over Sound**: Celebratory audio plays when someone wins or the game ends in a draw
  
- **🎨 Modern UI Design** - Clean, intuitive interface with smooth animations and hover effects
- **⚡ Real-Time Game State Updates** - Instantly displays whose turn it is
- **🎯 Win Modal** - Elegant popup that celebrates victories with style
- **🔄 Quick Reset** - Easy reset button to play again immediately

## 📋 Features

✅ **Two-Player Gameplay** - Play as X and O in turns  
✅ **Win Detection** - Automatically detects winning combinations  
✅ **Draw Detection** - Recognizes when the game ends in a draw  
✅ **Turn Indicator** - Clear display of whose turn it is  
✅ **Sound Effects** - Audio cues for moves and game over states  
✅ **Responsive Design** - Plays smoothly on different screen sizes  
✅ **Modal Notifications** - Beautiful popup for game results  
✅ **Easy Reset** - Both in-game and modal reset options  

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies required - uses vanilla JavaScript!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raunakbhutani/tic-tac-toe.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd tic-tac-toe
   ```

3. **Open `index.html` in your browser**
   - Simply double-click `index.html` or
   - Right-click and select "Open with" your preferred browser
   - Or use a local server (e.g., `python -m http.server` or VS Code Live Server)



## 🎮 How to Play

1. **Start the Game**: Open the game in your browser
2. **Take Turns**: Click on any empty square to place your mark (X or O)
3. **Win the Game**: Get three of your marks in a row (horizontal, vertical, or diagonal)
4. **Game Results**: A modal will appear announcing the winner or if it's a draw
5. **Play Again**: Click "Play Again" in the modal or use the "Reset" button to start a new game

### Winning Conditions
A player wins by getting three of their marks in a row:
- **Horizontal**: Any complete row
- **Vertical**: Any complete column
- **Diagonal**: Either diagonal across the board

## 💻 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with SCSS nesting, animations, and responsive design
- **Vanilla JavaScript** - Pure JS, no frameworks needed!
- **Web Audio API** - For sound effects

## 🔊 Sound Design

The game includes carefully selected sound effects that enhance the user experience:

| Sound File | Purpose | Trigger |
|---|---|---|
| `ting.mp3` | Move confirmation | When a player places their mark |
| `Copy of gameover.mp3` | Game conclusion | When someone wins or the game draws |

## 🎨 Styling Highlights

- **Custom Color Scheme**: Purple accents (#911d91) with soft backgrounds
- **Smooth Animations**: Modal popup animations for a polished feel
- **Hover Effects**: Interactive feedback when hovering over boxes
- **Responsive Layout**: Uses viewport-width (vw) units for scalability
- **Modern Typography**: Google Fonts (Lora and Funnel Sans)

## 🎯 Game Logic

### Win Detection Algorithm
The game checks for wins across 8 possible combinations:
- 3 rows
- 3 columns
- 2 diagonals

### Draw Detection
When all 9 squares are filled without a winner, the game declares a draw.




## 👨‍💻 Author

**Raunak Bhutani**  
GitHub: [@raunakbhutani](https://github.com/raunakbhutani)

## 🙏 Acknowledgments

- Built as a fun project to explore vanilla JavaScript
- Inspired by the classic Tic Tac Toe game
- Enhanced with sound effects for better user engagement

---

## 🎉 Enjoy Playing!

Have fun competing with friends and family! If you enjoy this project, please give it a ⭐ star on GitHub!

**Happy Gaming! 🎮✨**
