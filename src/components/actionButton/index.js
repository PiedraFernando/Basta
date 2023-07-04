import './actionButton.css';
import {FaPlay, FaPause, FaUndo} from 'react-icons/fa';
export function ActionButton(props) {
  const beforPlay = (
    <button className="button beforPlay" onClick={props.startGame}>
      <FaPlay />
    </button>
  );
  const playing = (
    <button className="button playing" onClick={props.pauseGame}>
      <div>
        <h1>{props.time}s</h1>
        <FaPause className='bgColor'/>
      </div>
    </button>
  );
  const pause = (
    <div className="button pause">
      <button className="button-rounded-left beforPlay" onClick={props.continueGame}>
        <FaPlay />
      </button>
      <button className="button-rounded-right restartGame" onClick={props.retartGame}>
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
