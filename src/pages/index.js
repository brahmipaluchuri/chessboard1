import React, {  useRef, useState } from 'react';


import 'chessboard-element';

export default function Home() {

  const [flipped, setFlipped] = useState(false); // Add state for flipped
  const[position,setPosition] = useState('start')
  let boardRef = useRef(null)

  const handleFlip = (event) => {
    event.preventDefault();   
    setFlipped((prevFlipped) => !prevFlipped)
  };

  const handleClear = (event) => {
    event.preventDefault();
    if (boardRef.current) {
      boardRef.current.setPosition('8/8/8/8/8/8/8/8 w - - 0 1'); // Empty position in FEN notation
    }
  };

  const handleSetPosition = (event) => {
    event.preventDefault();
    //  setPosition('start')
  if (boardRef.current) {
    boardRef.current.setPosition('start'); // Reset to the starting position
  }
  };


    return (
      <>
      <div>
        <h1 className='home'>chess board</h1>
        <chess-board
          position={position}
          orientation={flipped ? 'black' : 'white'}
          draggable-pieces
          ref={boardRef}
          >
        </chess-board>
        <button  onClick={handleFlip}>Flip Board</button>
        <button  onClick={handleClear}>Clear Board</button>
        <button  onClick={handleSetPosition}>Start Position</button>
      </div>
      <div className='home-footer'>&copy;Right belongs to brahmi developer</div>
      </>
    );
  }

