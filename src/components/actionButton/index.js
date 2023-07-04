import './actionButton.css';
import {FaPlay, FaPause, FaUndo} from 'react-icons/fa';
export function ActionButton(props) {
  const pauseGame = () => {
    props.setGameStatus('pause')
  }
  const startGame = () => {
    props.setGameStatus('playing')
  }
  const beforPlay = (
    <button className='button beforPlay' onClick={startGame}>
      <FaPlay />
    </button>
  );
  const playing = (
    <button className='button playing' onClick={pauseGame}>
      <FaPause />
    </button>
  );
  const pause = (
    <div className='button pause'>
      <button className='button-rounded-left beforPlay' onClick={props.continueGame}>
        <FaPlay />
      </button>
      <button className='button-rounded-right restartGame' onClick={props.retartGame}>
        <FaUndo />
      </button>
    </div>
  );
  if (props.gameStatus === 'beforPlay') {
    return beforPlay;
  }
  if (props.gameStatus === 'playing') {
    return playing;
  }
  if (props.gameStatus === 'pause') {
    return pause;
  }
}
