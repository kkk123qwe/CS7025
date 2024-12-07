$(document).ready(function () {
  console.log("Ready!");

  // Variables
  let table = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]; // 2D array to track game state
  let player = 0; // 0 for X, 1 for O
  const playerSymbols = ["X", "O"];
  const cellDim = 100;
  let selectedRow = 0;
  let selectedCol = 0;

  // Ensure cells are equal size
  $("#table td").each(function () {
    $(this).css({
      height: cellDim + "px",
      width: cellDim + "px",
    });
  });

  // Click event listener for the table
  $("#table").on("click", "td", function () {
    selectedRow = $(this).parent().index();
    selectedCol = $(this).index();

    // Take turn
    if (isFree(selectedRow, selectedCol)) {
      table[selectedRow][selectedCol] = playerSymbols[player];
      $(this).html(playerSymbols[player]);

      if (checkForWin()) {
        alert(`Player ${playerSymbols[player]} has won!`);
        resetGame();
      } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
      } else {
        // Change player
        player = 1 - player;
        $("#currentPlayer").text(`Current Player: ${playerSymbols[player]}`);
      }
    }
  });

  // Check if a cell is free
  function isFree(row, col) {
    return table[row][col] === "";
  }

  // Check for win
  function checkForWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        table[row][0] === table[row][1] &&
        table[row][1] === table[row][2] &&
        table[row][0] !== ""
      ) {
        return true;
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        table[0][col] === table[1][col] &&
        table[1][col] === table[2][col] &&
        table[0][col] !== ""
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      (table[0][0] === table[1][1] &&
        table[1][1] === table[2][2] &&
        table[0][0] !== "") ||
      (table[0][2] === table[1][1] &&
        table[1][1] === table[2][0] &&
        table[0][2] !== "")
    ) {
      return true;
    }

    return false;
  }

  // Check if the board is full
  function isBoardFull() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (table[row][col] === "") {
          return false;
        }
      }
    }
    return true;
  }

  // Reset the game
  window.resetGame = function () {
    table = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    player = 0;
    $("#table td").html("");
    $("#currentPlayer").text("Current Player: X");
  };
});
