import "./letterButton.css"
export function LetterButton(props) {
  const buttonLetterClick = () =>{
    if(props.gameStatus==='playing'){
      const newLetters = props.letters.map((letter)=>{
        if(letter.name === props.letter.name && letter.status===true){
          props.setTime(20)
          return {...props.letter, status:false}
        }
        return letter
      })
      props.setLetters(newLetters)
    }
  }
  return (
    <button className={`${props.letter.status?'active':'disabled'} button`} onClick={buttonLetterClick}>
      {props.children}
    </button>
  );
}
