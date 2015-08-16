// // TicTacToe
// Build a board that is 3 rows by 3 columns.
// Access HTML board through the DOM.
// Alternating click draws X or O on clicked element.
// After each move check board for a winner
// display winner if there is one
// reset board button?


// var gameBoard = [['r1c1','r1c2','r1c3'],
//                  ['r2c1','r2c2','r2c3'],
//                  ['r3c1','r3c2','r3c3']];
var gameBoard = [
                ['','',''],
                ['','',''],
                ['','','']
];
function wireBoard() {
  for(row = 0; row <=2; row++) {
    for(col = 0; col <=2; col++) {
      gameBoard[row][col] = document.getElementById('r'+(row+1)+'-c'+(col+1));
    }
  }
}
wireBoard();
//Not working, can't fathom why. 

// var gameBoard = [
//                 ['','',''],
//                 ['','',''],
//                 ['','','']
// ];

// gameBoard[0][0] = document.getElementById('r1-c1');
