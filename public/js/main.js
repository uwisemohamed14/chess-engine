// Computer makes a move with algorithm choice and skill/depth level
var makeMove = function(algo, skill=7) {

  if (game.game_over() === true) {
    console.log('game over');
    return;
  }
  // Calculate the best move, using minimax (alpha beta)
  var move = calcBestMove(skill, game, game.turn())[1];

  // Make the calculated move
  game.move(move);
  // Update board positions
  board.position(game.fen());
}


// Handles what to do after human makes move.
// Computer automatically makes next move
var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // If illegal move, snapback
  if (move === null) return 'snapback';

  // Log the move
  // console.log(move)

  // make move for black
  window.setTimeout(function() {
    makeMove(4, 3);
  }, 250);
};
