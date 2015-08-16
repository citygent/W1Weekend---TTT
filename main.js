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

var counter = 0;

function turn() {
  if (counter%2===0) {
    var player = 'X';
    placeMove(player);
  } else {
    var player = 'O';
    placeMove(player);
  }
}

function placeMove(player, this) {
  this.innerHTML(player);
}

