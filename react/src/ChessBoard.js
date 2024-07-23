import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

function ChessGame() {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for simplicity
    });

    if (move === null) return 'snapback';
    setFen(game.fen());
  };

  return (
    <div className="chess-game">
      <h1>Chess Game</h1>
      <Chessboard
        position={fen}
        onPieceDrop={onDrop}
        boardOrientation="white"
      />
    </div>
  );
}

export default ChessGame;
