import {useState} from 'react';
import {LetterButton} from '../../components/letterButton';
import {ActionButton} from '../../components/actionButton';
import './home.css';
const defaultLetters = [
  {
    name: 'A',
    status: true,
  },
  {
    name: 'B',
    status: true,
  },
  {
    name: 'C',
    status: true,
  },
  {
    name: 'D',
    status: true,
  },
  {
    name: 'E',
    status: true,
  },
  {
    name: 'F',
    status: true,
  },
  {
    name: 'G',
    status: true,
  },
  {
    name: 'H',
    status: true,
  },
  {
    name: 'I',
    status: true,
  },
  {
    name: 'J',
    status: true,
  },
  {
    name: 'K',
    status: true,
  },
  {
    name: 'L',
    status: true,
  },
  {
    name: 'M',
    status: true,
  },
  {
    name: 'N',
    status: true,
  },

  {
    name: 'Ñ',
    status: true,
  },
  {
    name: 'O',
    status: true,
  },
  {
    name: 'P',
    status: true,
  },
  {
    name: 'Q',
    status: true,
  },
  {
    name: 'R',
    status: true,
  },
  {
    name: 'S',
    status: true,
  },
  {
    name: 'T',
    status: true,
  },
  {
    name: 'U',
    status: true,
  },
  {
    name: 'V',
    status: true,
  },
  {
    name: 'W',
    status: true,
  },
  {
    name: 'X',
    status: true,
  },
  {
    name: 'Y',
    status: true,
  },
  {
    name: 'Z',
    status: true,
  },
];

export function Home() {
  const [letters, setLetters] = useState(defaultLetters);
  const [gameStatus, setGameStatus] = useState('beforPlay');
  const [time, setTime] = useState(20);
  const [intervalGame, setIntervalGame] = useState();
  const counter = () => {
    setIntervalGame(
      setInterval(() => {
        setTime((last) => {
          return last - 1;
        });
      }, 1000)
    );
  }
  const continueGame = () => {
    setGameStatus('playing');
    counter()
  };
  const retartGame = () => {
    setGameStatus('beforPlay');
    setLetters(defaultLetters);
    clearInterval(intervalGame)
    setTime(20)
  };
  const pauseGame = () => {
    setGameStatus('pause');
    clearInterval(intervalGame)
  };
  const startGame = () => {
    setGameStatus('playing');
    setLetters(defaultLetters);
    counter()
  };
  return (
    <div className="board">
      {letters.map((letter) => {
        return (
          <LetterButton setTime={setTime} gameStatus={gameStatus} letter={letter} letters={letters} setLetters={setLetters} key={letter.name}>
            {letter.name}
          </LetterButton>
        );
      })}
      <ActionButton time={time} gameStatus={gameStatus} continueGame={continueGame} retartGame={retartGame} pauseGame={pauseGame} startGame={startGame}>
        O
      </ActionButton>
    </div>
  );
}
