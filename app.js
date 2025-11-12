// 🎯 Selecting Elements
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#newgame');
let congratsMsg = document.querySelector('.para');
let drawMsg = document.querySelector('.Draw');

// 🎯 Initial Setup
let turnO = true; // true => O's turn, false => X's turn
let count = 0;    // For checking draw

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// 🎯 Functions
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  congratsMsg.innerText = `🎉 Congrats Player ${winner}, You Won!`;
  congratsMsg.classList.remove("hide");
  drawMsg.classList.add("hide");
  disableBoxes();
};

const showDraw = () => {
  drawMsg.innerText = "🤝 It's a Draw!";
  drawMsg.classList.remove("hide");
  congratsMsg.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 && pos2 && pos3 && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return true;
    }
  }
  return false;
};

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  congratsMsg.classList.add("hide");
  drawMsg.classList.add("hide");
};

// 🎯 Main Logic
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (!isWinner && count === 9) {
      showDraw();
    }
  });
});

// 🎯 Button Events
resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);
