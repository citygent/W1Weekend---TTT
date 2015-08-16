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

var r1c1 = document.getElementById('r1c1');
var r1c2 = document.getElementById('r1c2');
var r1c3 = document.getElementById('r1c3');
var r2c1 = document.getElementById('r2c1');
var r2c2 = document.getElementById('r2c2');
var r2c3 = document.getElementById('r2c3');
var r3c1 = document.getElementById('r3c1');
var r3c2 = document.getElementById('r3c2');
var r3c3 = document.getElementById('r3c3');

r1c1.addEventListener('click', turn);
r1c2.addEventListener('click', turn);
r1c3.addEventListener('click', turn);
r2c1.addEventListener('click', turn);
r2c2.addEventListener('click', turn);
r2c3.addEventListener('click', turn);
r3c1.addEventListener('click', turn);
r3c2.addEventListener('click', turn);
r3c3.addEventListener('click', turn);

//tried event listeners sending arguments to functions, didn't work. tried making loop to connect through the DOM (see wireBoard, below) which sort-of worked but couldn't get to work properly (assigned '3 3' to every array value). Also couldnt get a make addEventListener loop to work.

var gameBoard = [
                ['','',''],
                ['','',''],
                ['','','']
];

function getWinner(gameBoard) {
  //array gets chekced in while loop for all col = player, all row = player, and then the diagnola posibiliies. Long but can make work?
}

var counter = 0;
while(counter < 10){
  // put everything in a loop, whilst loop is true, update divs to status of index's in an array?
}

function wireBoard() {
  for(row = 0; row <=2; row++) {
    for(col = 0; col <=2; col++) {
      gameBoard[row][col] = document.getElementById('r'+(row+1)+'-c'+(col+1));
    }
  }
}
// wireBoard(); sets array indexes to div, not what intended.
// what I intended was to have linked the elements somehow. I think this should be done as part of turn() possibly?

function turn() {
  if (counter%2===0) {
    var player = 'X';
    this.innerHTML = player;
    counter++
  } else {
    var player = 'O';
    this.innerHTML = player;
    counter++
  }
}