import "./Button.css";

/* export default function Button(props) {
  return <button>{props.text}</button>;
} */
//das ist wegen destructoring so kürzer mit{}
//props = properties/eigenschaften

export default function Button({ text, type, danger }) {
  return (
    <button
      className={`button ${danger ? "button--danger" : ""}`}
      type="{type}"
    >
      {text}
    </button>
  );
}
