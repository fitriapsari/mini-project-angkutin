const Button = ({ text, onClick, className, id }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      {text}
    </button>
  )
}

export default Button
