let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
const ting = new Audio("ting.mp3");
const gameOverSound = new Audio("Copy of gameover.mp3");
let turnDetails = document.querySelector(".turn-details");  // turnContainer =  in vdo
let winModal = document.querySelector(".modal");
let winMessageContent = document.querySelector("#winMessage");
let playAgain = document.querySelector("#playAgain");
let isGameOver = false;
let turn = 'X';

const changeTurn = () => {

    turn = turn === 'X' ? '0' : 'X';
}

const checkWin = () => {

    const winPositions = [ // indexes where a player can win
        
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < winPositions.length; i++) {

        let indexes = winPositions[i];  // grabbing index of each subarray in the winPositions

        if(boxes[indexes[0]].innerHTML === boxes[indexes[1]].innerHTML &&
            boxes[indexes[1]].innerHTML === boxes[indexes[2]].innerHTML &&
            boxes[indexes[0]].innerHTML !== ""
        ) {

            let winner = boxes[indexes[0]].innerHTML;
            turnDetails.innerHTML = `${winner} won!`;
            isGameOver = true;
            gameOverSound.play();

            // open the win modal
            winMessageContent.innerHTML = `Player ${winner} Wins 🎉`;
            winModal.style.display = 'flex';
            playAgain.addEventListener('click', resetGameInModal);
            
        }

    }
}; 


for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', (e) => { // whenever user clicks a box

        if(e.target.innerHTML === "" && !isGameOver) { // add X/0 only if the box is empty && when the game is not over

            e.target.innerHTML = turn;
            changeTurn();
           
            turnDetails.innerHTML = `Turn for ${turn}`;
        
            ting.play();  // play the ting sound after every turn
        
            checkWin();  

            checkForDraw();
        }
    });
}

const resetGameInModal = () => {

for(let i = 0; i < boxes.length; i++) {

    boxes[i].innerHTML = '';
}
    turn = 'X';  // start with "X" as the new game starts
    isGameOver = false;
    turnDetails.innerHTML = "Turn for X";  // start the new game with X
    winModal.style.display = 'none';
};

reset.addEventListener('click', (e) => {

    resetGameInModal();
});

const checkForDraw = () => {

    let anyBoxEmpty = false;  // initially no box is empty

    for(let i = 0; i < boxes.length; i++) {

        if(boxes[i].innerHTML === '') { // if any box is empty

            anyBoxEmpty = true;
            break;
        }
}
        if(anyBoxEmpty)
            return;

        if(!anyBoxEmpty && !isGameOver) {

            winMessageContent.innerHTML = `It's a Draw! 🤝`;
            winModal.style.display = 'flex';
            playAgain.addEventListener('click', resetGameInModal);
            gameOverSound.play();
            isGameOver = true;
        }
    
}