import "./actionButton.css"
export function ActionButton(props) {
  return (
    <button className={`${props.status} button`}>
      {props.children}
    </button>
  );
}
