import {useState} from 'react';
import {LetterButton} from '../../components/letterButton';
import { ActionButton } from '../../components/actionButton';
import "./home.css"
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
  const [status, setStatus] = useState('pause');

  return (
    <div className='board'>
      {letters.map((letter) => {
        return <LetterButton letter={letter} letters={letters} setLetters={setLetters} key={letter.name}>{letter.name}</LetterButton>;
      })}
      <ActionButton status={status} setStatus={setStatus}>O</ActionButton>
    </div>
  );
}
