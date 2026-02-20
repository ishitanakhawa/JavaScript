let divs = document.querySelectorAll(".parent-div div");
let turn = 0;
let player1moves = [];
let player2moves = [];

let winningMoves = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function checkWinner(moves) {
  for (let combo of winningMoves) {
    if (combo.every((cell) => moves.includes(cell))) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return player1moves.length + player2moves.length === 9;
}

function resetGame() {
  player1moves = [];
  player2moves = [];
  turn = 0;
  divs.forEach((d) => {
    d.innerText = "";
  });
}

divs.forEach((d) => {
  d.addEventListener("click", () => {
    if (turn == 0) {
      d.innerText = "X";
      player1moves.push([...divs].indexOf(d) + 1);
      console.log(player1moves);

      if (checkWinner(player1moves)) {
        setTimeout(() => {
          alert("Player 1 (X) wins! 🎉");
          resetGame();
        }, 100);
        return;
      }
      turn = 1;
    } else {
      d.innerText = "O";
      player2moves.push([...divs].indexOf(d) + 1);
      console.log(player2moves);

      if (checkWinner(player2moves)) {
        setTimeout(() => {
          alert("Player 2 (O) wins! 🎉");
          resetGame();
        }, 100);
        return;
      }
      turn = 0;
    }

    if (checkDraw()) {
      setTimeout(() => {
        alert("It's a draw! 🤝");
        resetGame();
      }, 100);
    }
  });
});
